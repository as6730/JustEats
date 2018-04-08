class CreateMiniMenuSections < ActiveRecord::Migration[5.1]
  def change
    create_table :mini_menu_sections do |t|
      t.string :title, null: false
      t.string :description
      t.integer :menu_section_id, null: false
    end

    add_index :mini_menu_sections, :menu_section_id
  end
end
