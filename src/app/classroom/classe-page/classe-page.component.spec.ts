import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassePageComponent } from './classe-page.component';

describe('ClassePageComponent', () => {
  let component: ClassePageComponent;
  let fixture: ComponentFixture<ClassePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
