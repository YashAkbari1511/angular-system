import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-sync-async-call-back',
  templateUrl: './sync-async-call-back.component.html',
  styleUrls: ['./sync-async-call-back.component.scss']
})
export class SyncAsyncCallBackComponent implements OnInit {
  outPutArr: string[] = [];
  constructor(
    private commonService: CommonService
  ) { }
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Sync Async & Call Back',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Sync Async & Call Back',
          link: ''
        },
      ]
    });
  }
  ngOnInit(): void {
    this.setBreadCrumb();
    this.outPutArr.push(`in ==> OnInit `);
    
    // callback
    this.concatName('Atul', 'Agrawal', this.printName);
    
    // sync
    this.f1();
    this.f2();
    this.f3();
    
    // async
    this.f4();
  }
  
  concatName(fName: string = '', lName: string = '', cb: any) {
    cb(`${fName} ${lName}`, this.outPutArr);
  }
  printName(name: string = '', outPutArr: string[]) {
    outPutArr.push(`Concated Name ==> ${name}`);
  }

  f1() {
    this.outPutArr.push(`in ==> f1 `);
  }
  f2() {
    this.outPutArr.push(`in ==> f2 `);
  }
  f3() {
    this.outPutArr.push(`in ==> f3 `);
  }

  f4() {
    setTimeout(() => {
      this.f5();
    }, 1000);
    this.outPutArr.push(`in ==> f4 `);
  }
  f5() {
    setTimeout(() => {
      this.f6();
    }, 0);
    this.outPutArr.push(`in ==> f5 `);
  }
  async f6() {
    await this.f7();
    this.outPutArr.push(`in ==> f6 `);
  }
  f7() {  // async
    setTimeout(async () => {  // await
      await this.f8();
    }, 1000);
    this.outPutArr.push(`in ==> f7 `);
  }
  f8() {
    this.outPutArr.push(`in ==> f8 `);
  }
}