class Stopwatch extends React.Component {
  constructor(){
    super();
    this.state ={
      time: 0,
      start: 0,
      running: false
    }
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.setState ({
      time: 0
    });
  }

  start() {
      this.setState ({
        running: true,
      });
      this.interval = setInterval(() => this.setState({
        time: this.state.time + 1
      }), 1);

  }

  stop() {
      this.setState ({
        running: false
      });
      clearInterval(this.interval);
  }

  calculate(millis) {
    var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  var miliseconds = millis < 1000 ? millis : 0;
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ':' + miliseconds;
  }


render (){

  return (
      <div className="app">
        <nav className="controls">
          <div className="button_cont" onClick={() => this.start()}>
            <a href="#" className="button" >Start</a>
          </div>
          <div className="button_cont" onClick={() => this.stop()}>
            <a href="#" className="button" >Stop</a>
          </div>
          <div className="button_cont" onClick={() => this.reset()}>
            <a href="#" className="button" >Reset</a>
          </div>
        </nav>
        <h3>
          {this.calculate(this.state.time)}
        </h3>
      </div>
    )
  }
};

ReactDOM.render(<Stopwatch />, document.getElementById('app'));
