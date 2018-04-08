# == Schema Information
#
# Table name: restaurant_cuisines
#
#  id            :integer          not null, primary key
#  cuisine_id    :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantCuisine < ApplicationRecord
  belongs_to :restaurant
  belongs_to :cuisine
end
