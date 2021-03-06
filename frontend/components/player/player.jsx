import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      duration: 0,
      played: 0,
      playing: true,
      albumidx: 0
    };

    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.getElapsed = this.getElapsed.bind(this);
    this.getTrackDuration = this.getTrackDuration.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleForward = this.handleForward.bind(this);
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  updateProgress(progress) {
    if (progress.played) {
      this.setState({ played: progress.played});
    }
  }

  togglePlay(e) {
    e.stopPropagation();
    // debugger;
    if (this.props.track.id) {
      this.props.playing ? this.props.pauseTrack() : this.props.playTrack(this.props.track);
    }
  }

  handleBack(e) {
    e.preventDefault();
    let id = this.props.idx;
    this.setState({albumidx: id}, () =>{
      if(this.state.albumidx === 0){
        this.setState({albumidx: this.props.playlist.length-1}, () =>{
          this.props.playTrack({track: this.props.playlist[this.state.albumidx], playlist: this.props.playlist, idx: this.state.albumidx});
        });
      } else {
        this.setState({albumidx: this.state.albumidx-1}, () =>{
          this.props.playTrack({track: this.props.playlist[this.state.albumidx], playlist: this.props.playlist, idx: this.state.albumidx});
        });
      }
    });
  }

  handleForward(e) {
    e.preventDefault();
    let id = this.props.idx;
    this.setState({albumidx: id}, () =>{
      if(this.state.albumidx === this.props.playlist.length-1){
        this.setState({albumidx: 0}, () =>{
          this.props.playTrack({track: this.props.playlist[this.state.albumidx], playlist: this.props.playlist, idx: this.state.albumidx});
        });
      } else {
        this.setState({albumidx: this.state.albumidx+1}, () =>{
          this.props.playTrack({track: this.props.playlist[this.state.albumidx], playlist: this.props.playlist, idx: this.state.albumidx});
        });
      }
    });
  }

  getElapsed() {
    const fraction = this.state.played * this.state.duration;
    const minutes = Math.floor(fraction / 60);
    const seconds = Math.floor(fraction % 60);
    const secString = seconds < 10 ? "0".concat(String(seconds)) : String(seconds);

    return String(minutes).concat(":", secString);
  }

  getTrackDuration() {
    const minutes = Math.floor(this.state.duration / 60);
    const seconds = Math.floor(this.state.duration % 60);
    const secString = seconds < 10 ? "0".concat(String(seconds)) : String(seconds);

    return String(minutes).concat(":", secString);
  }

  render() {

    const playPauseImage = this.props.playing ? "url(http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484553465/pause-button_f3qxvk.png)" :
            "url(http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484553465/play-button_rjs5uw.png)";
    const playPauseStyle = {
      backgroundImage: playPauseImage
    };
    const playbarDisplayStyle = this.props.track.id ? { display: "block" } : { display: "none" };
    // to use built-in track bar, remove hidden and use controls={true}

    return (
      <div className="playbar" style={playbarDisplayStyle}>
        <div className="playbar-elements-container">
          <div className="play-controls">
            <button className="prev-button" onClick={this.handleBack}></button>
            <button className="play-pause-button" style={playPauseStyle}  onClick={this.togglePlay}></button>
            <button className="next-button" onClick={this.handleForward}></button>
          </div>
          {/*<progress max="1" value={this.state.played}></progress>*/}
          <div className="react-player-container">
            <input
              className="seek-progress-bar"
              type='range' min={0} max={1} step='any'
              value={this.state.played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
              />
            <ReactPlayer ref={player => {this.player = player}}
              className='react-player'
              url={this.props.track.track_url}
              playing={this.props.playing}
              hidden={true}
              width={0}
              height={0}
              onProgress={this.updateProgress}
              onDuration={duration => this.setState({ duration })}
              onPlay={() => this.setState({ ["playing"]: true })}
              onPause={() => this.setState({ ["playing"]: false})}
              onEnded={() => this.setState({ ["playing"]: false })}
              />
          </div>
          <div className="player-track-time">{this.getElapsed()}/{this.getTrackDuration()}</div>
          <div className="current-track-details">
            <div className="player-track-title">{this.props.track.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
