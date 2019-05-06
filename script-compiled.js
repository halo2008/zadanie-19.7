'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

    _this.state = {
      time: 0,
      start: 0,
      running: false
    };
    _this.start = _this.start.bind(_this);
    _this.stop = _this.stop.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  _createClass(Stopwatch, [{
    key: 'reset',
    value: function reset() {
      this.setState({
        time: 0
      });
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      this.setState({
        running: true
      });
      this.interval = setInterval(function () {
        return _this2.setState({
          time: _this2.state.time + 1
        });
      }, 1);
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.setState({
        running: false
      });
      clearInterval(this.interval);
    }
  }, {
    key: 'calculate',
    value: function calculate(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = (millis % 60000 / 1000).toFixed(0);
      var miliseconds = millis < 1000 ? millis : 0;
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ':' + miliseconds;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          'nav',
          { className: 'controls' },
          React.createElement(
            'div',
            { className: 'button_cont', onClick: function onClick() {
                return _this3.start();
              } },
            React.createElement(
              'a',
              { href: '#', className: 'button' },
              'Start'
            )
          ),
          React.createElement(
            'div',
            { className: 'button_cont', onClick: function onClick() {
                return _this3.stop();
              } },
            React.createElement(
              'a',
              { href: '#', className: 'button' },
              'Stop'
            )
          ),
          React.createElement(
            'div',
            { className: 'button_cont', onClick: function onClick() {
                return _this3.reset();
              } },
            React.createElement(
              'a',
              { href: '#', className: 'button' },
              'Reset'
            )
          )
        ),
        React.createElement(
          'h3',
          null,
          this.calculate(this.state.time)
        )
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

;

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
