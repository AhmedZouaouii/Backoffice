import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article.component';

describe('AjouterNouveauArticleComponent', () => {
  let component: AjouterNouveauArticleComponent;
  let fixture: ComponentFixture<AjouterNouveauArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterNouveauArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterNouveauArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
