class Cuisine < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
