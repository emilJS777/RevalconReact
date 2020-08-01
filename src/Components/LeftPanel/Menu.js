import React from 'react'
import RevalconIcon from '../img/logo-icon.png'
import HomeIcon from '../img/ic-home.png'
import HistoryIcon from '../img/ic-history.png'
import CalendarIcon from '../img/ic-calendar.png'
import CalendarIconMob from '../img/ic-calendar-no-active.svg'

import StopIcon from '../img/il-stop-active.png'
import HelpIcon from '../img/ic-help.png'
import NotficationIcon from '../img/ic-notification.png'
import LocationIcon from '../img/ic-location.svg'
import UserIcon from '../img/ic-user.png'
/*mob*/
import FullMob from '../img/logo-full-mob.png'
import HomeMob from '../img/iconfinder_icon-home_211676.png'
import HistoryMob from '../img/ic-history.svg'
import PlayMob from '../img/il-stop-inactive.svg'
import HelpMob from '../img/ic-help.svg'
import NotficationMob from '../img/ic-notification.svg'
import LocationMob from '../img/ic-location1.svg'

class Menu extends React.Component{
  render(){
    return(
      <div className={"sidebar col-1"}>
				{/* menu-top */}
				<div className={"menu-top"}>
          { /* logo */}
						<div className={"logo-block"}>
							<img src={RevalconIcon}
			    			className={"logo-icon"}/>
			    			{/* mobile img */}
			    			<img src={FullMob}/>
						</div>
			    	<ul>
			    		{/* home */}
			    		<li>
							<a className={this.props.PageActive == 'Home' ? 'active' : ''} onClick={this.props.PageHome}>
								<img src={HomeIcon}
					    		className={"ic-home vertical_horizontal_center"}/>
					    		{/* mobile img */}
					    		<img src={HomeMob}/>
					    		<span>Home</span>
							</a>
						</li>
						{/* history */}
						<li>
							<a onClick={this.props.PageHistory} className={this.props.PageActive == 'History' ? 'active' : ''}>
								<img src={HistoryIcon}
					     		className={"ic-history vertical_horizontal_center"}/>
					     		{/* mobile img */}
					     		<img src={HistoryMob}
     							className={"ic-history"}/>
     							<span>History</span>
							</a>
						</li>
						<li>
							{/* calendar */}
							<a onClick={this.props.PageCalendar} className={this.props.PageActive == 'Calendar' ? 'active' : ''}>
								<img src={CalendarIcon} className={"ic-calendar vertical_horizontal_center"}/>
					     		{/* mobile img */}
					     		<img src={CalendarIconMob}
     							className={"ic-calendar"}/>
     							<span>Calendar</span>
							</a>
						</li>
					</ul>
					<hr/>
				</div>
				{/* menu bottom */}
				<div className="menu-bottom">
					<ul>
						<li>
							<a >
								<img src={StopIcon}
				     			className={"il-stop-active vertical_horizontal_center"} />
				     			{/* stop */}
				     			<img src={PlayMob}
		     					className={"il-stop-inactive"}/>
		     					<span>Stop All</span>
		     				</a>
						</li>
						<li>
							<a>
								<img src={HelpIcon}
		     					className={"ic-help vertical_horizontal_center"}/>
		     					{/* mobile img */}
		     					<img src={HelpMob}
     							className={"ic-help vertical_horizontal_center"}/>
     							<span>Help</span>
     						</a>
						</li>
						<li className={this.props.PageActive == 'Alert' ? 'active' : ''}>
							<a onClick={this.props.PageAlert} >
								<img src={NotficationIcon}
		     					className={"ic-notification vertical_horizontal_center "}/>
		     					{/* mobile img */}
		     					<img src={NotficationMob}
     							className={"ic-notification vertical_horizontal_center"}/>
     							<span>Notfications</span>
     						</a>
						</li>
						<li className={"location_btn"}>
							<a >
								<img src={LocationIcon}
     						className={"ic-location vertical_horizontal_center"}/>
		     					{/*mobile img*/}
									<img src={LocationMob}
     							className={"ic-location vertical_horizontal_center"}/>
     							<span>Location</span>
     						</a>
						</li>
						<li  className={this.props.PageActive == 'User' ? 'active' : ''}>
							<a  onClick={this.props.PageUser}>
								<img src={UserIcon}
		    					className={"ic-user vertical_horizontal_center"}/>
		    					<span>Name Surname</span>
							</a>

						</li>
						<hr/>
					</ul>

				</div>
			</div>
    )
  }
}
export default Menu
