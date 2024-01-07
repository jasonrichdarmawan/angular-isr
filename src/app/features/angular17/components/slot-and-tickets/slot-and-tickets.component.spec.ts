import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAndTicketsComponent } from './slot-and-tickets.component';

describe('SlotAndTicketsComponent', () => {
  let component: SlotAndTicketsComponent;
  let fixture: ComponentFixture<SlotAndTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotAndTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotAndTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
