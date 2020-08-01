import React from 'react'
import TopBlock from './TopBlock/TopBlock'
import LiCloudMob from '../img/il-cloud.svg'
import LiPumpMob from '../img/il-pump.svg'
import ContentBlock from './ContentBlock/ContentBlock'


class Home extends React.Component{
  render(){
    return(
        <div className={"content col-11"}>
            {/*this wather & pump panel for mobile*/}
            <div className={"mobile_ul_block"}>
              <ul>
                <li className={"mob_wather"}>
                  <img src={LiCloudMob}
                    className={"il-cloud vertical_horizontal_center"}/>
                </li>
                <li className={"mob_pump"}>
                  <span></span>
                  <img src={LiPumpMob}
                    className={"il-pump vertical_horizontal_center"}/>
                </li>
              </ul>
            </div>
            {/*this top block - pump wather schedule*/}
            <TopBlock/>
            <ContentBlock/>
        </div>
    )
  }
}

export default Home;
