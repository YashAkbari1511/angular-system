import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb } from '../constants/menu-items';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  breadCrumbData$ = new BehaviorSubject<Breadcrumb>({
    pageTitle: 'Dashboard',
    linkList: [{ label: 'Dashboard', link: '' }]
  });

  constructor() { }
}
