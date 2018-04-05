class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.string :name, null: false
      t.string :price, null: false
      t.string :description
      t.integer :menu_section_id

      t.timestamps
    end

    add_index :dishes, :menu_section_id
  end
end
