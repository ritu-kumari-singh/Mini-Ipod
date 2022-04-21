import React from "react";
import Home from "./Home.js"
import Music from "./Music.js"
import Media from "./Media.js"
import MusicPlayer from "./MusicPlayer.js"
import "./IpodItem.css"

class ScreenItem extends React.Component {
    render () {
        return (
            <div className="menuContainer">
                {this.props.activeScreen === "Ipod" ? <Home activeMenuItem={this.props.activeMenuItem}/> : null}
                {this.props.activeScreen === "Music" ? <Music activeMenuItem={this.props.activeMenuItem}/> : null}
                {this.props.activeScreen === "Games" ? <div className="screen"><span>Games</span></div> : null}
                {this.props.activeScreen === "CoverFlow" ? <div className="screen"><span>CoverFlow</span></div> : null}
                {this.props.activeScreen === "Settings" ? <div className="screen"><span>Settings</span></div> : null}
                {this.props.activeScreen === "AllSongs" ?  <Media activeMenuItem={this.props.activeMenuItem}/> : null}
                {this.props.activeScreen === "PlaySong" ?  <MusicPlayer activeMenuItem={this.props.activeMenuItem}/> : null}
                {this.props.activeScreen === "Artists" ? <div className="screen"><span>Artists</span></div> : null}
                {this.props.activeScreen === "Albums" ? <div className="screen"><span>Albums</span></div> : null}
            </div>
        )
    }
}

export default ScreenItem;