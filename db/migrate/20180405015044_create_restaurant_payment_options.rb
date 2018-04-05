class CreateRestaurantPaymentOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_payment_options do |t|
      t.integer :payment_option_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :restaurant_payment_options, [:payment_option_id, :restaurant_id], unique: true
    add_index :restaurant_payment_options, :restaurant_id
  end
end
