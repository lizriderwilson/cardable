class Card {
  static allCards = [];
  constructor(attrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.description = attrs.description;
    this.column_id = attrs.column_id;
    this.priority = attrs.priority;
    Card.allCards.push(this);
  }

  static all = () => {
    return Card.allCards;
  }

  createCard() {
  let cardWrapper = document.getElementById("wrapper" + this.column_id);

  let newCard = document.createElement('div');
  newCard.setAttribute('class', 'box has-background-white-bis');
  newCard.setAttribute('id', 'card' + this.id);
  newCard.setAttribute('draggable', 'true');
  newCard.setAttribute('ondragstart', 'drag(event)');

  let cardMedia = document.createElement('article');
  cardMedia.setAttribute('class', 'media');

  let mediaContent = document.createElement('div');
  mediaContent.setAttribute('class', 'media-content');
  let cardName = document.createElement('h4');
  cardName.innerText = this.name;
  let cardDescription = document.createElement('p');
  cardDescription.innerText = this.description;
  mediaContent.append(cardName, cardDescription);

  let mediaRight = document.createElement('div');
  mediaRight.setAttribute('class', 'media-right');
  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete has-background-warning')
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault;
    this.deleteCard();
    newCard.remove();

  });
  mediaRight.append(deleteButton);

  cardMedia.append(mediaContent, mediaRight);
  newCard.append(cardMedia);
  cardWrapper.append(newCard);
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

updateCard(el) {
  const columnId = el.id.slice(-1);
  const cardId = this.id;
  const data = {
    id: cardId,
    column_id: columnId
  }
  fetch('http://localhost:3000/cards/' + this.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(card => {
    if (card) {
    this.column_id = columnId;
    }
  });
}

deleteCard() {
  fetch('http://localhost:3000/cards/' + this.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(this)
  })
}

}