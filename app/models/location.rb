class Location < ApplicationRecord
  validates :latitude, :longitude, presence: true
end
