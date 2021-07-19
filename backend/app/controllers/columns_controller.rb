class ColumnsController < ApplicationController

  def index
    columns = Column.all
    render json: columns
  end

end
