import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div className="menu">
                <ul>
                    <span>Ipod</span>
                    <li className={this.props.activeMenuItem === "CoverFlow" ? 'active' : ''}>
                        Cover Flow {this.props.activeMenuItem === "CoverFlow" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                    <li className={this.props.activeMenuItem === "Music" ? 'active' : ''}>
                        Music {this.props.activeMenuItem === "Music" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                    <li className={this.props.activeMenuItem === "Games" ? 'active' : ''}>
                        Games {this.props.activeMenuItem === "Games" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                    <li className={this.props.activeMenuItem === "Settings" ? 'active' : ''}>
                        Settings {this.props.activeMenuItem === "Settings" ? <span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;