import './IpodItem.css'
import React from 'react';
import ButtonItem from './ButtonItem';
import ScreenItem from './ScreenItem';
import ZingTouch from 'zingtouch';

class IpodItem extends React.Component {
    constructor() {
        super();
        this.state = {
            activeMenuItem : "CoverFlow",
            activeScreen : "Ipod",
            playMedia : true
        }
    }
    // Function to return back to previoud Menu
    returnToPrevMenu = () => {
        if(this.state.activeScreen === "PlaySong") {
            this.setState({
                activeMenuItem : this.state.activeMenuItem,
                activeScreen : "AllSongs"
            })
        }
        else if(this.state.activeScreen === "AllSongs") {
            this.setState({
                activeMenuItem : this.state.activeScreen,
                activeScreen : "Music"
            })
        }
        else if(this.state.activeScreen === "Music") {
            this.setState({
                activeMenuItem : this.state.activeScreen,
                activeScreen : "Ipod"
            })
        }
        else if(this.state.activeScreen === "Artists" || this.state.activeScreen === "Albums"){
            this.setState({
                activeMenuItem : this.state.activeScreen,
                activeScreen : "Music"
            })
        }
        else{
            this.setState({
                activeMenuItem : this.state.activeMenuItem,
                activeScreen : "Ipod"
            })
        }
    }
    // Play/Pause the song currently playing
    toggleMediaPlay = () => {
        if(this.state.activeScreen === "PlaySong") {
            let myAudio = document.getElementsByTagName("audio")[0];
            if(myAudio.paused && myAudio.currentTime > 0 && !myAudio.ended) {
                myAudio.play();
            }
            else {
                myAudio.pause();
            }
        }
    }
    //Click on a menu item to hide the menu and open a screen of selected item
    selectMenuItem = () => {
        if(this.state.activeScreen === "AllSongs") {
            this.setState({
                activeScreen : "PlaySong",
                activeMenuItem : this.state.activeMenuItem
            })
        }
        else if(this.state.activeMenuItem === "AllSongs"){  
            this.setState({
                activeScreen : this.state.activeMenuItem,
                activeMenuItem : "song1"
            })
        }
        else if(this.state.activeMenuItem === "Music"){  
            this.setState({
                activeScreen : this.state.activeMenuItem,
                activeMenuItem : "AllSongs"
            })
        }
        else if(this.state.activeScreen === "PlaySong"){  
            this.setState({
                activeScreen : "PlaySong",
                activeMenuItem : this.state.activeMenuItem
            })
        }
        else {
            this.setState({
                activeMenuItem : this.state.activeMenuItem,
                activeScreen : this.state.activeMenuItem
            })
        }
    }
    // Traverse through the songlist
    changeSong = () => {
        console.log(this.state);
        if(this.state.activeScreen === "PlaySong" && this.state.activeMenuItem === "song1") {
            this.setState({
                activeMenuItem : "song2"
            })
        } else if(this.state.activeScreen === "PlaySong" && this.state.activeMenuItem === "song2") {
            this.setState({
                activeMenuItem : "song1"
            })
        } 
    }
    //Give rotation feature to circlur button to navigate through menu items
    rotate = () => {
        var containerElement = document.getElementsByClassName('circle')[0];
        var activeRegion = new ZingTouch.Region(containerElement);
        var next = 0;
        var self = this;
        
        activeRegion.bind(containerElement, 'rotate', function(event){    
            event.stopPropagation();           
            var angle = event.detail.distanceFromLast;
            if(angle < 0){
                next++;
                if(next === 40){
                    next = 0;
                    if(self.state.activeScreen === 'Ipod'){
                        if(self.state.activeMenuItem === 'CoverFlow'){
                            self.setState({
                                activeMenuItem : "Music"
                            })
                        }else if(self.state.activeMenuItem === 'Music'){
                            self.setState({
                                activeMenuItem : "Games"
                            })
                        }else if(self.state.activeMenuItem === 'Games'){
                            self.setState({
                                activeMenuItem : "Settings"
                            })
                        }else if(self.state.activeMenuItem === 'Settings'){
                            self.setState({
                                activeMenuItem : "CoverFlow"
                            })
                        }
                    }else if(self.state.activeScreen === 'Music'){
                        if(self.state.activeMenuItem === 'AllSongs'){
                            self.setState({
                                activeMenuItem : "Artists"
                            })
                        }else if(self.state.activeMenuItem === 'Artists'){
                            self.setState({
                                activeMenuItem : "Albums"
                            })
                        }else if(self.state.activeMenuItem === 'Albums'){
                            self.setState({
                                activeMenuItem : "AllSongs"
                            })
                        }
                    } else if(self.state.activeScreen === "AllSongs") {
                        if(self.state.activeMenuItem === 'song1'){
                            self.setState({
                                activeMenuItem : "song2"
                            })
                        }
                        else {
                            self.setState({
                                activeMenuItem : "song1"
                            })
                        }
                    }
                }
            }else{
                next++;
                if(next === 40){
                    next = 0;
                    if(self.state.activeScreen === 'Ipod'){
                        if(self.state.activeMenuItem === 'CoverFlow'){
                            self.setState({
                                activeMenuItem : "Settings"
                            })
                        }else if(self.state.activeMenuItem === 'Music'){
                            self.setState({
                                activeMenuItem : "CoverFlow"
                            })
                        }else if(self.state.activeMenuItem === 'Games'){
                            self.setState({
                                activeMenuItem : "Music"
                            })
                        }else if(self.state.activeMenuItem === 'Settings'){
                            self.setState({
                                activeMenuItem : "Games"
                            })
                        }
                    }else if(self.state.activeScreen === 'Music'){
                        if(self.state.activeMenuItem === 'AllSongs'){
                            self.setState({
                                activeMenuItem : "Albums"
                            })
                        }else if(self.state.activeMenuItem === 'Artists'){
                            self.setState({
                                activeMenuItem : "AllSongs"
                            })
                        }else if(self.state.activeMenuItem === 'Albums'){
                            self.setState({
                                activeMenuItem : "Artists"
                            })
                        }   
                    }else if(self.state.activeScreen === "AllSongs") {
                        if(self.state.activeMenuItem === 'song1'){
                            self.setState({
                                activeMenuItem : "song2"
                            })
                        }
                        else {
                            self.setState({
                                activeMenuItem : "song1"
                            })
                        }
                    }
                }
            }
        });
    }
    render() {
        return (
            <div className="flex ipodContainer">
                <ScreenItem 
                    activeMenuItem={this.state.activeMenuItem}
                    activeScreen={this.state.activeScreen}
                />
                <div className="buttonContainer">
                    <ButtonItem 
                        rotate={this.rotate}
                        returnToPrevMenu={this.returnToPrevMenu}
                        toggleMediaPlay={this.toggleMediaPlay}
                        selectMenuItem={this.selectMenuItem}
                        changeSong={this.changeSong}
                    />
                </div>
            </div>
        )
    }
}
export default IpodItem;