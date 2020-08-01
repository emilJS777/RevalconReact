import React from 'react'
import PumpBlock from './PumpBlock'
import ScheduleBlock from './ScheduleBlock'
import WatherBlock from './WatherBlock'
import $ from 'jquery'

class TopBlock extends React.Component{

  componentDidMount(){

  }
  BlockSlide(direction, slide){

  }
  render(){
    return(
        <div className={"top-blocks row"}>
          {/*this pump block*/}
          <PumpBlock

          />
          <ScheduleBlock

          />
          <WatherBlock/>
        </div>
    )
  }
  componentDidMount(){
    // Pump & Schedule ToDays Carusel
    // carousel right
    $(".list_right").on('click', function(){
      let left = $(this).siblings(".carusel_block").children(".list_block").css('left');
      let listBlock = $(this).siblings(".carusel_block").children(".list_block");

      let elemRight = listBlock.css('right');
      elemRight = parseInt(elemRight);

      let elemBlock = $(this).siblings(".carusel_block").children(".list_block").children("div").eq(1);
      let blockMargin = elemBlock.css('margin-left');
      let blockWidth = elemBlock.css('width');

      let fixedTrue = false;
      $(this).siblings(".list_left").css({display: 'block'});
        if(elemRight > -84){
          fixedTrue = true;
          // $(this).siblings(".carusel_block").children(".list_block").css({right: 0});
      }
      if(fixedTrue != true){
        left = parseInt(left) - parseInt(blockWidth) - parseInt(blockMargin);
      listBlock.css({left: left + "px"});
    }

    });
    // carosel left
    $(".list_left").on('click', function(){

      let elemLeft = $(this).siblings(".carusel_block").children(".list_block").css('left');
      let listBlock = $(this).siblings(".carusel_block").children(".list_block");

      let elemBlock = $(this).siblings(".carusel_block").children(".list_block").children("div").eq(1);
      let blockMargin = elemBlock.css('margin-left');
      let blockWidth = elemBlock.css('width');
      elemLeft = parseInt(elemLeft) + parseInt(blockWidth) +parseInt(blockMargin);


      listBlock.css({left: elemLeft + "px"});
      $(this).siblings(".list_right").css({display: 'block'});
      if(elemLeft > -74)
        $(this).css({display: 'none'});

    })

    // Todays Schedule events & pump blocks width
    function sliderBlockWidth(content){
      let eventParentWidth = $(content).find(".carusel_block").width();
      eventParentWidth = parseFloat(eventParentWidth);

      let eventBlockWidthSum;
       eventBlockWidthSum = (eventParentWidth / 3) -8.5;
      eventBlockWidthSum = parseInt(eventBlockWidthSum) +3;

      // blocks width for mobile
      if($(window).width() < 1024){
        eventBlockWidthSum = 100;
      }
      $(content +' > .carusel_block > .list_block > div').css({width: eventBlockWidthSum + 'px'});
    }
    sliderBlockWidth(".schedule_content");
    sliderBlockWidth(".pump_content");
    $(window).resize(function(){
      sliderBlockWidth(".schedule_content");
      sliderBlockWidth(".pump_content");
    });

    // pump & Schudle Carusel list block width logic
    let HomeCaruselListWidth = function(ListBlock, x){

      let elemLength = $(ListBlock).children('div').length;
      let elemWidth = $(ListBlock).children('div').css('width');
      elemWidth = parseInt(elemWidth);
      let elemMargin = $(ListBlock).children('div').last().css('margin-left');
      elemMargin = parseInt(elemMargin);

      let marginWidth = elemMargin + elemWidth + 1;

      let list_block_fixed_width = (marginWidth * elemLength) - elemMargin ;

      $(ListBlock).width(list_block_fixed_width);
      // if mobile width + new block
      if($(window).width() < 1024 && x == true)
          $(ListBlock).width(list_block_fixed_width + 160);
    };
    // carousel listBlock width function started
    HomeCaruselListWidth(".pump_content > .carusel_block > .list_block", false);
    HomeCaruselListWidth(".schedule_content > .carusel_block > .list_block", true);
    $(window).resize(function(){
      HomeCaruselListWidth(".pump_content > .carusel_block > .list_block", false);
      HomeCaruselListWidth(".schedule_content > .carusel_block > .list_block", true);
    })
  }
}

export default TopBlock;
