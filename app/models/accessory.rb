class Accessory < ApplicationRecord
  has_and_belongs_to_many :firearms

  validates :name, presence: true
  validates :category, presence: true
  validates :price, presence: true
end
