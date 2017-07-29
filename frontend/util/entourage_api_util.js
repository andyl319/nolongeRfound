export const fetchAllTracks = (albumId) => (
  $.ajax({
    method: "GET",
    url: `/api/entourage`
  })
);

export const fetchEntourage = (entourageId) => (
  $.ajax({
    method: "GET",
    url: `/api/entourage/${entourageId}`
  })
);
