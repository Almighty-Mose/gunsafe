class AddCategoryToFirearms < ActiveRecord::Migration[5.2]
  def change
    add_column :firearms, :category, :string
  end
end
