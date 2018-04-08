class AddBackgroundImageToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :background_image, :string
  end
end
