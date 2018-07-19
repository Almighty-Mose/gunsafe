class User < ApplicationRecord
  has_many :firearms
  has_many :accessories, through: :firearms
end
