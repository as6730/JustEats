# == Schema Information
#
# Table name: payment_options
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PaymentOption < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :restaurant_payments,
    class_name: :RestaurantPayment,
    foreign_key: :payment_id,
    primary_key: :id

  has_many :restaurants,
    through: :restaurant_payments,
    source: :restaurant
end
