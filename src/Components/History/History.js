import React from 'react'
import ArrowLeftIcon from './arrow-left.svg'

class History extends React.Component{
  render(){

    return(
      <div className="content col-11">
      <div className="history_block">
        <h4>
          <a onClick={this.props.PageHome} className="back_home">
              <img src={ArrowLeftIcon} className="arrow-left"/>
          </a>
            History
        </h4>
        {/* table and pagination block */}
        <div className="table_page">
           <div className="table">
              <div className="thead">
                <div className="tr">
                  <div className="th">Title</div>
                  <div className="th">Name</div>
                  <div className="th">Start Date</div>
                  <div className="th">End Date</div>
                  <div className="th">Notes</div>
                </div>
              </div>
              <div className="tbody">
                <div className="tr error">
                  <div className="errMessage">
                    <h6>Error</h6>
                    <span>
                      Quisque ultricies massa sit amet ipsum dignissim, a laoreet lectus sagittis.
                    </span>
                  </div>
                  <div className="td">Event Name 1</div>
                  <div className="td">Block 1</div>
                  <div className="td">12:00 12/19/2019</div>
                  <div className="td">18:00 12/19/2019</div>
                  <div className="td">Lorem Ipsum is simply dum…text of the printing and typesetting industry.</div>
                </div>
                <div className="tr">
                  <div className="td">Event Name 1</div>
                  <div className="td">Block 1</div>
                  <div className="td">12:00 12/19/2019</div>
                  <div className="td">18:00 12/19/2019</div>
                  <div className="td">Lorem Ipsum is simply dum…text of the printing and typesetting industry.</div>
                </div>
                <div className="tr">
                  <div className="td">Event Name 1</div>
                  <div className="td">Block 1</div>
                  <div className="td">12:00 12/19/2019</div>
                  <div className="td">18:00 12/19/2019</div>
                  <div cclassNamelass="td">Lorem Ipsum is simply dum…text of the printing and typesetting industry.</div>
                </div>
                <div className="tr">
                  <div className="td">Event Name 1</div>
                  <div className="td">Block 1</div>
                  <div className="td">12:00 12/19/2019</div>
                  <div className="td">18:00 12/19/2019</div>
                  <div className="td">Lorem Ipsum is simply dum…text of the printing and typesetting industry.</div>
                </div>
              </div>
           </div>
           <div className="paginacion_block">
            <div className="select_block">
              <div>
                <div className="select">
                <a href="javascript:void(0);" className="slct">20</a>
                <ul className="drop">
                  <li><a>2</a></li>
                  <li><a>3</a></li>
                  <li><a>4</a></li>
                  <li><a>5</a></li>
                </ul>
                <input type="hidden" id="select"/>

                </div>
              <span>1-20 of 1653</span>
              </div>
            </div>
            <div className="pages">
              <a href="#" >◄</a>
              <nav className="navigation">
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li className="">
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li className="">
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li className="">
                    <a href="#">98</a>
                  </li>
                  <li>
                    <a href="#">123</a>
                  </li>
                </ul>
                <span>1 - 166</span>
                <a href="#">166</a>
              </nav>
              <a href="#">►</a>
            </div>
           </div>
        </div>
      </div>
    </div>
    )
  }
}

export default History;
