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

  // drag(ev) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  //   console.log(ev)
  // }

  createCard() {
  let cardWrapper = document.getElementById("wrapper" + this.column_id);
  let columnForm = document.getElementById("form" + this.column_id);

  let cardName = document.createElement('h4');
  cardName.innerText = this.name;

  let cardDescription = document.createElement('p');
  cardDescription.innerText = this.description;

  let deleteButton = document.createElement('button');
  deleteButton.innerText = "X";
  deleteButton.setAttribute('class', 'button is-warning')
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault;
    columnCard.remove();
  });

  let columnCard = document.createElement('div');
  columnCard.setAttribute('class', 'box has-background-white-bis');
  columnCard.setAttribute('id', 'card' + this.id);
  columnCard.setAttribute('draggable', 'true');
  columnCard.setAttribute('ondragstart', 'drag(event)');
  columnCard.append(cardName, cardDescription, deleteButton);
  cardWrapper.append(columnCard);
}

postCard(event) {
  const columnID = parseInt(event.target.parentElement.parentElement.parentElement.id.slice(-1));
  const cardName = event.target.value;
  const data = {
    name: cardName,
    column_id: columnID
  }
  fetch('http://localhost:3000/cards', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(card => {
    if (card.id) {
    let newCard = new Card(card);
    newCard.createCard();
    }
  });
}

}