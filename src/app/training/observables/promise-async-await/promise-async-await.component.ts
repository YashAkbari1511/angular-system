import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { TrainingService } from '../../training.service';

@Component({
  selector: 'wcg-promise-async-await',
  templateUrl: './promise-async-await.component.html',
  styleUrls: ['./promise-async-await.component.scss']
})
export class PromiseAsyncAwaitComponent implements OnInit {
  promiseOutPut: string[] = [];
  asyncAwaitOutPut: string[] = [];
  nestedPromiseOutPut: string[] = [];
  promiseAllOutPut: string[] = [];
  forkJoinOutPut: string[] = [];
  serviceOutPut: string[] = [];

  constructor(
    private commonService: CommonService,
    private trainingService: TrainingService,
  ) { }
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'Promise, Awync-Await',
      linkList: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Promise, Awync-Await',
          link: ''
        },
      ]
    });
  }
  ngOnInit(): void {
    this.setBreadCrumb();

    // this.promiseDemo();
    // this.promiseAllDemo();
    // this.forkJoinDemo();
    this.asyncAwaitDemo();
    this.serviceDemo();
  }

  doAsyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const count = 5;    //  : number
        if (count === 5) {   // 4
          resolve('Done');
        } else {
          reject('Error');
        }
      }, 2000);
    });
  }
  fetchJoke() {
    return fetch('https://official-joke-api.appspot.com/random_joke').then(response => response.json())
  }
  fetchRandomUser() {
    return fetch('https://randomuser.me/api/').then(response => response.json())
  }

  promiseDemo() {
    this.doAsyncTask()
      .then((result: any) => {
        this.promiseOutPut.push(`Promise - Success ==> result ==> `, result);    // Success
      })
      .catch((error) => {
        this.promiseOutPut.push(`Promise - Error ==> error ==> `, error);        // Error
      })
      .finally(() => {
        this.promiseOutPut.push(`Promise - Finally ==> execution completed`);    // called everytime, whether it is sucess or fail
      });

    // Nested Promise == Waterfall
    this.fetchJoke()
      .then(response => {
        this.nestedPromiseOutPut.push(`Nested Promise - joke received ==> `);
        return response;
      })
      .then(joke => {
        return this.fetchRandomUser()
          .then(randomUser => {
            this.nestedPromiseOutPut.push(`Nested Promise - randomUser received ==> `);
            return {
              joke,
              randomUser
            }
          })
      })
      .then(({ joke, randomUser }) => {
        this.nestedPromiseOutPut.push(`Nested Promise - final result ==> `, joke, randomUser);
      })
      .catch(error => {
        this.nestedPromiseOutPut.push(`Nested Promise - error ==> `, error);
      })
      .finally(() => {
        this.nestedPromiseOutPut.push(`Nested Promise - finallly completed`);
      })
  }
  promiseAllDemo() {
    Promise.all([
      this.fetchJoke(),
      this.fetchRandomUser()
    ]).then((result: any) => {
      this.promiseAllOutPut.push(`Promise All - result :>> `, result);
    }).catch((error) => {
      this.promiseAllOutPut.push(`Promise All - error :>> `, error);
    });
  }
  forkJoinDemo() {
    forkJoin([
      this.fetchJoke(),
      this.fetchRandomUser()
    ]).subscribe({
      next: (forkResult: any) => {
        this.forkJoinOutPut.push(`forkJoin - forkResult :>> `, forkResult);
      },
      error: (error) => {
        this.forkJoinOutPut.push(`forkJoin - error :>> `, error);
      }
    });
  }

  async asyncAwaitDemo() {
    try {
      const result: any = await this.doAsyncTask();
      this.asyncAwaitOutPut.push(`asyncAwaitDemo ==> result ==> ${result}`);

      const joke: any = await this.fetchJoke();
      this.asyncAwaitOutPut.push(`asyncAwaitDemo ==> joke ==> `, joke);

      const randomUser = await this.fetchRandomUser();
      this.asyncAwaitOutPut.push(`asyncAwaitDemo ==> randomUser ==> `, randomUser);
    } catch (error: any) {
      this.asyncAwaitOutPut.push(`asyncAwaitDemo ==> error ==> `, error);
    } finally {
      this.asyncAwaitOutPut.push(`asyncAwaitDemo ==> AsyncAwait - Completed`);
    }
  }

  async serviceDemo() {
    try {
      const joke: any = await this.getJoke();
      this.serviceOutPut.push(`serviceDemo ==> joke ==> `, joke);
    } catch (error: any) {
      this.serviceOutPut.push(`serviceDemo ==> error ==> `, error);
    }
  }
  getJoke() {
    return new Promise((resolve, reject) => {
      this.trainingService.getJoke().subscribe({
        next: (jokeResponse: any) => {
          this.serviceOutPut.push(`serviceDemo ==> getJoke ==> response`);
          resolve(jokeResponse);
        },
        error: (error: any) => {
          this.serviceOutPut.push(`serviceDemo ==> getJoke ==> error`);
          reject(error);
        },
        complete: () => {
          this.serviceOutPut.push(`serviceDemo ==> getJoke ==> complete`);
        }
      });
    });
  }
}