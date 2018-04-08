# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  username      :string           not null
#  body          :string
#  rating        :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  date_created  :string
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
