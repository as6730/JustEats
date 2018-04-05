# == Schema Information
#
# Table name: menus
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  last_update   :date             not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Menu < ApplicationRecord
  validates :name, :last_update, presence: true

  belongs_to :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :menu_sections,
    class_name: :MenuSection,
    foreign_key: :menu_id,
    primary_key: :id

  has_many :dishes,
    through: :menu_sections,
    source: :dishes
end
