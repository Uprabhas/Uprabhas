import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingDockComponent } from './floating-dock.component';

describe('FloatingDockComponent', () => {
  let component: FloatingDockComponent;
  let fixture: ComponentFixture<FloatingDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingDockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
