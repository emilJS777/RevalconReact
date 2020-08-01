import React from 'react'
import LiManomenter from './il-manomenter.png'
import IcArrowRight from './ic-arrow-right.svg'


class PumpBlock extends React.Component{

  componentDidMount(){

  }
  render(){

    return(
        <div className={"col-md-3 col-sm-12 pump_block"}>
        <div className="pump_content row">
            <div className="carusel_block" id="pumpCarouselBlock">

              <div className="list_block" id="pumpListBlock" >
                <div className="col- block-on"  >
                  <p>Pump 1</p>

                  <span className="on_off">ON</span>

                  <div className="manomenter-block">
                    <img src={LiManomenter} className={"il-manomenter"}/>
                  </div>

                    <span className={"number green"}>1.0</span>
                </div>
                <div className="col- block-off" >
                  <p>Pump 1</p>

                  <span className="on_off">OFF</span>

                  <div className="manomenter-block">
                    <img src={LiManomenter} className={"il-manomenter"}/>
                  </div>
                    <span className={"number green"}>1.0</span>
                </div>
                <div className="col- block-on">
                  <p>Pump 1</p>
                  <span className="on_off">ON</span>
                  <div className="manomenter-block">
                    <img src={LiManomenter} className={"il-manomenter"}/>
                  </div>
                    <span className={"number green"}>1.0</span>
                </div>
                <div className="col- block-on" >
                  <p>Pump 1</p>
                  <span className="on_off">ON</span>
                  <div className="manomenter-block">
                    <img src={LiManomenter} className={"il-manomenter"}/>
                  </div>
                    <span className={"number green"}>1.0</span>
                </div>
                <div className="col- block-on" >
                  <p>Pump 1</p>
                  <span className="on_off">ON</span>
                  <div className="manomenter-block">
                    <img src={LiManomenter} className={"il-manomenter"}/>
                  </div>
                    <span className={"number green"}>1.0</span>
                </div>
              </div>
            </div>
            <div className="list_right">
              <img src={IcArrowRight} className="ic-arrow-right vertical_horizontal_center"/>
            </div>
            <div className="list_left">
              <img src={IcArrowRight} className="ic-arrow-right"/>
            </div>
          </div>
        </div>
    )
  }
}

export default PumpBlock;
