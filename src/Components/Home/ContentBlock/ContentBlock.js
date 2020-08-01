import React from 'react'
import GroupsBlock from './GroupsBlock'
import MapWithGroundOverlay from './MapBlock'

class ContentBlock extends React.Component{
  render(){

    return(
        <div className="main_block row">
          {/*Groups block*/}
          <GroupsBlock/>
          {/*Map block*/}
          <div className="col-9 map_block">
          <div id="map">
          <MapWithGroundOverlay
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzzexfCr4iJ_uW6jYmSe_knBfkc2aNdPc&callback=myMap"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
          </div>
          </div>
        </div>
    )
  }

}

export default ContentBlock;
