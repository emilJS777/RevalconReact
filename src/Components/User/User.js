import React from 'react'
import ArrowLeftIcon from './arrow-left.svg'
import SimpleWorkLine from './iconfinder_line-chart_322458.png'
import Speak from './iconfinder_announce_171272.png'
import User from './iconfinder_user-01_186382.png'
import Edit from './iconfinder_icon-136-document-edit_314251.png'
import Cloud from './iconfinder_icon-ios7-cloud-outline_211721.png'
import Email from './iconfinder_Streamline-58_185078.png'
import Document from './iconfinder_document_172593.png'
import SmartAlert from './iconfinder_smart-alerts_2944874.png'
import Speedometer from './iconfinder_SpeedOMeter_2501879.png'
class App extends React.Component{
  render(){
    return(
      <div className="content col-11">
      				<div className="history_block user_block">
      					<h4>
      						<a onClick={this.props.PageHome} className="back_home">
      								<img src={ArrowLeftIcon} className="arrow-left"/>
      						</a>
      							My Account Details
                    <span>Check and edit user account information, including password, plans and contractors</span>
      					</h4>
                <div className="row justify-content-center">
                  <div className="col-5 setting_user_block">
                    <div>
                      <h6>User Settings</h6>
                      <div className="blocks user_setting">
                        <div>
                          <img src={SimpleWorkLine} alt=""/>
                          <div>
                            <span>Units Of Measurement</span>
                            <p>Celsius &amp; Milimeters</p>
                          </div>
                        </div>
                        <div>
                          <img src={Speak} alt=""/>
                          <div>
                            <span>Langue</span>
                            <p>English</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user_info">
                      <div className="user_image">
                        <img src={User} className="vertical_horizontal_center" alt=""/>
                      </div>
                      <div className="user_name">
                        <p>Sergey</p>
                        <span>sergeybarkudaryan@gmail.com</span>
                      </div>
                    </div>
                    <div className="settins_block_bottom">
                      <div className="edit_btn">
                        <img src={Edit} alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div>
                      <h6>Account Settings</h6>
                      <div className="blocks user_setting">
                        <div>
                          <img src={Cloud} alt=""/>
                          <div>
                            <span className="signal">API KEY</span>
                            <p>Celsius &amp; Milimeters</p>
                          </div>
                        </div>
                        <div>
                          <img src={Email} alt=""/>
                          <div>
                            <span className="signal">NOTIFICATION EMAIL</span>
                            <p>sergeybarkhudaryan@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settins_block_bottom">
                      <div className="edit_btn">
                        <img src={Edit} alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div>
                      <h6>Plan Details</h6>
                      <div className="blocks user_setting">
                        <div>
                          <img src={User} alt=""/>
                          <div>
                            <span className="signal">PLAN TYPE</span>
                            <p>Home (Expires on Sun 24 Sep 2023)</p>
                          </div>
                        </div>
                        <div>
                          <img src={Document} alt=""/>
                          <div>
                            <span>STORAGE</span>
                            <p>0MB of 25.0MB</p>
                          </div>
                        </div>
                        <div>
                          <img src={SmartAlert} alt=""/>
                          <div>
                            <span>SMS ALERTS</span>
                            <p>Sent <span class="red">0</span> SMS in last 30 days</p>
                          </div>
                        </div>
                        <div>
                          <img src={Speedometer} alt=""/>
                          <div>
                            <span>CONTROLLERS</span>
                            <p><span className="red">0</span> controller configured of a maximum of 3 controllers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settins_block_bottom">
                      <div className="edit_btn">
                        <img src={Edit} alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div>
                      <h6>PRIVACY SETTINGS</h6>
                      <div className="blocks user_setting">
                        <div>

                          <div>
                            <p>Youre not connected to any contractor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settins_block_bottom">
                      <div className="edit_btn">
                        <img src={Edit} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
      				</div>
      			</div>
    )
  }
}

export default App;
