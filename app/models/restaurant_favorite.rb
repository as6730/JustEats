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
  belongs_to :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
end
