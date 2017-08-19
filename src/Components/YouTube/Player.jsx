import React from 'react';
import YouTube from 'react-youtube';
import { Box } from 'grid-styled';
import { Media } from 'rebass';

const videoIdA = 'https://www.youtube.com/watch?v=5hGHdETNteE';
const videoIdB = 'https://www.youtube.com/watch?v=I7IdS-PbEgI';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoID: videoIdA,
      player: null,
    };

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
  };

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`);
    this.setState({
      player: event.target,
    });
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  onChangeVideo() {
    this.setState({
      videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
    });
  }

  render() {

    const opts = {
      width: '100%',
      height: '100%',
    }

    return (
      <Box>
        <Media>
          <YouTube
            videoId={this.state.videoId}
            onReady={this.onReady}
            opts={opts}
          />
        </Media>
      </Box>
    )
  }
}

export default Player;
