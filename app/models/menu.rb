# == Schema Information
#
# Table name: menus
#
#  id            :integer          not null, primary key
#  last_update   :string           not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  link          :string
#

class Menu < ApplicationRecord
  validates :last_update, presence: true

  belongs_to :restaurant
  has_many :menu_sections
end
