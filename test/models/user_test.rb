# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  firstname       :string           not null
#  lastname        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  country_code    :string
#  phone_number    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
