import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlpComponent } from './urlp.component';

describe('UrlpComponent', () => {
  let component: UrlpComponent;
  let fixture: ComponentFixture<UrlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
