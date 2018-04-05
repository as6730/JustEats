# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :restaurant_tag,
    class_name: :RestaurantTag,
    foreign_key: :tag_id,
    primary_key: :id

  has_many :restaurants,
    through: :restaurant_tag,
    source: :restaurant
end
