import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesDesLivresComponent } from './listes-des-livres.component';

describe('ListesDesLivresComponent', () => {
  let component: ListesDesLivresComponent;
  let fixture: ComponentFixture<ListesDesLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesDesLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesDesLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
