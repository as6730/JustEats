# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  username      :string
#  body          :string
#  rating        :integer
#  restaurant_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
