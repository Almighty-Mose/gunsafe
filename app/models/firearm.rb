class Firearm < ApplicationRecord
  scope :category, -> (category) {where category: category}
  belongs_to :user
  has_and_belongs_to_many :accessories
  #need to change this to has_many_through accessories

  validates :make, presence: true
  validates :model, presence: true
  validates :price, presence: true

  def name
    self.make + ' ' + self.model
  end
end
