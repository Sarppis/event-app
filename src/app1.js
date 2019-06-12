class App extends Component {

  { events.map((item, index) => {
            return (
              <div key = { index }>
              <div> Event Name: { item.name.fi } </div>
              <div> Longitude: { item.location.lon } </div>
              <div> Latitude: { item.location.lat } </div>
              </div>
            )
          })}
        </div>

}
export default App;
