import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourPageComponent } from './cour-page.component';

describe('CourPageComponent', () => {
  let component: CourPageComponent;
  let fixture: ComponentFixture<CourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
