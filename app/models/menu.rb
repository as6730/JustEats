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
end
