import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmailPageComponent } from './umail-page.component';

describe('UmailPageComponent', () => {
  let component: UmailPageComponent;
  let fixture: ComponentFixture<UmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
