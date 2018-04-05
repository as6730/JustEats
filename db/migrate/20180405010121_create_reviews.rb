class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :username, null: false
      t.string :body
      t.integer :rating, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :reviews, :restaurant_id
  end
end
