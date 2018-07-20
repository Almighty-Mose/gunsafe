class User < ApplicationRecord
  has_secure_password
  has_many :firearms
  has_many :accessories, through: :firearms

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true
end
