@albums.each do |album|
  json.set! album.id do
    json.extract! album,
      :id,
      :title,
      :cover_art,
      :tracks,
      :created_at
    end
  end
