# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  party_size    :integer          not null
#  date          :date             not null
#  points        :integer          not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
