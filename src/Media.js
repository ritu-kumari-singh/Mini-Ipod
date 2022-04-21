import React from "react";

class Media extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <span>All Songs</span>
                    <li className={this.props.activeMenuItem === "song1" ? 'active' : ''}>
                        Yummy {this.props.activeMenuItem === "song1" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                    <li className={this.props.activeMenuItem === "song2" ? 'active' : ''}>
                        Deserve You {this.props.activeMenuItem === "song2" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                </ul>
            </div>
        )
    }
}
export default Media;