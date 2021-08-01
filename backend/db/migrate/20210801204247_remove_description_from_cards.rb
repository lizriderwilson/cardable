class RemoveDescriptionFromCards < ActiveRecord::Migration[6.1]
  def change
    remove_column :cards, :description
  end
end
