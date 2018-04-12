partySizeLoop(){
  var options = [];

  for (let i = 1; i <= 20; i++) {
    options.push(<option value={i} key={i}>{i} person</option>);
  }

  return options;
}

partySizeOptions() {
  return (
    <select class="select-size"
      value={this.state.partySize}>
      {this.partySizeLoop()}
    </select>
  )
}

dateOptions() {
  let dateArr =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <select class="select-date"
      value={this.state.date}>
      {dateArr.map((date, idx) => (
        <option value={idx} key={idx}>{date}</option>
      ))}
    </select>
  )
}

timeOptions() {
  return (
    <select class="select-time"
      value={this.state.time}>
      <option value="5:30 PM">5:30 PM</option>
      <option value="5:45 PM">5:45 PM</option>
      <option value="6:00 PM">6:00 PM</option>
      <option value="6:15 PM">6:15 PM</option>
      <option value="6:30 PM">6:30 PM</option>
      <option value="6:45 PM">6:45 PM</option>
      <option value="6:50 PM">6:50 PM</option>
      <option value="7:00 PM">7:00 PM</option>
      <option value="7:15 PM">7:15 PM</option>
      <option value="7:30 PM">7:30 PM</option>
      <option value="7:45 PM">7:45 PM</option>
      <option value="7:50 PM">7:50 PM</option>
      <option value="8:00 PM">8:00 PM</option>
      <option value="8:15 PM">8:15 PM</option>
      <option value="8:30 PM">8:30 PM</option>
      <option value="8:45 PM">8:45 PM</option>
      <option value="9:00 PM">9:00 PM</option>
      <option value="9:15 PM">9:15 PM</option>
      <option value="9:30 PM">9:30 PM</option>
      <option value="9:45 PM">9:45 PM</option>
      <option value="10:00 PM">10:00 PM</option>
      <option value="10:15 PM">10:15 PM</option>
      <option value="10:30 PM">10:30 PM</option>
      <option value="10:45 PM">10:45 PM</option>
      <option value="11:00 PM">11:00 PM</option>
    </select>
  )
}
