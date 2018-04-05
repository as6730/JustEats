class Photo < ApplicationRecord
  validates :url, presence: true 
end
