import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UUIDv4Page } from './uuidv4.page';

describe('UUIDv4Page', () => {
  let component: UUIDv4Page;
  let fixture: ComponentFixture<UUIDv4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UUIDv4Page]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UUIDv4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
