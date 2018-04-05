class PaymentOption < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
