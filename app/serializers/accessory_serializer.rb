class AccessorySerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :purchase_date, :category
end
