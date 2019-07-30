'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    clsfix: _propTypes2["default"].string,
    content: _propTypes2["default"].node,
    duration: _propTypes2["default"].number,
    type: _propTypes2["default"].oneOfType[('success', 'error', 'warning')]
};
var defaultProps = {
    clsfix: 'nc-toast',
    content: '',
    type: 'success',
    duration: 5000
};

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.hide = function () {
            _this.setState({
                hide: true
            });
        };

        _this.onMouseEnter = function () {
            if (!_this.state.hide) return;
            _this.setState({
                hide: false
            });
            _this.timer && clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.timer = setTimeout(function () {
                    _this.hide();
                }, _this.props.duration);
            });
        };

        _this.state = {
            hide: false
        };
        return _this;
    }

    Toast.prototype.componentDidMount = function componentDidMount() {
        // let { duration, destory, type, id } = this.props;
        // if(duration){
        //     this.timer&&clearTimeout(this.timer)
        //     if(type=='success'||type=='warning'){
        //         this.timer=setTimeout(()=>{
        //             destory(id);
        //         },duration)
        //     }else{
        //         this.timer=setTimeout(()=>{
        //             this.hide()
        //         },duration)
        //     }
        // }
    };

    Toast.prototype.render = function render() {
        var IconTypes = {
            warning: 'uf-exc-c',
            error: 'uf-close-c',
            success: 'uf-correct'
        };
        var _props = this.props,
            clsfix = _props.clsfix,
            content = _props.content,
            type = _props.type,
            destory = _props.destory,
            id = _props.id;
        var hide = this.state.hide;

        return _react2["default"].createElement(
            'div',
            { className: clsfix + ' ' + type, onMouseEnter: this.onMouseEnter },
            _react2["default"].createElement(_beeIcon2["default"], { type: IconTypes[type] }),
            hide ? '' : _react2["default"].createElement(
                'span',
                { className: clsfix + '-inner' },
                content
            ),
            hide ? '' : _react2["default"].createElement(
                'span',
                { className: clsfix + '-close', onClick: function onClick() {
                        destory(id);
                    } },
                '\u5173\u95ED'
            )
        );
    };

    return Toast;
}(_react.Component);

;

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

exports["default"] = Toast;
module.exports = exports['default'];