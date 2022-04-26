class CreateDrinks < ActiveRecord::Migration[7.0]
  def change
    create_table :drinks do |t|
      t.string :brand
      t.string :style
      t.string :country
      t.integer :quantity
      t.string :description
      t.timestamps
    end
  end
end
