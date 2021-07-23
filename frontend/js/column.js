class Column {
  static allColumns = [];
  constructor(attrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.cards = attrs.cards;
    Column.allColumns.push(this);
  }

  static all = () => {
    return Column.allColumns;
  }

  createForm() {
    let cardForm = document.createElement('form');
    cardForm.setAttribute('class', 'box has-background-white-bis');
    cardForm.setAttribute('id', 'form' + this.id);

    let formField = document.createElement('div');
    formField.setAttribute('class', 'field');
    formField.style.display = "none";
    cardForm.append(formField);

    let formControl = document.createElement('div');
    formControl.setAttribute('class', 'control');
    formField.append(formControl);

    let formInput = document.createElement('input');
    formInput.setAttribute('class', 'input mb-4');
    formInput.setAttribute('placeholder', 'Enter a title');
    formControl.append(formInput);

    formInput.addEventListener("keydown", (e) => {
      e.preventDefault
      if (e.key === "Enter") {
        let newCard = new Card({name: e.target.value, column_id: this.id});
        newCard.postCard(e);
      }
    })

    let newCardButton = document.createElement('button');
    newCardButton.setAttribute('class', 'button is-link');
    newCardButton.innerText = "+"
    cardForm.append(newCardButton);
    
    let addCard = false;
    newCardButton.addEventListener("click", (e) => {
      e.preventDefault();
      addCard = !addCard;
      if (addCard) {
        formField.style.display = "block";
      } else {
        formField.style.display = "none";
      }
    });

    return cardForm;
  }

  createColumn() {
    let columnName = document.createElement('h3');
    columnName.setAttribute('class', 'is-size-4 mb-2');
    columnName.innerText = this.name;
  
    let columnInnerDiv = document.createElement('div');
    columnInnerDiv.setAttribute('id', 'wrapper' + this.id);
    columnInnerDiv.setAttribute('class', 'has-text-centered has-background-light p-3');
    columnInnerDiv.setAttribute('ondrop', 'drop(event)');
    columnInnerDiv.setAttribute('ondragover', 'allowDrop(event)')
    columnInnerDiv.append(columnName);
    columnInnerDiv.append(this.createForm());
  
    let boardColumn = document.createElement('div');
    boardColumn.setAttribute('class', 'column');
    boardColumn.setAttribute('id', 'column' + this.id);
    boardColumn.append(columnInnerDiv);
    columnContainer.append(boardColumn);
  }
}