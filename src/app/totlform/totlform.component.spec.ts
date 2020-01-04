import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotlformComponent } from './totlform.component';

describe('TotlformComponent', () => {
  let component: TotlformComponent;
  let fixture: ComponentFixture<TotlformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotlformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotlformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
