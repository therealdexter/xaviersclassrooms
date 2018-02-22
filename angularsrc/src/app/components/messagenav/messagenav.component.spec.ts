import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagenavComponent } from './messagenav.component';

describe('MessagenavComponent', () => {
  let component: MessagenavComponent;
  let fixture: ComponentFixture<MessagenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
