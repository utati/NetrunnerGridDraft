import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDraftPage } from './grid-draft-page';

describe('GridDraftPage', () => {
  let component: GridDraftPage;
  let fixture: ComponentFixture<GridDraftPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridDraftPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
