import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesClubsComponent } from './liste-des-clubs.component';

describe('ListeDesClubsComponent', () => {
  let component: ListeDesClubsComponent;
  let fixture: ComponentFixture<ListeDesClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
