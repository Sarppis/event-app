class App extends Component {

  state = {
    events: [],
    loading: true
  }

  componentDidMount() {
    fetch('http://localhost:3030/')
      .then(res => res.json()).then((myData) => {
        this.setState({
          events: myData.data,
          loading: false
        })
        console.log(typeof(myData.data))
      }).catch(console.log)
  }
  render() {
    return ( <div> { this.state.loading || !this.state.events ? ( <div> Loading.... </div>
    ) : (<div> { this.state.events.map((item, index) => {
              return (
                <div key = { index }>
                <div> Event Name: { item.name.fi } </div>
                <div> Longitude: { item.location.lon } </div>
                <div> Latitude: { item.location.lat } </div>
                </div>
              )
            })
          } </div>
        )
      }
      </div>
    )
  }
}
export default App;

Message Input
