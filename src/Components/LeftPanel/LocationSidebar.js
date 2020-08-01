import React from 'react'
import ArrowLeft from '../img/arrow-left.svg'

class App extends React.Component{
  render(){
    return(
			<div className={"location_sidebar"}>
						{/*close for mobile*/}
				<div className={"location_close"}>
					<img src={ArrowLeft} className={"arrow-left"}/>
				</div>
				<div className={"location_block"}>
					<span>Company Name 1</span>
					<div className={"locations"}>
						<p className={"location_selected"}>Location Name 1</p>
						<p>Location Name 2</p>
						<p>location Name 3</p>
						<p>location Name 4</p>
						<p>location Name 5</p>
						<p>location Name 6</p>
					</div>
				</div>
				<div className={"location_block"}>
					<span>Company Name 2</span>
					<div className={"locations"}>
						<p>Location Name 1</p>
						<p>Location Name 2</p>
						<p>location Name 3</p>
					</div>
				</div>
				<div className={"location_block"}>
					<span>Company Name 3</span>
					<div className={"locations"}>
						<p>Location Name 1</p>
						<p>Location Name 2</p>
						<p>location Name 3</p>
					</div>
				</div>
				<div className={"location_block"}>
					<span>Company Name 3</span>
					<div className={"locations"}>
						<p>Location Name 1</p>
						<p>Location Name 2</p>
						<p>location Name 3</p>
					</div>
				</div>
				<div className={"location_block"}>
					<span>Company Name 3</span>
					<div className={"locations"}>
						<p>Location Name 1</p>
						<p>Location Name 2</p>
						<p>location Name 3</p>
					</div>
				</div>
				<div className={"location_block"}>
					<span>Company Name 3</span>
					<div className={"locations"}>
						<p>Location Name 1</p>
						<p>Location Name 2</p>
						<p>location Name 3</p>
					</div>
				</div>
			</div>
    )
  }
}

export default App;
