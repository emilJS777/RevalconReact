import React from 'react'
import Menu from './Components/LeftPanel/Menu'
import MenuExtended from './Components/img/menu-expanded.svg'
import LocationSidebar from './Components/LeftPanel/LocationSidebar'
import Home from './Components/Home/Home'
import History from './Components/History/History'
import Calendar from './Components/Calendar/Calendar'
import Alert from './Components/Alert/Alert'
import User from './Components/User/User'
import LiStopActive from './Components/img/il-stop-active.svg'
import CalMob from "./Components/img/ic-calendar-mob.svg"
import CalMobNoACtive from "./Components/img/ic-calendar-no-active.svg"
import IcGrouMob from "./Components/img/ic-group.svg"
import IcGrouMobNoActive from "./Components/img/ic-group-no-active.svg"
import $ from 'jquery'
import swipe from 'jquery-touchswipe'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      Page: 'Home'
    }
  }
  PageSwitch(pageName){
      this.setState({Page: pageName});
      this.componentDidMount();
  }
  render(){
    const isStatePage = this.state.Page;
    let Page;

    switch (isStatePage) {
      case 'Home':
        Page = <Home/>;
        break;
      case 'History':
          Page = <History PageHome={this.PageSwitch.bind(this,'Home')}/>;
          break;
      case 'Calendar':
          Page = <Calendar PageHome={this.PageSwitch.bind(this,'Home')}/>;
          break;
      case 'Alert':
          Page = <Alert PageHome={this.PageSwitch.bind(this,'Home')}/>;
          break;
      case 'User':
          Page = <User PageHome={this.PageSwitch.bind(this,'Home')}/>;
          break;
    }
    return(
      <div className="row justify-content-end">
          {/*this button for mobile version for show left panel menu*/}
          {this.state.Page == 'Home' ? <div className={"sidebar_show_button"} > <img src={MenuExtended} className={"menu-expanded vertical_horizontal_center"}/></div> : ''}
          {/*this left panel menu*/}
          <Menu
            PageActive={this.state.Page}
            PageHome={this.PageSwitch.bind(this,'Home')}
            PageHistory={this.PageSwitch.bind(this,'History')}
            PageCalendar={this.PageSwitch.bind(this,'Calendar')}
            PageAlert={this.PageSwitch.bind(this,'Alert')}
            PageUser={this.PageSwitch.bind(this,'User')}/>
          {/*this locations sidebar toggle show & hidden*/}
          <LocationSidebar/>
          {/*this page*/}
          {Page}
          {/*this stop alert modal window*/}
          <div className="stopAlert">
			        <div className="stopBlock">
					         <div className="stop_top">
						             <span>
							              <img src={LiStopActive} className="il-stop-active"/>
							               Do you want to stop all sessions?
						              </span>
					          </div>
            				<div class="stop_bottom">
            					<button type="button" className="cancel">Cancel</button>
            					<button type="button" className="stop">Stop</button>
            				</div>
			           </div>
		           </div>
               {/*mobile bottom panel*/}
              {this.state.Page == 'Home' ?
              <div className="row is_mobile bottom_menu_block">
            			<div className="col-6 groups_mob">
            				<div className="">
            						<img src={IcGrouMobNoActive} className="ic-group"/>
            						<img src={IcGrouMob} className="ic-group"/>
            						<p>Block</p>
            				</div>
            			</div>
            			<div className="col-6 schedule_mob">
            				<div className="">
            						<img src={CalMobNoACtive} className="ic-calendar"/>
            						<img src={CalMob} className="ic-group"/>
            						<p>Schedule</p>
            				</div>
            			</div>
            		</div> : ''}
      </div>
    )
  }
  componentDidMount(){
this.forceUpdate();
    $(document).ready(function(){
        documentScripts();
    });

    let documentWidthSize = $(window).width();
    $(window).resize(function(){
        if($(window).width() < 1024 && documentWidthSize > 1023 ||
           $(window).width() > 1023 && documentWidthSize < 1024){
          window.location.href = window.location.href ;
          document.location.reload(true);
        }
          console.log(documentWidthSize);
    });

    let documentScripts = () =>{
      // SIGN_IN
      let email = $("#email");
      let password = $("#password");
      // button light
      $("input").on("change paste keyup",function(){
        // if texts are present the button lights up
      if(email.val() && password.val() ){
        $("#sign_button").attr("class", "Sign_submit_active");
        // if no flares up
      }else{
        $("#sign_button").removeClass("Sign_submit_active");
      }
      });
      // reject click in the absence of form
      $("#sign_button").on('click', function(event){
        if(email.val() == "" || email.val() == " ")
           event.preventDefault();
      });
      // location sidebar show & hidden function
      let locationSidebarShowClose = function(){
        let sdebarLeft = $(".location_sidebar").css('left');
        sdebarLeft = parseInt(sdebarLeft);
        $(".location_btn").toggleClass("active");
        if(sdebarLeft < 0){
          if($(window).width() < 1024)
            $(".location_sidebar").css({left: "0"});
          else
            $(".location_sidebar").css({left: "64px"});
        }else{
          $(".location_sidebar").css({left: "-320px"});
        }
      }
      // location sidebar show & hidden
      $(".menu-bottom > ul > .location_btn").click(function(){
        locationSidebarShowClose();
      });
      //  location sidebar close for mobile
      $(".location_sidebar > .location_close").click(function(){
        locationSidebarShowClose();
      });

      $('.location_sidebar').swipe({
       swipeLeft:function() {
          locationSidebarShowClose();
      }});
      // Locaton Selected
      $(".location_sidebar > .location_block > .locations > p").click(function(){
        if($(this).hasClass("location_selected"))
           $(this).removeClass("location_selected");
        else{
           $(this).parent('.locations').parent(".location_block").parent(".location_sidebar")
           .find("p").removeClass("location_selected");
           $(this).addClass("location_selected");
         }
      });



      // mobile schedule new button
      if($(window).width() < 1024){
        $(".schedule > .schedule_top > .right_block > button > span").last().text("new");
        let scheduleNewButton = $(".schedule > .schedule_top > .right_block").clone();
        scheduleNewButton.appendTo(".schedule_content > .carusel_block > .list_block");

      }


    if($(window).width() < 1024){
      // mobile inform show
      function informShow(objName){
          $(".content > .top-blocks").find(objName).fadeIn();
          if(objName === null)
            $(".content > .top-blocks > .wather_block").fadeOut('100',function(){});
      }

      $(".content > .mobile_ul_block > ul > .mob_wather").click(function(){
        informShow(".wather_block");
      })
      $(".content > .mobile_ul_block > ul > .mob_pump").click(function(){
        informShow(".pump_block");
      })
      // document click wather & pump inform hidde
      $(document).click(function(){
        let watherDisplay = $(".content > .top-blocks > .wather_block").css('opacity');
        let pumpDisplay = $(".content > .top-blocks > .pump_block").css('opacity');
        if (watherDisplay == '1')
          $(".content > .top-blocks > .wather_block").fadeOut('100',function(){});
        if (pumpDisplay == '1')
          $(".content > .top-blocks > .pump_block").fadeOut('100',function(){});
      })

      // sidebar menu close
      $('.sidebar').swipe({
       swipeLeft:function() {
          $(".sidebar").css({left: '-300px'});
      }});
      $(window).click(function(){
          if($('.sidebar').css('left') == '0px')
            $(".sidebar").css({left: '-300px'});
      });
    // sidebar show button
      $(".sidebar_show_button").click(function(){
        $(".sidebar").css({left: 0});
      })

      // inform hidden

      // mobile menu show schedule & groups
      function bottomShowMenu(){
        let buttom_menus_groups = $(".bottom_menu_block").children(".groups_mob");
        let buttom_menus_schedule = $(".bottom_menu_block").children(".schedule_mob");

        if(buttom_menus_groups.hasClass('active')){
          $(".main_block > .groups_block").css({display: 'block'});
          $(".top-blocks > .schedule").css({display: 'none'});
        }
        else if(buttom_menus_schedule.hasClass('active')){
          $(".main_block > .groups_block").css({display: 'none'});
          $(".top-blocks > .schedule").css({display: 'block'});
        }else{
          $(".main_block > .groups_block").css({display: 'none'});
          $(".top-blocks > .schedule").css({display: 'none'});
        }
      }

      // mobile manu bottom
      $(".bottom_menu_block >  div").click(function(){
        if($(this).hasClass("active")){
          $(this).removeClass("active");
        }
        else{
        $(this).addClass("active");
        $(this).siblings("div").removeClass("active");
        }
        bottomShowMenu();
      })


      // group block list count
      let groupsAll = $('.main_block > .groups_block > .groups');
      for(let i = 0; i < groupsAll.length; i++){
        let listChildrenGroupLength = groupsAll.eq(i).children(".group_list").children(".group").length;
        $("<p>"+listChildrenGroupLength+ " Blocks" +"</p>").appendTo(groupsAll.eq(i).children(".groups_head").children(".icon_name").children(".name"));
      }

      // group show && other group hidde
      $(".group_list > .group > .icon_name").click(function(){
        $(this).parent('.group').siblings(".group").toggle();
        $(this).parent('.group').parent(".group_list").siblings(".groups_head").toggle();
        $(this).parent('.group').children(".all_wather_mobile").toggle();
        if($(this).hasClass("icon_name_head"))
          $(this).removeClass("icon_name_head");
        else
          $(this).addClass("icon_name_head");
      })
    }

    // group list show
    $('.main_block > .groups_block > .groups  > .groups_head').click(function(){
      let groupsList = $(this).siblings('.group_list').css('display');
      if(groupsList == 'none'){
        $(this).siblings(".group_list").css({display: 'block'});
        $(this).children('.icon_name').children('img').css({display: 'inline-block'});
        $(this).children('.icon_name').children('span').first().css({display: 'none'});
        $(this).children('.icon_name').children('.icon_back').css({display: 'inline-block'})
        if($(window).width() < 1024)
          $(this).parent(".groups").siblings(".groups").css({display: 'none'});
      }
      else if(groupsList == 'block'){
        $(this).siblings(".group_list").css({display: 'none'});
        $(this).children('.icon_name').children('span').first().css({display: 'inline-block'});
        $(this).children('.icon_name').children('.icon_back').css({display: 'none'})
        $(this).children('.icon_name').children('img').css({display: 'none'});
        if($(window).width() < 1024)
          $(this).parent(".groups").siblings(".groups").css({display: 'block'});
      }
    });


      // group wather icon opacity logic
      function group(){
        let groupBlock = $(".groups_block > .groups");
        for(let i = 0; i < groupBlock.length; i++){
          let blockSort = groupBlock.eq(i).children(".group_list").children(".group").children(".all_wather");
          if(blockSort.hasClass("invisible")){
            groupBlock.eq(i).children(".groups_head").children(".all_wather").removeClass("on").addClass("off");
          }
          else{
            groupBlock.eq(i).children(".groups_head").children(".all_wather").removeClass("off").addClass("on");
          }
        }
      }
      group();
      // graups block wather off on
      $(".group").click(function(){
        let allWatherThis = $(this).children(".all_wather");
        if(allWatherThis.hasClass("invisible")){
          allWatherThis.removeClass("invisible");

        }else{
          allWatherThis.addClass("invisible");
        }
        group();
      });

      // pagination
      function pagesOpacity(){
        let pageFirst = $(".pages > .navigation > ul > li").first();
        let pageLast = $(".pages > .navigation > ul > li").last();
        if(pageFirst.hasClass("active")){
          $(".pages > a").first().css({opacity: .3, cursor: "default"});
        }
         if(pageLast.hasClass("active")){
          $(".pages > a").last().css({opacity: .3, cursor: "default"});
        }
      };
      pagesOpacity();

      // stop click
      $(".menu-bottom > ul > li").first().click(function(){
         $(".stopAlert").css({display: "block"});
      })
      $(".stop_bottom > .cancel").click(function(){
         $(".stopAlert").css({display: "none"});
      })
      $(".stop_bottom > .stop").click(function(){
         $(".stopAlert").css({display: "none"});
      })
    }
    {/*this ready scripts all bottom scripts for calendar & history select */}
    // Select for table & Calendar
    $( document ).ready(function() {
      // select for table
      $('.slct').click(function(){
      	/* Заносим выпадающий список в переменную */
      	var dropBlock = $(this).parent().find('.drop');

      	/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
      	if( dropBlock.is(':hidden') ) {
      		dropBlock.slideDown();

      		/* Выделяем ссылку открывающую select */
      		$(this).addClass('active');

      		/* Работаем с событием клика по элементам выпадающего списка */
      		$('.drop').find('li').click(function(){

      			/* Заносим в переменную HTML код элемента
      			списка по которому кликнули */
      			var selectResult = $(this).html();

      			/* Находим наш скрытый инпут и передаем в него
      			значение из переменной selectResult */
      			$(this).parent().parent().find('input').val(selectResult);

      			/* Передаем значение переменной selectResult в ссылку которая
      			открывает наш выпадающий список и удаляем активность */
      			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

      			/* Скрываем выпадающий блок */
      			dropBlock.slideUp();
      		});

      	/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
      	} else {
      		$(this).removeClass('active');
      		dropBlock.slideUp();
      	}

      	/* Предотвращаем обычное поведение ссылки при клике */
      	return false;
      });



      // calendar
    		function c(passed_month, passed_year, calNum) {
    			var calendar = calNum == 0 ? calendars.cal1 : calendars.cal2;
    			makeWeek(calendar.weekline);
    			calendar.datesBody.empty();
    			var calMonthArray = makeMonthArray(passed_month, passed_year);
    			var r = 0;
    			var u = false;
    			while(!u) {
    				if(daysArray[r] == calMonthArray[0].weekday) { u = true }
    				else {
    					calendar.datesBody.append('<div class="blank"></div>');
    					r++;
    				}
    			}
    			for(var cell=0;cell<42-r;cell++) { // 42 date-cells in calendar
    				if(cell >= calMonthArray.length) {
    					calendar.datesBody.append('<div class="blank"></div>');
    				} else {
    					var shownDate = calMonthArray[cell].day;
    					// Later refactiroing -- iter_date not needed after "today" is found
    					var iter_date = new Date(passed_year,passed_month,shownDate);
    					if (
    						(
    							( shownDate != today.getDate() && passed_month == today.getMonth() )
    							|| passed_month != today.getMonth()
    						)
    							&& iter_date < today) {
    						var m = '<div class="past-date">';
    					} else {
    						var m = checkToday(iter_date)?'<div class="today">':"<div>";
    					}
    					calendar.datesBody.append(m + shownDate + "</div>");
    				}
    			}

    			// var color = o[passed_month];
    			calendar.calHeader.find("h2").text(i[passed_month]+" "+passed_year);
    						//.css("background-color",color)
    						//.find("h2").text(i[passed_month]+" "+year);

    			// find elements (dates) to be clicked on each time
    			// the calendar is generated

    			//clickedElement = bothCals.find(".calendar_content").find("div");
    			var clicked = false;
    			selectDates(selected);

    			clickedElement = calendar.datesBody.find('div');
    			clickedElement.on("click", function(){
    				clicked = $(this);
    				if (clicked.hasClass('past-date')) { return; }
    				var whichCalendar = calendar.name;
    				console.log(whichCalendar);
    				// Understading which element was clicked;
    				// var parentClass = $(this).parent().parent().attr('class');
    				if (firstClick && secondClick) {
    					thirdClicked = getClickedInfo(clicked, calendar);
    					var firstClickDateObj = new Date(firstClicked.year,
    												firstClicked.month,
    												firstClicked.date);
    					var secondClickDateObj = new Date(secondClicked.year,
    												secondClicked.month,
    												secondClicked.date);
    					var thirdClickDateObj = new Date(thirdClicked.year,
    												thirdClicked.month,
    												thirdClicked.date);
    					if (secondClickDateObj > thirdClickDateObj
    						&& thirdClickDateObj > firstClickDateObj) {
    						secondClicked = thirdClicked;
    						// then choose dates again from the start :)
    						bothCals.find(".calendar_content").find("div").each(function(){
    							$(this).removeClass("selected");
    						});
    						selected = {};
    						selected[firstClicked.year] = {};
    						selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
    						selected = addChosenDates(firstClicked, secondClicked, selected);
    					} else { // reset clicks
    						selected = {};
    						firstClicked = [];
    						secondClicked = [];
    						firstClick = false;
    						secondClick = false;
    						bothCals.find(".calendar_content").find("div").each(function(){
    							$(this).removeClass("selected");
    						});
    					}
    				}
    				if (!firstClick) {
    					firstClick = true;
    					firstClicked = getClickedInfo(clicked, calendar);
    					selected[firstClicked.year] = {};
    					selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
    				} else {
    					console.log('second click');
    					secondClick = true;
    					secondClicked = getClickedInfo(clicked, calendar);
    					//console.log(secondClicked);

    					// what if second clicked date is before the first clicked?
    					var firstClickDateObj = new Date(firstClicked.year,
    												firstClicked.month,
    												firstClicked.date);
    					var secondClickDateObj = new Date(secondClicked.year,
    												secondClicked.month,
    												secondClicked.date);

    					if (firstClickDateObj > secondClickDateObj) {

    						var cachedClickedInfo = secondClicked;
    						secondClicked = firstClicked;
    						firstClicked = cachedClickedInfo;
    						selected = {};
    						selected[firstClicked.year] = {};
    						selected[firstClicked.year][firstClicked.month] = [firstClicked.date];

    					} else if (firstClickDateObj.getTime() ==
    								secondClickDateObj.getTime()) {
    						selected = {};
    						firstClicked = [];
    						secondClicked = [];
    						firstClick = false;
    						secondClick = false;
    						$(this).removeClass("selected");
    					}


    					// add between dates to [selected]
    					selected = addChosenDates(firstClicked, secondClicked, selected);
    				}
    				// console.log(selected);
    				selectDates(selected);
    			});

    		}
    		function selectDates(selected) {
    			if (!$.isEmptyObject(selected)) {
    				var dateElements1 = datesBody1.find('div');
    				var dateElements2 = datesBody2.find('div');

    				function highlightDates(passed_year, passed_month, dateElements){
    					if (passed_year in selected && passed_month in selected[passed_year]) {
    						var daysToCompare = selected[passed_year][passed_month];
    						// console.log(daysToCompare);
    						for (var d in daysToCompare) {
    							dateElements.each(function(index) {
    								if (parseInt($(this).text()) == daysToCompare[d]) {
    									$(this).addClass('selected');
    								}
    							});
    						}

    					}
    				}

    				highlightDates(year, month, dateElements1);
    				highlightDates(nextYear, nextMonth, dateElements2);
    			}
    		}

    		function makeMonthArray(passed_month, passed_year) { // creates Array specifying dates and weekdays
    			var e=[];
    			for(var r=1;r<getDaysInMonth(passed_year, passed_month)+1;r++) {
    				e.push({day: r,
    						// Later refactor -- weekday needed only for first week
    						weekday: daysArray[getWeekdayNum(passed_year,passed_month,r)]
    					});
    			}
    			return e;
    		}
    		function makeWeek(week) {
    			week.empty();
    			for(var e=0;e<7;e++) {
    				week.append("<div>"+daysArray[e].substring(0,3)+"</div>")
    			}
    		}

    		function getDaysInMonth(currentYear,currentMon) {
    			return(new Date(currentYear,currentMon+1,0)).getDate();
    		}
    		function getWeekdayNum(e,t,n) {
    			return(new Date(e,t,n)).getDay();
    		}
    		function checkToday(e) {
    			var todayDate = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    			var checkingDate = e.getFullYear()+'/'+(e.getMonth()+1)+'/'+e.getDate();
    			return todayDate==checkingDate;

    		}
    		function getAdjacentMonth(curr_month, curr_year, direction) {
    			var theNextMonth;
    			var theNextYear;
    			if (direction == "next") {
    				theNextMonth = (curr_month + 1) % 12;
    				theNextYear = (curr_month == 11) ? curr_year + 1 : curr_year;
    			} else {
    				theNextMonth = (curr_month == 0) ? 11 : curr_month - 1;
    				theNextYear = (curr_month == 0) ? curr_year - 1 : curr_year;
    			}
    			return [theNextMonth, theNextYear];
    		}
    		function b() {
    			today = new Date;
    			year = today.getFullYear();
    			month = today.getMonth();
    			var nextDates = getAdjacentMonth(month, year, "next");
    			nextMonth = nextDates[0];
    			nextYear = nextDates[1];
    		}

    		var e=480;

    		var today;
    		var year,
    			month,
    			nextMonth,
    			nextYear;

    		//var t=2013;
    		//var n=9;
    		var r = [];
    		var i = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY",
    				"JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER",
    				"NOVEMBER","DECEMBER"];
    		var daysArray = ["Sunday","Monday","Tuesday",
    						"Wednesday","Thursday","Friday","Saturday"];
    		var o = ["#16a085","#1abc9c","#c0392b","#27ae60",
    				"#FF6860","#f39c12","#f1c40f","#e67e22",
    				"#2ecc71","#e74c3c","#d35400","#2c3e50"];

    		var cal1=$("#calendar_first");
    		var calHeader1=cal1.find(".calendar_header");
    		var weekline1=cal1.find(".calendar_weekdays");
    		var datesBody1=cal1.find(".calendar_content");

    		var cal2=$("#calendar_second");
    		var calHeader2=cal2.find(".calendar_header");
    		var weekline2=cal2.find(".calendar_weekdays");
    		var datesBody2=cal2.find(".calendar_content");

    		var bothCals = $(".calendar");

    		var switchButton = bothCals.find(".calendar_header").find('.switch-month');

    		var calendars = {
    						"cal1": { 	"name": "first",
    									"calHeader": calHeader1,
    									"weekline": weekline1,
    									"datesBody": datesBody1 },
    						"cal2": { 	"name": "second",
    									"calHeader": calHeader2,
    									"weekline": weekline2,
    									"datesBody": datesBody2	}
    						}


    		var clickedElement;
    		var firstClicked,
    			secondClicked,
    			thirdClicked;
    		var firstClick = false;
    		var secondClick = false;
    		var selected = {};

    		b();
    		c(month, year, 0);
    		c(nextMonth, nextYear, 1);
    		switchButton.on("click",function() {
    			var clicked=$(this);
    			var generateCalendars = function(e) {
    				var nextDatesFirst = getAdjacentMonth(month, year, e);
    				var nextDatesSecond = getAdjacentMonth(nextMonth, nextYear, e);
    				month = nextDatesFirst[0];
    				year = nextDatesFirst[1];
    				nextMonth = nextDatesSecond[0];
    				nextYear = nextDatesSecond[1];

    				c(month, year, 0);
    				c(nextMonth, nextYear, 1);
    			};
    			if(clicked.attr("class").indexOf("left")!=-1) {
    				generateCalendars("previous");
    			} else { generateCalendars("next"); }
    			clickedElement = bothCals.find(".calendar_content").find("div");
    			console.log("checking");
    		});


    		//  Click picking stuff
    		function getClickedInfo(element, calendar) {
    			var clickedInfo = {};
    			var clickedCalendar,
    				clickedMonth,
    				clickedYear;
    			clickedCalendar = calendar.name;
    			//console.log(element.parent().parent().attr('class'));
    			clickedMonth = clickedCalendar == "first" ? month : nextMonth;
    			clickedYear = clickedCalendar == "first" ? year : nextYear;
    			clickedInfo = {"calNum": clickedCalendar,
    							"date": parseInt(element.text()),
    							"month": clickedMonth,
    							"year": clickedYear}
    			//console.log(clickedInfo);
    			return clickedInfo;
    		}


    		// Finding between dates MADNESS. Needs refactoring and smartening up :)
    		function addChosenDates(firstClicked, secondClicked, selected) {
    			if (secondClicked.date > firstClicked.date ||
    				secondClicked.month > firstClicked.month ||
    				secondClicked.year > firstClicked.year) {

    				var added_year = secondClicked.year;
    				var added_month = secondClicked.month;
    				var added_date = secondClicked.date;
    				console.log(selected);

    				if (added_year > firstClicked.year) {
    					// first add all dates from all months of Second-Clicked-Year
    					selected[added_year] = {};
    					selected[added_year][added_month] = [];
    					for (var i = 1;
    						i <= secondClicked.date;
    						i++) {
    						selected[added_year][added_month].push(i);
    					}

    					added_month = added_month - 1;
    					console.log(added_month);
    					while (added_month >= 0) {
    						selected[added_year][added_month] = [];
    						for (var i = 1;
    							i <= getDaysInMonth(added_year, added_month);
    							i++) {
    							selected[added_year][added_month].push(i);
    						}
    						added_month = added_month - 1;
    					}

    					added_year = added_year - 1;
    					added_month = 11; // reset month to Dec because we decreased year
    					added_date = getDaysInMonth(added_year, added_month); // reset date as well

    					// Now add all dates from all months of inbetween years
    					while (added_year > firstClicked.year) {
    						selected[added_year] = {};
    						for (var i=0; i < 12; i++) {
    							selected[added_year][i] = [];
    							for (var d = 1; d <= getDaysInMonth(added_year, i); d++) {
    								selected[added_year][i].push(d);
    							}
    						}
    						added_year = added_year - 1;
    					}
    				}

    				if (added_month > firstClicked.month) {
    					if (firstClicked.year == secondClicked.year) {
    						console.log("here is the month:",added_month);
    						selected[added_year][added_month] = [];
    						for (var i = 1;
    							i <= secondClicked.date;
    							i++) {
    							selected[added_year][added_month].push(i);
    						}
    						added_month = added_month - 1;
    					}
    					while (added_month > firstClicked.month) {
    						selected[added_year][added_month] = [];
    						for (var i = 1;
    							i <= getDaysInMonth(added_year, added_month);
    							i++) {
    							selected[added_year][added_month].push(i);
    						}
    						added_month = added_month - 1;
    					}
    					added_date = getDaysInMonth(added_year, added_month);
    				}

    				for (var i = firstClicked.date + 1;
    					i <= added_date;
    					i++) {
    					selected[added_year][added_month].push(i);
    				}
    			}
    			return selected;
    		}
    });


  }
}

export default App;
