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
    cardForm.style.display = "none";

    let formField = document.createElement('div');
    formField.setAttribute('class', 'field');
    cardForm.append(formField);

    let formControl = document.createElement('div');
    formControl.setAttribute('class', 'control');
    formField.append(formControl);

    let formInput = document.createElement('input');
    formInput.setAttribute('class', 'input');
    formInput.setAttribute('placeholder', 'Enter a title');
    formControl.append(formInput);

    formInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
      e.preventDefault();
        let newCard = new Card({name: e.target.value, column_id: this.id});
        newCard.postCard(e);
        e.target.value = "";

      }
    })

    return cardForm;
  }

  createColumn() {
    let columnHeader = document.createElement('div');
    columnHeader.setAttribute('class', 'media pb-2');
    
    let columnName = document.createElement('h3');
    columnName.setAttribute('class', 'media-left is-size-4 mb-2');
    columnName.innerText = this.name;

    let newCardButton = document.createElement('button');
    newCardButton.setAttribute('class', 'media-right button is-small is-link');
    newCardButton.setAttribute('id', 'newcard' + this.id)
    let buttonSpan = document.createElement('span');
    buttonSpan.setAttribute('class', 'icon is-small');
    let buttonIcon = document.createElement('i');
    buttonIcon.setAttribute('class', 'fas fa-plus has-text-white-bis');
    buttonSpan.append(buttonIcon);
    newCardButton.append(buttonSpan);
    columnHeader.append(columnName, newCardButton);

    let newCardForm = this.createForm();
    let addCard = false;
    newCardButton.addEventListener("click", (e) => {
      e.preventDefault();
      addCard = !addCard;
      if (addCard) {
        newCardForm.style.display = "block";
      } else {
        newCardForm.style.display = "none";
      }
    });

    let taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', 'wrapper' + this.id);
    taskWrapper.setAttribute('ondrop', 'drop(event, this)');
    taskWrapper.setAttribute('ondragover', 'allowDrop(event)');
  
    let boardColumn = document.createElement('div');
    boardColumn.setAttribute('class', 'column');
    boardColumn.setAttribute('id', 'column' + this.id);
    boardColumn.append(columnHeader, newCardForm, taskWrapper);
    columnContainer.append(boardColumn);
  }
}