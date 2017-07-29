class CreateEntourages < ActiveRecord::Migration
  def change
    create_table :entourages do |t|
      t.string :name, null: false
      t.string :pic_url, null: false
      t.text :bio, null: false

      t.timestamps null: false
    end
  end
end
