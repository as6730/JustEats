class Restaurant < ApplicationRecord
  validates :name, :description, presence: true
end
