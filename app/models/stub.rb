require 'ostruct'

class Stub < OpenStruct
  extend ActiveModel::Naming
  include ActiveModel::Validations

  validates :email, presence: true
  validates :comments, presence: true
end
