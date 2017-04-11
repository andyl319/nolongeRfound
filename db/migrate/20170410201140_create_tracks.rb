class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.string :track_url, null: false
      t.string :features

      t.timestamps null: false
    end
  end
end
