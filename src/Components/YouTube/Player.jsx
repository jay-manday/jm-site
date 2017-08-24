import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
  render() {
    return (
      <div className="YoutubeContainer-wrapper">
        <YouTube
          videoId={this.props.videoId}
          className="YoutubeContainer-video"
        />
      </div>
    )
  }
}

export default Player;
