# == Schema Information
#
# Table name: menu_sections
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  menu_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class MenuSection < ApplicationRecord
  validates :title, presence: true

  belongs_to :menu,
    class_name: :Menu,
    foreign_key: :menu_id,
    primary_key: :id

  has_many :dishes,
    class_name: :Dish,
    foreign_key: :menu_section_id,
    primary_key: :id
end
