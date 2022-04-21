import React from "react";
import songs from "./songs.js"

class MusicPlayer extends React.Component {
    render () {
        return (
            <div className="player flex">
                <img src={require('./image/player.jpg')} alt="Playing Media" height="130" width="190" style={styles.img}/>
                <audio controls autoPlay src={songs[this.props.activeMenuItem]} type="audio/mpeg"></audio>
            </div>
        )
    }
}
const styles = {
    img : {
        margin : 10
    }
}
export default MusicPlayer;