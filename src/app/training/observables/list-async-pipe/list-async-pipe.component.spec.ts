import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsyncPipeComponent } from './list-async-pipe.component';

describe('ListAsyncPipeComponent', () => {
  let component: ListAsyncPipeComponent;
  let fixture: ComponentFixture<ListAsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsyncPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
