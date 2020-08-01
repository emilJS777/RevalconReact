import React from 'react'
import LiColud from './il-cloud.svg'
import LiHumidity from './il-humidity.png'
import LiWaterneds from './il-waterneeds.png'

class WatherBlock extends React.Component{
  render(){
    return(
      <div className="col-3 wather_block">
						<div className="wather_top">
							<div className="wather_top_left">
								<img src={LiColud} className="il-cloud"/>
     							<span>Now</span>
							</div>
							<div className="wather_top_right text-right">
								<p>17.9°C / 75%</p>
							</div>
						</div>
						<div className="wather_content">
							<div className="wather_content_1">
								<div className="wather_content_1_left">
									<img src={LiHumidity} className="il-humidity"/>
						     		 <span>Humidity (% RH)</span>
								</div>
								<div className="wather_content_1_right text-right">
									<p>95%</p>
								</div>
							</div>
							<div className="wather_content_2">
								<div className="wather_content_2_left">
									<img src={LiWaterneds}  className="il-waterneeds"/>
						     		 <span>Water Needs (1/m3)</span>
								</div>
								<div className="wather_content_2_right text-right">
									<p>6.7 L</p>
								</div>
							</div>
						</div>
						<div className="wather_footer">
							<div>
								<p>Tursday</p>
								<span>22°  <span>11°</span></span>
							</div>
							<div>
								<p>Friday</p>
								<span>22°  <span>11°</span></span>
							</div>
							<div>
								<p>Saturday</p>
								<span>22°  <span>11°</span></span>
							</div>
						</div>
					</div>
    )
  }
}

export default WatherBlock;
