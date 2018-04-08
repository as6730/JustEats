class ChangeRestaurantsDescription < ActiveRecord::Migration[5.1]
  def change
    change_column :restaurants, :description, :text, null: false
  end
end
