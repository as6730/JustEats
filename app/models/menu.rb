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
#  link          :string
#

class Menu < ApplicationRecord
  validates :name, :last_update, presence: true

  belongs_to :restaurant
  has_many :menu_sections
end
