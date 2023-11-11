import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, Subscription, tap } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { TrainingService } from '../../training.service';
import { EntryItems } from '../user-observable';

@Component({
  selector: 'wcg-list-async-pipe',
  templateUrl: './list-async-pipe.component.html',
  styleUrls: ['./list-async-pipe.component.scss']
})
export class ListAsyncPipeComponent implements OnInit, OnDestroy {
  @ViewChild('search', { static: true }) search!: ElementRef;

  entries$ = new Observable();
  search$!: Subscription;

  constructor(
    private commonService: CommonService,
    private trainingService: TrainingService,
  ) { }
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Async Pipe - List',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Async Pipe - List',
          link: ''
        },
      ]
    });
  }
  ngOnInit(): void {
    this.setBreadCrumb();
    this.getUsers();

    this.search$ = fromEvent<any>(this.search.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        map((value: string) => value.trim()),
        debounceTime(400),
        distinctUntilChanged(),
      ).subscribe(res => this.getUsers(res));
  }

  // unsubscribe to avoid memory leak issue
  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }

  getUsers(searchText = '') {   //  'Government'
    this.entries$ = this.trainingService.getEntries().pipe(
      map(
        (res: any) => {
          return res.entries.filter((x: any) => {
            return !x.HTTPS && x.Category.toLowerCase().includes(searchText.toLowerCase())
          });
        }
      ),
      tap((res) => {
        console.log('tap ==> final res ==> ', res);
      })
    );
  }

  addItem(entryList: EntryItems[] = []) {
    entryList.push({
      API: 'test',
      Auth: 'token',
      Category: 'Government',
      Cors: 'no',
      Description: 'test description...',
      HTTPS: false,
      Link: 'http://abc.com'
    });
  }

  editItem(entryList: EntryItems[], index: number) {
    console.log(`entryList :>> `, entryList);
    entryList[index] = {
      API: 'test updated',
      Auth: 'token updated',
      Category: 'Government up',
      Cors: 'no up',
      Description: 'test description... updated',
      HTTPS: false,
      Link: 'http://abc.comupdated'
    }
  }

  deleteItem(entryList: EntryItems[], index: number) {
    if (entryList.length && entryList[index]) {
      entryList.splice(index, 1);
    }
  }
}
