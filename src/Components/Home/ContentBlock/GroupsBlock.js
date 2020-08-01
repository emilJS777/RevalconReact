import React from 'react'
import ResetIcon from './img/reset.svg'
import Wather2Icon from "./img/water-2.svg"
import GroupIconTeal from './img/ic-group-teal.svg'
import RedIcon from './img/ic-group-red.svg'
import IconPurple from './img/ic-group-purple.svg'
import IcOlive from './img/icon_olive.svg'
import IcGroupOlive from './img/ic-group-olive.svg'
import IconNavySvg from './img/icon_navy.svg'
import IcGrouNavy from './img/ic-group-navy.svg'
import IconMaron from './img/icon_maroon.svg'
import IcGroupMaroon from './img/ic-group-maroon.svg'
import IcLime from './img/icon_lime.svg'
import IcGrpupLime from './img/ic-group-lime.svg'
import IcFuchsia from './img/icon_fuchsia.svg'
import IcGroupFuchsia from './img/ic-group-fuchsia.svg'
import IcBlue from './img/icon_blue.svg'
import IcGroupBlue from './img/ic-group-blue.svg'
import IcBlack from './img/icon_black.svg'
import IcGroupBlack from './img/ic-group-black.svg'
import IcAcua from './img/icon_aqua.svg'
import IcGroupAcua from './img/ic-group-aqua.svg'
import IcYellow from './img/icon_yellow.svg'
import IcGroupYellow from './img/ic-group-yellow.svg'
import IcDarkYellow from './img/ic-group-darkYellow.svg'
import IcGreen from './img/icon_green.svg'
import IcGroupGreen from './img/ic-group-green.svg'
import IcTeal from './img/ic-group-green.svg'
import IconDarkYellow from './img/icon_darkYellow.svg'

class GroupsBlock extends React.Component{
  render(){

    return(
      <div className="col-3 groups_block">
          {/* groups*/}
          <div className="groups green">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupGreen} className="ic-group" />
                </span>
                <img src={IcGreen} className="icon" />
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2" />
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2" />
                </div>
                { /* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset" />
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups darkYellow">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcDarkYellow} className="ic-group" />
                </span>
                <img src={IconDarkYellow} className="icon"/>
                  <span className="icon_back"></span>
                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather off">
                <img src={Wather2Icon} className="water-2" />
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2" />
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="stop"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset" />
                    </button>
                    <span>stop</span>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2" />
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="stop"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset" />
                    </button>
                    <span>stop</span>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2" />
                </div>
               {/* play & stop for mobile*/}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset" />
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather invisible">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
              { /* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                 {/*play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="stop"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>stop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups yellow">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupYellow} className="ic-group"/>
                </span>
                <img src={IcYellow} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/*play & stop for mobile*/}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups aqua">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupAcua} className="ic-group"/>
                </span>
                <img src={IcAcua} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile*/}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups black">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupBlack} className="ic-group"/>
                </span>
                <img src={IcBlack} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span class="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups blue">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupBlue} className="ic-group"/>
                </span>
                <img src={IcBlue} class="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/*play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups fuchsia">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupFuchsia} className="ic-group"/>
                </span>
                <img src={IcFuchsia} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/*play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups lime">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGrpupLime} className="ic-group"/>
                </span>
                <img src={IcLime} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* groups */}
          <div className="groups maroon">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupMaroon} className="ic-group"/>
                </span>
                <img src={IconMaron} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups navy">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGrouNavy} className="ic-group"/>
                </span>
                <img src={IconNavySvg} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
              {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups olive">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IcGroupOlive} className="ic-group"/>
                </span>
                <img src={IcOlive} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups purple">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={IconPurple} className="ic-group"/>
                </span>
                <img src={IconPurple} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups red">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={RedIcon} className="ic-group"/>
                </span>
                <img src={RedIcon} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/* play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* groups */}
          <div className="groups teal">
            <div className="groups_head">
              <div className="icon_name">
                <span className="icon">
                  <img src={GroupIconTeal} className="ic-group"/>
                </span>
                <img src={IcTeal} className="icon"/>
                  <span className="icon_back"></span>

                <span className="name">
                  <p>Group</p>
                </span>
              </div>
              <div className="all_wather on">
                <img src={Wather2Icon} className="water-2"/>
              </div>
            </div>
            <div className="group_list">
              <div className="group">
                <div className="icon_name">
                  <span className="icon"></span>
                  <span className="name">Block 1</span>
                </div>
                <div className="all_wather">
                  <img src={Wather2Icon} className="water-2"/>
                </div>
                {/*play & stop for mobile */}
                <div className="all_wather_mobile">
                  <div className="start_stop">
                    <button type="button" className="start"></button>
                    <button className="reset">
                      <img src={ResetIcon} className="reset"/>
                    </button>
                    <span>start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default GroupsBlock;
