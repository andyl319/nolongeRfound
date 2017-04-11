export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

export const playTrack = playerInfo => ({
  type: PLAY_TRACK,
  playerInfo
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});
