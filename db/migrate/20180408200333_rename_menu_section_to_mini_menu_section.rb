class RenameMenuSectionToMiniMenuSection < ActiveRecord::Migration[5.1]
  def change
    rename_column :dishes, :menu_section_id, :mini_menu_section_id
  end
end
