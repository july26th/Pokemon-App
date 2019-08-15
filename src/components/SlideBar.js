import React, { Component } from "react";
import {Link} from 'react-router-dom';
class SlideBar extends Component {

    render() {
        return (
            <div className="sidebar">
                <Link to='/'>
                <img width="80" className="rounded-circle" height="80" src="https://image.roku.com/developer_channels/prod/7c7677568f4a87f91abfa1b8a9cc94e952b44406574ac0db7bf08b3bc76c62a4.png"/>
                </Link>
                <Link to='/pokedex' className='mb-3 mt-3'>
                <img width="80" alt='' height="80" src="https://miro.medium.com/max/600/1*J2zE7T8jo7lGVoXRcq-eTA.png"/>
                </Link>
                <Link to='/gameoption'>
                <img src="https://dl2.macupdate.com/images/icons256/51993.png?d=1560327058"
                alt='Memory game' width="80" height="80" />
                </Link>
            </div>
        );
    }
}

export default SlideBar;