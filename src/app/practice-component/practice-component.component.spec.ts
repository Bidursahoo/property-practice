import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponentComponent } from './practice-component.component';

describe('PracticeComponentComponent', () => {
  let component: PracticeComponentComponent;
  let fixture: ComponentFixture<PracticeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
