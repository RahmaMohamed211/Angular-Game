import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphComponent } from './alph.component';

describe('AlphComponent', () => {
  let component: AlphComponent;
  let fixture: ComponentFixture<AlphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
