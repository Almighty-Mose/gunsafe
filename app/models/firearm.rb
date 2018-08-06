class Firearm < ApplicationRecord
  scope :category, -> (category) {where category: category}
  belongs_to :user
  has_and_belongs_to_many :accessories
  accepts_nested_attributes_for :accessories, reject_if: :reject_accessories

  validates :make, presence: true
  validates :model, presence: true
  validates :price, presence: true

  def name
    self.make + ' ' + self.model
  end

  def reject_accessories(attributes)
    attributes['name'].blank?
  end
end
