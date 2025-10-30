import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DraftService} from '../draft-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-draft-start-page',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './draft-start-page.html',
  styleUrl: './draft-start-page.css'
})
export class DraftStartPage {
  constructor(private draftServ: DraftService,private r:Router) {
    this.draftService = draftServ;
    this.router = r;
  }
  protected cubeList = '';
  draftService: DraftService;
  router: Router;
  submit(){
    this.draftServ.setCubeList(this.cubeList);
    this.router.navigate(['/gridDraft']);
  }
}
