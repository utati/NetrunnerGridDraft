import { Routes } from '@angular/router';
import {DraftStartPage} from './draft-start-page/draft-start-page';
import {GridDraftPage} from './grid-draft-page/grid-draft-page';

export const routes: Routes = [
  {
    path: '',
    component:DraftStartPage,
    title: 'Draft Settings'
  },
  {
    path: 'gridDraft',
    component: GridDraftPage,
    title: 'Grid Draft',
    data: {draftList: String}
  }
];
