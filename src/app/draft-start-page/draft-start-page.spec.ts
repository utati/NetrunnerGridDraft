import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftStartPage } from './draft-start-page';

describe('DraftStartPage', () => {
  let component: DraftStartPage;
  let fixture: ComponentFixture<DraftStartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftStartPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
