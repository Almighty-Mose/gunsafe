class RemoveSerialNumberFromAccessories < ActiveRecord::Migration[5.2]
  def change
    remove_column :accessories, :serial_number, :string
  end
end
