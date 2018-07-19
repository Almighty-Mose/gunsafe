class CreateAccessoriesFirearms < ActiveRecord::Migration[5.2]
  def change
    create_table :accessories_firearms, id: false do |t|
      t.belongs_to :accessory, index: true
      t.belongs_to :firearm, index: true
    end
  end
end
