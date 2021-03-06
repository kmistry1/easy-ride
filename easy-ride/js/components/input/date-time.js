// Generated by CoffeeScript 1.4.0
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['lib/bootstrap-datepicker', 'lib/bootstrap-timepicker', 'components/user-interface'], function(datepicker, timepicker, UserInterface) {
  /*
          A DateTime module that uses a Bootstrap DatePicker and TimePicker and
          combines the input.
  */

  var DateTime;
  return DateTime = (function(_super) {

    __extends(DateTime, _super);

    function DateTime(container, date, time) {
      this.container = container;
      this.parseTime = __bind(this.parseTime, this);

      this.getDateTime = __bind(this.getDateTime, this);

      DateTime.__super__.constructor.call(this, this.container);
      this.date = date.datepicker().data('datepicker');
      this.time = time.timepicker();
    }

    /*
                Returns time as an integer value, if entered
    */


    DateTime.prototype.getDateTime = function() {
      var date, dateString, time, timeString;
      dateString = this.date.element.children().filter('input').val();
      timeString = this.time.val();
      if (!dateString || !timeString) {
        this.setError('Missing information.');
        return null;
      }
      time = this.parseTime(timeString);
      date = this.date.date.valueOf() / 1000;
      this.removeError();
      return date + time;
    };

    /*
                Parses the time and returns the integer value in seconds.
                Args:
                    string {String}: time string e.g. '04:50 PM'
    */


    DateTime.prototype.parseTime = function(string) {
      var hours, meridiem, minutes, strings, time;
      strings = string.split(' ');
      time = strings[0].split(':');
      meridiem = strings[1];
      hours = parseInt(time[0]);
      minutes = parseInt(time[1]);
      if (meridiem === 'PM') {
        hours += 12;
      }
      return hours * 3600 + minutes * 60;
    };

    return DateTime;

  })(UserInterface);
});
