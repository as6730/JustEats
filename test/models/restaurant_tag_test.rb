# == Schema Information
#
# Table name: restaurant_tags
#
#  id            :integer          not null, primary key
#  tag_id        :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class RestaurantTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
