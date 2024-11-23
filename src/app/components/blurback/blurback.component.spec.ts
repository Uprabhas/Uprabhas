import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbackComponent } from './blurback.component';

describe('BlurbackComponent', () => {
  let component: BlurbackComponent;
  let fixture: ComponentFixture<BlurbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
