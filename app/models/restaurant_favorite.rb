# == Schema Information
#
# Table name: restaurant_favorites
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantFavorite < ApplicationRecord
end
