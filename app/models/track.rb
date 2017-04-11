class Track < ActiveRecord::Base
  validates :album_id, :track_url, presence: true

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: "Album"
end
