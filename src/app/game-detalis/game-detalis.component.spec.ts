import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetalisComponent } from './game-detalis.component';

describe('GameDetalisComponent', () => {
  let component: GameDetalisComponent;
  let fixture: ComponentFixture<GameDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
