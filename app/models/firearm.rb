class Firearm < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :accessories

  validates :make, presence: true
  validates :model, presence: true
  validates :price, presence: true
end
