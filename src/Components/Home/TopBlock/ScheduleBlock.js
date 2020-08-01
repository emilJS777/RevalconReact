import React from 'react'
import IcArrowRight from './ic-arrow-right.svg'
import Icons8Play from './icons8-play.svg'
import LiCalendar from './il-calendar.png'

class ScheduleBlock extends React.Component{
  render(){
    return(
      <div className="col-6 schedule">
          {/* top block schedule */}
          <div className="schedule_top">
            <div className="left_block">
              <img src={LiCalendar} className="il-calendar"/>
                <span>Today’s Schedule</span>
            </div>
            <div className="right_block">
              <button>
                <span>+</span>
                <span>Add Event</span>
              </button>
            </div>
          </div>
          {/* content schedule */}
          <div className="schedule_content">
            <div className="carusel_block" id="caruselBlockSchedule">
              <div className="list_block" id="listBlockSchedule" >
                <div className="event" >
                  <p>Event Name 1</p>
                  <p><span className="green"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <p>Event Name 1</p>
                  <p><span className="folder"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <p>Event Name 1</p>
                  <p><span className="folder"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <p>Event Name 1</p>
                  <p><span className="folder"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <p>Event Name 1</p>
                  <p><span className="folder"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <p>Event Name 1</p>
                  <p><span className="folder"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <p>Event Name 1</p>
                  <p><span className="folder"></span><span>Block 1</span></p>
                  <span>12:00 - 18:00</span>
                  <div className="block-text"><p>Lorem Ipsum is simply dum…text of the printing and typesetting industry.</p></div>
                  {/* start and stop for mobile */}
                  <div className="block_start_stop">
                    {/*start for mobile*/}
                    <div className="start">
                      <button type="button">
                        <img src={Icons8Play} className="icons8-play"/>
                      </button>
                        <span>Start</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list_right" >
              <img src={IcArrowRight} className="ic-arrow-right vertical_horizontal_center"/>
            </div>
            <div className="list_left"  >
              <img src={IcArrowRight} className="ic-arrow-right"/>
            </div>
          </div>
        </div>
    )
  }
}

export default ScheduleBlock;
