class CreateAccessories < ActiveRecord::Migration[5.2]
  def change
    create_table :accessories do |t|
      t.string :name
      t.integer :price
      t.string :purchase_date
      t.string :serial_number
      t.string :category

      t.timestamps
    end
  end
end

