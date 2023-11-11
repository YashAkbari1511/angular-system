import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, interval, Observable, ReplaySubject, Subject, Subscription, take, takeUntil, takeWhile, timer } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'wcg-subject',
  templateUrl: './observable-subject-behaviour-subject.component.html',
  styleUrls: ['./observable-subject-behaviour-subject.component.scss']
})
export class ObservableSubjectBehaviourSubjectComponent implements OnInit, OnDestroy {
  observableOutPut: string[] = [];

  subject = new Subject<string>();
  subjectOutPut: string[] = [];

  behaviorSubject = new BehaviorSubject<string>('Atul'); // Atul is the initial value
  behaviourSubjectOutPut: string[] = [];

  asyncSubject = new AsyncSubject<string>();
  asyncSubjectOutPut: string[] = [];

  replaySubject = new ReplaySubject(2); // buffer 3 values for new subscribers.. 2 past and 1 new
  replaySubjectOutPut: string[] = [];

  subscribeInterval!: Subscription;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.setBreadCrumb();

    // this.observableDemo();        // inform all consumers one by one
    // this.subjectDemo();           // inform all consumers simultaneously
    // this.behaviourSubjectDemo();  // inform all consumers simultaneously with initial value
    // this.asyncSubjectDemo();      // just like ajax call, error or final response (value)
    // this.replaySubjectDemo();     // emits last specific number of value to new subscribers
    // this.unsubscribeDemo();       // improve performance by removing memory leaks
  }
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Observable, Subject and BehaviourSubject',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Observable, Subject and BehaviourSubject',
          link: ''
        },
      ]
    });
  }

  observableDemo() {
    const observable = new Observable<string>(subscriber => {
      subscriber.next('Atul');
      subscriber.next('Agrawal');
      subscriber.complete();
    });

    // Subscriber 1
    const observer = {
      next: (x: string) => { this.observableOutPut.push(`Subscribe 1 ==> Value ==> ${x}`) },
      error: (err: any) => { this.observableOutPut.push(`Subscribe 1 ==>  Error ==> ${err}`) },
      complete: () => { this.observableOutPut.push(`Subscribe 1 ==>  Done`); }
    }
    observable.subscribe(observer);

    // Subscriber 2
    observable.subscribe({
      next: (x: string) => { this.observableOutPut.push(`Subscribe 2 ==> Value ==> ${x}`) },
      error: (err: any) => { this.observableOutPut.push(`Subscribe 2 ==>  Error ==> ${err}`) },
      complete: () => { this.observableOutPut.push(`Subscribe 2 ==>  Done`); }
    });
  }

  subjectDemo() {
    // Subscriber 1
    this.subject.subscribe({
      next: (v: any) => { this.subjectOutPut.push(`Subscribe 1 ==> Value ==> ${v}`) }
    });

    // Subscriber 2
    this.subject.subscribe({
      next: (v: string) => { this.subjectOutPut.push(`Subscribe 2 ==> Value ==> ${v}`) }
    });

    this.subject.next('Atul');  // move to 1st line of the fn and see the behaviour 
    this.subject.next('Agrawal');

    // Subscriber 3
    this.subject.subscribe({
      next: (v: string) => { this.subjectOutPut.push(`Subscribe 3 ==> Value ==> ${v}`) }
    });
    this.subject.next('test');
  }

  behaviourSubjectDemo() {
    this.behaviorSubject.subscribe({
      next: (v: string) => { this.behaviourSubjectOutPut.push(`Subscribe 1 ==> Value ==> ${v}`) }
    });

    this.behaviorSubject.next('Agrawal');

    this.behaviorSubject.subscribe({
      next: (v: string) => { this.behaviourSubjectOutPut.push(`Subscribe 2 ==> Value ==> ${v}`) }
    });

    this.behaviorSubject.subscribe({
      next: (v: string) => { this.behaviourSubjectOutPut.push(`Subscribe 3 ==> Value ==> ${v}`) }
    });

    this.behaviorSubject.next('test');
  }

  asyncSubjectDemo() {
    this.asyncSubject.subscribe({
      next: (v: string) => { this.asyncSubjectOutPut.push(`Subscribe 1 ==> Value ==> ${v}`) }
    });

    this.asyncSubject.next('How');
    this.asyncSubject.next('are');
    this.asyncSubject.next('you?');
    this.asyncSubject.next('Atul');

    this.asyncSubject.subscribe({
      next: (v: string) => { this.asyncSubjectOutPut.push(`Subscribe 2 ==> Value ==> ${v}`) }
    });

    this.asyncSubject.next('Agrawal');
    this.asyncSubject.complete();
  }

  replaySubjectDemo() {
    this.replaySubject.subscribe({
      next: (v) => this.replaySubjectOutPut.push(`Subscribe 1 ==> Value ==> ${v}`)
    });

    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);

    this.replaySubject.subscribe({
      next: (v) => this.replaySubjectOutPut.push(`Subscribe 2 ==> Value ==> ${v}`)
    });

    this.replaySubject.next(4);
  }

  unsubscribeDemo() {
    // const observableInterval = interval(1000);
    // this.subscribeInterval = observableInterval.subscribe(x => { console.log(x) });

    // const observableTake = interval(1000);
    // observableTake.pipe(take(5)).subscribe(x => { console.log(`take => ${x + 1} of 5 time(s)`) });

    // const observableTakeUntil = interval(1000);
    // const timer$ = timer(5000);
    // observableTakeUntil.pipe(takeUntil(timer$)).subscribe(x => { console.log(`takeUntil => 5 (${x + 1})`) });

    // const observableTakeWhile = interval(1000);
    // observableTakeWhile.pipe(takeWhile(value => value < 5)).subscribe(x => { console.log(`takeWhile ${x} < 5`) });

  }
  ngOnDestroy(): void {
    console.log(`destroying component ==> `);
    // this.subscribeInterval.unsubscribe();
  }
}
