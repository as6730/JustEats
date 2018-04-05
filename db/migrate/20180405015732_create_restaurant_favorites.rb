class CreateRestaurantFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_favorites do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index(:restaurant_favorites, [:user_id, :restaurant_id], unique: true)
    add_index, :restaurant_favorites, :restaurant_id
  end
end
