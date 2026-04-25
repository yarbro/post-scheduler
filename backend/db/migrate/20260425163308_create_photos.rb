class CreatePhotos < ActiveRecord::Migration[8.1]
  def change
    create_table :photos do |t|
      t.references :post, null: false, foreign_key: true
      t.text :image_url, null: false
      t.string :caption

      t.timestamps
    end
  end
end
