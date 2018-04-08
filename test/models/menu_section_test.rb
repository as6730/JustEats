# == Schema Information
#
# Table name: menu_sections
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  menu_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class MenuSectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
