class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :phone_number
      t.string :website_link
      t.string :hours
      t.string :dining_style
      t.string :dress_code
      t.string :executive_chef
      t.string :price_range
      t.string :private_party_facilities
      t.string :private_party_contact

      t.timestamps
    end
  end
end
