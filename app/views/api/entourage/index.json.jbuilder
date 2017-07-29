@entourage.each do |entourage|
  json.set! entourage.id do
    json.extract! entourage,
      :id,
      :name,
      :pic_url,
      :bio
    end
  end
