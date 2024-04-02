import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFeatureComponent } from './demo-feature.component';

describe('DemoFeatureComponent', () => {
  let component: DemoFeatureComponent;
  let fixture: ComponentFixture<DemoFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
