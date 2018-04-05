# == Schema Information
#
# Table name: menus
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  last_update   :date             not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class MenuTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
