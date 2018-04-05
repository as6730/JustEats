# == Schema Information
#
# Table name: payment_options
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PaymentOption < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
