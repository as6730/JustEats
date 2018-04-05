class RenameRestaurantPayment < ActiveRecord::Migration[5.1]
  def change
    rename_table :restaurant_payment, :restaurant_payment_options
  end
end
