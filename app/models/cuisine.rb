# == Schema Information
#
# Table name: cuisines
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :restaurant_cuisines
  has_many :restaurants, through: :restaurant_cuisines
end
