import { async, TestBed } from '@angular/core/testing';
import { SharedPredictionsFeatureTextractModule } from './shared-predictions-feature-textract.module';

describe('SharedPredictionsFeatureTextractModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedPredictionsFeatureTextractModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedPredictionsFeatureTextractModule).toBeDefined();
  });
});
