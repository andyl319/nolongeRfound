export const fetchAllTracks = (albumId) => (
  $.ajax({
    method: "GET",
    url: `/api/albums/${albumId}/tracks`
  })
);

export const fetchTrack = (albumId, trackId) => (
  $.ajax({
    method: "GET",
    url: `/api/${albumId}/tracks/${trackId}`
  })
);
