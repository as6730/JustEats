class CreateRestaurantCuisines < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_cuisines do |t|
      t.integer :cuisine_id
      t.integer :restaurant_id

      t.timestamps
    end

    add_index(:restaurant_cuisines, [:cuisine_id, :restaurant_id], unique: true)
    add_index, :restaurant_cuisines, :restaurant_id
  end
end
