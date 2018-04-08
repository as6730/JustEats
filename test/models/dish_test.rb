# == Schema Information
#
# Table name: dishes
#
#  id                   :integer          not null, primary key
#  name                 :string           not null
#  price                :string           not null
#  description          :string
#  mini_menu_section_id :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class DishTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
