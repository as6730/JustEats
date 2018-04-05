class CreateMenuSections < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_sections do |t|
      t.string :title
      t.string :description
      t.integer :menu_id, null: false

      t.timestamps
    end

    add_index :menu_sections, :menu_id
  end
end
