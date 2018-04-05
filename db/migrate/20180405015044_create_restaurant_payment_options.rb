class CreateRestaurantPayment < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_payment do |t|
      t.integer :payment_option_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index(:restaurant_payment, [:payment_option_id, :restaurant_id], unique: true)
    add_index :restaurant_payment, :restaurant_id
  end
end
