// This is the file that loads all the necessary Calendar JS
//
//= require_directory
    var CalendarApp = window.CalendarApp || { };
    CalendarApp.config = {  header: {
                                      left: 'prev,next',
                                      center: 'title',
                                      right: ''
                            },
                            events: {
                              googleCalendarApiKey: 'AIzaSyB9HeB4jq65k6vQCGDSbsFJUNgfUaSRtVI', 
                              googleCalendarId: 'ouon4b3aus0pmesfldctp88d7k@group.calendar.google.com'
                            },
                            eventClick: function(event) {
                              // opens events in a popup window
                              window.open(event.url, 'gcalevent', 'width=700,height=600');
                              return false;
                            },
                            eventAfterRender: function( event, element, view ){
                                var now = new Date();
                                if( event.end < now ) {
                                    element.addClass('fc-past-event');
                                }
                            },
                            dayRender : function( date, cell ) {
                                var y = date.getFullYear() , m = date.getMonth(), d = date.getDate();
                                var now = new Date() , now_y = now.getFullYear() , now_m = now.getMonth() , now_d = now.getDate();

                                if( y <= now_y ){
                                    if( m < now_m || ( m === now_m && d < now_d ) ){
                                        cell.addClass('fc-past-day');
                                    }
                                }
                            },
                            columnFormat:{
                                          month:"dddd",
                                          week:"ddd M/d",
                                          day:"dddd M/d"
                            },
                           }

  CalendarApp.render = function(config){
                         var _this = this;
                         $(document).ready(function(){
                            _this.config = $.extend( _this.config, config);
                            $('#calendar').fullCalendar( _this.config );
                         });
                        }
