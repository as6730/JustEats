# == Schema Information
#
# Table name: restaurant_tags
#
#  id            :integer          not null, primary key
#  tag_id        :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantTag < ApplicationRecord
  belongs_to :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id

  belongs_to :tag,
    class_name: :Tag,
    foreign_key: :tag_id,
    primary_key: :id
end
