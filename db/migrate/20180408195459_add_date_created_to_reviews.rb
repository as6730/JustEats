class AddDateCreatedToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :date_created, :string
  end
end
