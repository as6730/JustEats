class AddLinkToMenus < ActiveRecord::Migration[5.1]
  def change
    add_column :menus, :link, :string
  end
end
