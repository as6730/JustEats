class Reservation < ApplicationRecord
  validates :party_size, :date, :points, presence: true
end
