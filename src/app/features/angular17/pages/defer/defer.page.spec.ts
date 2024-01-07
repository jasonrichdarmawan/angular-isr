import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferPage } from './defer.page';

describe('DeferPage', () => {
  let component: DeferPage;
  let fixture: ComponentFixture<DeferPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
