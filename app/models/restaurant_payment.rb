# == Schema Information
#
# Table name: restaurant_payments
#
#  id            :integer          not null, primary key
#  payment_id    :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantPayment < ApplicationRecord
  belongs_to :restaurant
  belongs_to :payment_option,
    class_name: :PaymentOption,
    foreign_key: :payment_id,
    primary_key: :id
end
