class Menu < ApplicationRecord
  validates :name, :last_update, presence: true
end
