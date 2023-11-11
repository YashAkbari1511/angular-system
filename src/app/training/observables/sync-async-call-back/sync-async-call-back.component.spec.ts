import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncAsyncComponent } from './sync-async-call-back.component';

describe('SyncAsyncComponent', () => {
  let component: SyncAsyncComponent;
  let fixture: ComponentFixture<SyncAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
