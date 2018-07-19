class CreateFirearms < ActiveRecord::Migration[5.2]
  def change
    create_table :firearms do |t|
      t.string :make
      t.string :model
      t.string :serial_number
      t.string :caliber
      t.string :purchase_date
      t.integer :price
      t.integer :user_id

      t.timestamps
    end
  end
end
