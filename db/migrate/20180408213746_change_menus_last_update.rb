class ChangeMenusLastUpdate < ActiveRecord::Migration[5.1]
  def change
    change_column :menus, :last_update, :string, null: false
  end
end
