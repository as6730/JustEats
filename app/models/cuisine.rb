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

  belongs_to :restaurant_cuisine,
    class_name: :RestaurantCuisine,
    foreign_key: :cuisine_id,
    primary_key: :id

  has_many :restaurants,
    through: :restaurant_cuisine,
    source: :restaurant
end
