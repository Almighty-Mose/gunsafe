class Accessory < ApplicationRecord
  scope :category, -> (category) {where category: category}
  has_and_belongs_to_many :firearms
  has_many :users, through: :firearms

  validates :name, presence: true
  validates :category, presence: true
  validates :price, presence: true
end
