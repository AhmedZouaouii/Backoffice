import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeillePageComponent } from './corbeille-page.component';

describe('CorbeillePageComponent', () => {
  let component: CorbeillePageComponent;
  let fixture: ComponentFixture<CorbeillePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeillePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeillePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
