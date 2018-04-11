import React, { Component } from "react";
import IconChart from "react-icons/lib/io/arrow-graph-up-right";
import IconHeart from "react-icons/lib/fa/heart-o";
import range from "lodash/merge";
class MakeReservation extends Component {
  constructor(props) {
    super(props);

    this.numBookings = this.numBookings.bind(this);
  }

  numBookings() {
    let bookings = Math.floor(Math.random() * 100) + 10;
    return `Booked ${bookings} times today`
  }

  partySizeOptions() {
    return (
      <select class="select-size">
        <option>For 1</option>
        <option>For 2</option>
        <option>For 3</option>
        <option>For 4</option>
        <option>For 5</option>
        <option>For 6</option>
        <option>For 7</option>
        <option>For 8</option>
        <option>For 9</option>
        <option>For 10</option>
        <option>For 11</option>
        <option>For 12</option>
        <option>For 13</option>
        <option>For 14</option>
        <option>For 15</option>
        <option>For 16</option>
        <option>For 17</option>
        <option>For 18</option>
        <option>For 19</option>
        <option>For 20</option>
      </select>
    )
  }

  dateOptions() {
    return (
      <select class="select-date">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
    )
  }

  timeOptions() {
    return (
      <select class="select-time">
        <option>5:30 PM</option>
        <option>5:45 PM</option>
        <option>6:00 PM</option>
        <option>6:15 PM</option>
        <option>6:30 PM</option>
        <option>6:45 PM</option>
        <option>6:50 PM</option>
        <option>7:00 PM</option>
        <option>7:15 PM</option>
        <option>7:30 PM</option>
        <option>7:45 PM</option>
        <option>7:50 PM</option>
        <option>8:00 PM</option>
        <option>8:15 PM</option>
        <option>8:30 PM</option>
        <option>8:45 PM</option>
        <option>9:00 PM</option>
        <option>9:15 PM</option>
        <option>9:30 PM</option>
        <option>9:45 PM</option>
        <option>10:00 PM</option>
        <option>10:15 PM</option>
        <option>10:30 PM</option>
        <option>10:45 PM</option>
        <option>11:00 PM</option>
      </select>
    )
  }

  render() {
    return (
      <div>
        <div className="reservation-container">
          <div className="reservation-header">
            Make a reservation
          </div>
          <div className="reservation-size">
            Party Size
          </div>
          {this.partySizeOptions()}
          <div className="reservation-options">
            <div className="left-reservation-date">
              Date
            </div>
            {this.dateOptions()}
            <div className="right-reservation-time">
              Time
            </div>
            {this.timeOptions()}
          </div>
          <button
            className="btn-submit-reservation">
            Find a Table
          </button>
          <div className="bookingAmt">
            {<IconChart size={20}/>} {this.numBookings()}
          </div>
      </div>
      <button
        className="btn-favorite">
        {<IconHeart size={18}/>}  Save to Favorites
      </button>
    </div>
    )
  }
}
export default MakeReservation;
