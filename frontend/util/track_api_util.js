export const fetchAllTracks = (albumId) => (
  $.ajax({
    method: "GET",
    url: `/api/tracks`
  })
);

export const fetchTrack = (albumId, trackId) => (
  $.ajax({
    method: "GET",
    url: `/api/${albumId}/tracks/${trackId}`
  })
);
