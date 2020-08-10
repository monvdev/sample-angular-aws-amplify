import { async, TestBed } from '@angular/core/testing';
import { MainFeatureShellModule } from './main-feature-shell.module';

describe('MainFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MainFeatureShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MainFeatureShellModule).toBeDefined();
  });
});
