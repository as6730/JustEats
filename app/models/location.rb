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
#  restaurant_id      :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  country            :string           not null
#  city               :string           not null
#

class Location < ApplicationRecord
  validates :latitude, :longitude, :country, :city, presence: true

  belongs_to :restaurant
end
