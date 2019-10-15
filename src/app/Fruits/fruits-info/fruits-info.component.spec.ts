import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsInfoComponent } from './fruits-info.component';

describe('FruitsInfoComponent', () => {
  let component: FruitsInfoComponent;
  let fixture: ComponentFixture<FruitsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
