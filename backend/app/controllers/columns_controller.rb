class ColumnsController < ApplicationController

  def index
    columns = Column.all
    #render json: columns
    render json: columns, include: [:cards]
  end

end
