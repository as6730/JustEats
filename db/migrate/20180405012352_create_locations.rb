class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :address
      t.string :neighborhood
      t.string :cross_street
      t.string :parking_details
      t.string :location_image_url
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :locations, :restaurant_id
  end
end
