class Album < ActiveRecord::Base
  validates :title, :cover_art, presence: true

  has_many :tracks,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Track'
end
