class Card {
  static allCards = [];
  constructor(attrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.description = attrs.description;
    this.column_id = attrs.column_id;
    Card.allCards.push(this);
  }

  static all = () => {
    return Card.allCards;
  }

  createCard() {
  let cardColumn = document.getElementById("column" + this.column_id).firstChild;

  let cardName = document.createElement('h4');
  cardName.innerText = this.name;

  let cardDescription = document.createElement('p');
  cardDescription.innerText = this.description;

  let columnCard = document.createElement('div');
  columnCard.setAttribute('class', 'box has-background-white-bis');
  columnCard.setAttribute('id', 'card' + this.id);
  columnCard.append(cardName, cardDescription);
  cardColumn.append(columnCard);
}

}