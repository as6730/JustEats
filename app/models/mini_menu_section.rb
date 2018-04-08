# == Schema Information
#
# Table name: mini_menu_sections
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  description     :string
#  menu_section_id :integer          not null
#

class MiniMenuSection < ApplicationRecord
  validates :title, presence: true

  belongs_to :menu_section
  has_many :dishes
end
