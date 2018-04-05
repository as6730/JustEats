# == Schema Information
#
# Table name: dishes
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  price           :string           not null
#  description     :string
#  menu_section_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Dish < ApplicationRecord
  validates :name, :price, presence: true

  belongs_to :menu_section,
    class_name: :MenuSection,
    foreign_key: :menu_section_id,
    primary_key: :id
end
