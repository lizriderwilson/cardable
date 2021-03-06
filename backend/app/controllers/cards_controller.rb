class CardsController < ApplicationController

  def index
    cards = Card.all.order(:priority)
    render json: cards
  end

  def create
    card = Card.create(name: params["name"], column_id: params["column_id"])
    render json: card
  end

  def update
    card = Card.find_by(id: params["id"])
    card.update(column_id: params["column_id"])
    render json: card
  end

  def destroy
    card = Card.find_by(id: params["id"])
    card.delete
  end

end
