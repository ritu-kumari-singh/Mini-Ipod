import React from 'react';

class ButtonItem extends React.Component {
    render() {
        return (
            <div className="circle" onMouseOver={this.props.rotate}>
                <div  style={styles.pointer} id="menu" onClick={this.props.returnToPrevMenu} title="Go Back">
                    MENU
                </div>
                <div id="play">
                    <img style={styles.pointer} src={require('./image/play.png')} alt="Play" height="20" width="20" onClick={this.props.toggleMediaPlay} title="Play|Pause"/>
                </div>
                <div id="forward">
                    <img style={styles.pointer} src={require('./image/forward.png')} alt="forward" height="20" width="20" title="Next Song" onClick={this.props.changeSong}/>
                </div>
                <div id="rewind">
                <img style={styles.pointer} src={require('./image/rewind.png')} alt="rewind" height="20" width="20" title="Prev Song" onClick={this.props.changeSong}/>
                </div>
                <div id="select" onClick={this.props.selectMenuItem} title="Select">
                </div>
            </div>
        )
    }
}
const styles = {
    pointer : {
        cursor : 'pointer'
    }
}
export default ButtonItem;