import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecingComponent } from './recing.component';

describe('RecingComponent', () => {
  let component: RecingComponent;
  let fixture: ComponentFixture<RecingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
