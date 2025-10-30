import { Injectable } from '@angular/core';
import cardData from '../../public/assets/cardList.json';

@Injectable({
  providedIn: 'platform',
})
class Player{
  cards: Card[] = [];
}
export class Card{
  code= "";
  stripped_title= "";
}
export class DraftService {
  protected cubeList:Card[] = [];
  public player1 = new Player();
  public player2 = new Player();
  private cardDataList = cardData.data as Card[];

  public setCubeList(listStr: String){
    const cardStrList = listStr.split(/\r?\n|\r|\n/g);
    this.addCardToList('');

    for (let i=0;i<cardStrList.length;i++){
      let listEntry = cardStrList[i].trim();
      let cardCount = parseInt(listEntry.split(" ")[0]);//get card no before first space
      let cardName = listEntry.substring(listEntry.indexOf(' ')+1);//get card name after first space
      for(let x = 0;x<cardCount;x++){
        if(cardName !== "Eden Fragment" &&
          !cardName.includes("Evidence Collection") &&
          !cardName.includes("Executive Retreat")){
          this.addCardToList(cardName);
        } else{
          console.log("skippy");
        }
      }
    }
    const shuffle = (array: Card[]) => {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(this.cubeList);
    shuffle(this.cubeList);
    shuffle(this.cubeList);
    shuffle(this.cubeList);
  }

  private addCardToList(cardName:string){
    for(let cardIndex in this.cardDataList){
      if(cardName===this.cardDataList[cardIndex].stripped_title){
        console.log(this.cardDataList[cardIndex]);
        this.cubeList.push(this.cardDataList[cardIndex]);
        break;
      }
    }
  }

  public getNextGrid(){
    let gridArr:Card[] = [this.cubeList.pop() as Card];
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    gridArr.push(this.cubeList.pop() as Card);
    return gridArr;
  }

  public takeCards(cards: Card[], player:number){
    if(player === 1){
      this.player1.cards = this.player1.cards.concat(cards);
    } else {
      this.player2.cards = this.player2.cards.concat(cards);
    }
  }

}
