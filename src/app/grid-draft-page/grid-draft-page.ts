import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile, MatGridTileText} from '@angular/material/grid-list';
import {Card, DraftService} from '../draft-service';
import {MatButton} from '@angular/material/button';
import {NgClass} from '@angular/common';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-grid-draft-page',
  imports: [
    MatGridList,
    MatGridTile,
    MatButton,
    MatGridTileText,
    NgClass,
    MatListItem,
    MatList
  ],
  templateUrl: './grid-draft-page.html',
  styleUrl: './grid-draft-page.css'
})
export class GridDraftPage implements OnInit{
  constructor(private drafServ: DraftService) {
    this.draftService = drafServ;
  }

  protected draftService: DraftService;
  currentGrid: Card[] = []
  chosenCells: number[] = [];
  currentPlayer: number = 1;
  gridsRemaining: number = 15;
  currentGridStartingPlayer = 1;

  ngOnInit() {
    this.currentGrid = this.draftService.getNextGrid();
  }

  getURL(index: number){
    return "https://card-images.netrunnerdb.com/v2/large/"+ this.currentGrid[index].code +".jpg"
  }

  select(choices:number[]){
    let chosenCards:Card[] = [];
    for(let i = 0; i<choices.length; i++){
      if(!this.chosenCells.includes(choices[i])){
        this.chosenCells.push(choices[i]);
        chosenCards.push(this.currentGrid[choices[i]]);
      }
    }
    this.draftService.takeCards(chosenCards, this.currentPlayer);
    if(this.currentPlayer===1){
      this.currentPlayer=2;
    }else{
      this.currentPlayer=1;
    }
  }

  hasBeenSelected(index : number){
    return this.chosenCells.includes(index);
  }

  nextGrid(){
    this.gridsRemaining = --this.gridsRemaining;
    this.currentGrid = this.draftService.getNextGrid();
    this.chosenCells = [];
    if(this.currentGridStartingPlayer===1){
      this.currentGridStartingPlayer = 2;
    } else {
      this.currentGridStartingPlayer = 1;
    }
    this.currentPlayer = this.currentGridStartingPlayer;
  }
}
