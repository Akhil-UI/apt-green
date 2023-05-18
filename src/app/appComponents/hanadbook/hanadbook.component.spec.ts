import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanadbookComponent } from './hanadbook.component';

describe('HanadbookComponent', () => {
  let component: HanadbookComponent;
  let fixture: ComponentFixture<HanadbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanadbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanadbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
