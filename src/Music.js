import React from "react";

class Music extends React.Component {
    render () {
        return (
            <div className="menu">
                <ul>
                    <span>Music</span>
                    <li className={this.props.activeMenuItem === "AllSongs" ? 'active' : ''}>
                        All Songs {this.props.activeMenuItem === "AllSongs" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                    <li className={this.props.activeMenuItem === "Artists" ? 'active' : ''}>
                        Artists {this.props.activeMenuItem === "Artists" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                    <li className={this.props.activeMenuItem === "Albums" ? 'active' : ''}>
                        Albums {this.props.activeMenuItem === "Albums" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                </ul>
            </div>
        );
    }
}
export default Music;