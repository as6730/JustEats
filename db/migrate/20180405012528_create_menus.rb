class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :name, null: false
      t.date :last_update, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :menus, :restaurant_id
  end
end
