import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesArticlesComponent } from './liste-des-articles.component';

describe('ListeDesArticlesComponent', () => {
  let component: ListeDesArticlesComponent;
  let fixture: ComponentFixture<ListeDesArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
