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

require 'test_helper'

class RestaurantPaymentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
