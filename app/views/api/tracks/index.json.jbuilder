@tracks.each do |track|
  json.set! track.id do
    json.extract! track,
      :id,
      :title,
      :album_id,
      :album,
      :track_url,
      :features,
      :created_at
    end
  end
