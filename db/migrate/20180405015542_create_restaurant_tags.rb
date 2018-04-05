class CreateRestaurantTags < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_tags do |t|
      t.integer :tag_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index(:restaurant_tags, [:tag_id, :restaurant_id], unique: true)
    add_index, :restaurant_tags, :restaurant_id
  end
end
