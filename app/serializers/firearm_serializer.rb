class FirearmSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :serial_number, :caliber, :price, :purchase_date, :category
  has_many :accessories
end
