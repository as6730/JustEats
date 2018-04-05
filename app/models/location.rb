# == Schema Information
#
# Table name: locations
#
#  id                 :integer          not null, primary key
#  latitude           :float            not null
#  longitude          :float            not null
#  address            :string
#  neighborhood       :string
#  cross_street       :string
#  parking_details    :string
#  location_image_url :string
#  restaurant_id      :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Location < ApplicationRecord
  validates :latitude, :longitude, presence: true

  belongs_to :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id
end
