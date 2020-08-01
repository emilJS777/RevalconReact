import React from 'react'
import ArrowLeftIcon from './arrow-left.svg'
import glyphicon from 'glyphicons'

class Calendar extends React.Component{
  render(){

    return(
      <div className="content col-11">
        <div className="history_block">
          <h4>
            <a onClick={this.props.PageHome} className="back_home">
                <img src={ArrowLeftIcon}
                className="arrow-left"/>
            </a>
              Calendar
          </h4>
          <div id="calendar">
                <div className="">
                  <div className="calendar-section">
                    <div className="row">

                      <div className="col-sm-6">

                        <div className="calendar calendar-first" id="calendar_first">
                          <div className="calendar_header">
                            <button className="switch-month switch-left">
                              <i className="glyphicon glyphicon-chevron-left" style={{fontSize: '30px'}}>
                                &#8592;
                              </i>
                            </button>
                            <h2></h2>
                            <button className="switch-month switch-right">
                              <i className="glyphicon glyphicon-chevron-right" style={{fontSize: '30px'}}>
                                &#8594;
                              </i>
                            </button>
                          </div>
                          <div className="calendar_weekdays"></div>
                          <div className="calendar_content"></div>
                        </div>

                      </div>
                      <div className="col-sm-6">

                        <div className="calendar calendar-second" id="calendar_second">
                          <div className="calendar_header">
                            <button className="switch-month switch-left">
                              <i className="glyphicon glyphicon-chevron-left" style={{fontSize: '30px'}}>
                                &#8592;
                              </i>
                            </button>
                            <h2></h2>
                            <button className="switch-month switch-right">
                              <i className="glyphicon glyphicon-chevron-right" style={{fontSize: '30px'}}>
                                &#8594;
                              </i>
                            </button>
                          </div>
                          <div className="calendar_weekdays"></div>
                          <div className="calendar_content"></div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
          </div>

        </div>
      </div>
    )
  }

}

export default Calendar;
