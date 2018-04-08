class AddCountryAndCityToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :country, :string, null: false
    add_column :locations, :city, :string, null: false
  end
end
