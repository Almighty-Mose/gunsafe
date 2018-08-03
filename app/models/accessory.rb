class Accessory < ApplicationRecord
  scope :category, -> (category) {where category: category}
  has_and_belongs_to_many :firearms
  #need to change this to has_many_through for accessories_firearms

  validates :name, presence: true
  validates :category, presence: true
  validates :price, presence: true
end
