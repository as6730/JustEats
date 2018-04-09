# == Schema Information
#
# Table name: menus
#
#  id            :integer          not null, primary key
#  last_update   :string           not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  link          :string
#

require 'test_helper'

class MenuTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
