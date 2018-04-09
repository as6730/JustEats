class RemoveNameFromMenus < ActiveRecord::Migration[5.1]
  def change
    remove_column :menus, :name, :string
  end
end
