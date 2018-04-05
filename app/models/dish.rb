class Dish < ApplicationRecord
  validates :name, :price, presence: true
end
