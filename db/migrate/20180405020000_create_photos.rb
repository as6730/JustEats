class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index, :photos, :restaurant_id
  end
end
