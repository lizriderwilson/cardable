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
    const cardForm = document.createElement('form');
    cardForm.setAttribute('class', 'box has-background-white-bis');
    cardForm.setAttribute('id', 'form' + this.id);
    cardForm.style.display = "none";

    const formField = document.createElement('div');
    formField.setAttribute('class', 'field');
    cardForm.append(formField);

    const formControl = document.createElement('div');
    formControl.setAttribute('class', 'control');
    formField.append(formControl);

    const formInput = document.createElement('input');
    formInput.setAttribute('class', 'input');
    formInput.setAttribute('placeholder', 'Enter a title');
    formControl.append(formInput);

    formInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
      e.preventDefault();
        const newCard = new Card({name: e.target.value, column_id: this.id});
        newCard.postCard(e);
        e.target.value = "";

      }
    })

    return cardForm;
  }

  createColumn() {
    const columnHeader = document.createElement('div');
    columnHeader.setAttribute('class', 'media pb-2');
    
    const columnName = document.createElement('h3');
    columnName.setAttribute('class', 'media-left is-size-4 mb-2');
    columnName.innerText = this.name;

    const newCardButton = document.createElement('button');
    newCardButton.setAttribute('class', 'media-right button is-small is-link');
    newCardButton.setAttribute('id', 'newcard' + this.id)
    const buttonSpan = document.createElement('span');
    buttonSpan.setAttribute('class', 'icon is-small');
    const buttonIcon = document.createElement('i');
    buttonIcon.setAttribute('class', 'fas fa-plus has-text-white-bis');
    buttonSpan.append(buttonIcon);
    newCardButton.append(buttonSpan);
    columnHeader.append(columnName, newCardButton);

    const newCardForm = this.createForm();
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

    const taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', 'wrapper' + this.id);
    taskWrapper.setAttribute('ondrop', 'drop(event, this)');
    taskWrapper.setAttribute('ondragover', 'allowDrop(event)');
  
    const boardColumn = document.createElement('div');
    boardColumn.setAttribute('class', 'column');
    boardColumn.setAttribute('id', 'column' + this.id);
    boardColumn.append(columnHeader, newCardForm, taskWrapper);
    columnContainer.append(boardColumn);
  }
}