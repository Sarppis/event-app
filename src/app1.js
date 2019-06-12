class App extends Component {



const dateString = item.event_dates.starting_day;
const currentTime = new Date(dateString);
const month = currentTime.getMonth() + 1;
const day = currentTime.getDate();
const year = currentTime.getFullYear();
const hour = currentTime.getHours();
const min = currentTime.getMinutes();
var date = day + "." + month + "." + year + " klo " + hour + "." + min;
console.log(date);

return (
  <React.Fragment>
  {dateString.map((item, index) => {
      return (
        <div key = { index }>{ item.date }</div>
      )
  })}
  </React.Fragment>
);
