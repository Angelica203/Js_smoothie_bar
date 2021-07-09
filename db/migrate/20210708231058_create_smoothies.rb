class CreateSmoothies < ActiveRecord::Migration[6.1]
  def change
    create_table :smoothies do |t|
      t.string :flavor
      t.string :image

      t.timestamps
    end
  end
end
