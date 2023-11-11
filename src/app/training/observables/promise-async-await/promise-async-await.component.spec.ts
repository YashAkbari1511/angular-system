import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseAsyncAwaitComponent } from './promise-async-await.component';

describe('PromiseAsyncAwaitComponent', () => {
  let component: PromiseAsyncAwaitComponent;
  let fixture: ComponentFixture<PromiseAsyncAwaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseAsyncAwaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseAsyncAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
