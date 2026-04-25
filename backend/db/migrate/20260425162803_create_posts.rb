class CreatePosts < ActiveRecord::Migration[8.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :post_text, null: false
      t.datetime :scheduled_date

      t.timestamps
    end
  end
end
