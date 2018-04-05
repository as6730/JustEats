class CreateRestaurantPayments < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_payments do |t|
      t.integer :payment_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index(:restaurant_payments, [:payment_id, :restaurant_id], unique: true)
    add_index :restaurant_payments, :restaurant_id
  end
end
