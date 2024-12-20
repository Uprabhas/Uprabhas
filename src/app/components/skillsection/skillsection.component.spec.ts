import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsectionComponent } from './skillsection.component';

describe('SkillsectionComponent', () => {
  let component: SkillsectionComponent;
  let fixture: ComponentFixture<SkillsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
