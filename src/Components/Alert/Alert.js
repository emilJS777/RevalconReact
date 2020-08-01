import React from 'react'
import IconPlus from "./iconfinder_Plus_1891033.png"
import IconEdit from "./iconfinder_icon-136-document-edit_314251.png"
import IconCross from "./iconfinder_f-cross_256_282471.png"
import IconSecurity from "./iconfinder_Streamline-58_185078.png"
import IconPhone from "./iconfinder_Smartphone_iphone_phone_4484572.png"
import Phone32 from "./iconfinder_phone1_172517.png"
import IconCalendar from "./iconfinder_primary_time_line-01_4791614.png"
import IconBellBasic from "./iconfinder_bell_basic_red_69823.png"
import ArrowLeft from "../img/arrow-left.svg"
class Alert extends React.Component{
  render(){
    return(
      <div className="content col-11">
				<div className="history_block alert_block">
					<h4>
						<a onClick={this.props.PageHome} className="back_home">
								<img src={ArrowLeft} className="arrow-left"/>
						</a>
							Alerts
              <span>Alerts allow you to be notified of potencial issues with your controller wiring, walwes pipes or controller</span>
					</h4>
          <div className="row justify-content-center">
            <div className="col-5 setting_user_block">
              <div className="alert_top">
                <div>
                  <img src={IconBellBasic} alt=""/>
                  <span>Controller Disconnected</span>
                </div>
              </div>
              <div className="alert_top_block">
                <h6>TRIGGER</h6>
                <div className="user_setting">
                  <div>
                    <div>
                      <span>controller has not connected to the internet for this period of time</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>1 Days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6>YOUR ACTIONS</h6>
                <div className="blocks user_setting">
                  <div>
                    <img src={IconCalendar} alt=""/>
                    <div>
                      <span>ADD TO THE EVENT LOG</span>
                      <p>Yes</p>
                    </div>
                  </div>
                  <div>
                    <img src={Phone32} alt=""/>
                    <div>
                      <span>APP NOTFICATION TO</span>
                      <p>Not Set</p>
                    </div>
                  </div>
                  <div>
                    <img src={IconPhone} alt=""/>
                    <div>
                      <span>SMS/TEXT MESSAGE TO</span>
                      <p>Not Set</p>
                    </div>
                  </div>
                  <div>
                    <img src={IconSecurity} alt=""/>
                    <div>
                      <span>SEND EMAIL TO</span>
                      <p>sergeybarkudaryan@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h6>APPLES TO</h6>
                <div className="user_setting">
                  <div>
                    <div>
                      <span>Apples To all controllers, sensors</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settins_block_bottom">
                <div className="delete_btn">
                  <img src={IconCross} alt=""/>
                </div>
                <div className="edit_btn">
                  <img src={IconEdit} alt=""/>
                </div>
              </div>
            </div>
            <div class="col-5 alert_add">
              <div>
                <img src={IconPlus} alt=""/>
                <span>Add new alert</span>
              </div>
            </div>
          </div>
				</div>
			</div>
    )
  }
}

export default Alert;
