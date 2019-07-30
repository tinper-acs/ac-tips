'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Toast = require('./Toast');

var _Toast2 = _interopRequireDefault(_Toast);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NcToast = {
    toastList: [],
    hide: function hide() {},
    destory: function destory(id) {
        var toast = document.getElementById(id);
        toast.style.right = 0;
        _reactDom2["default"].unmountComponentAtNode(toast);
        document.body.removeChild(toast);
        NcToast.toastList.splice(NcToast.toastList.indexOf(id), 1);
    },
    create: function create(options) {
        var type = options.type || 'success';
        var id = (0, _uuid2["default"])();
        NcToast.toastList.push(id);
        var toast = document.createElement('div');
        toast.className = 'nc-toast-out ' + type;
        toast.id = id;
        toast.style.top = NcToast.toastList.length * 50 + 'px';
        document.body.appendChild(toast);
        _reactDom2["default"].render(React.createElement(_Toast2["default"], _extends({}, options, { destory: NcToast.destory, id: id })), toast);
        setTimeout(function () {
            toast.style.right = 0;
        }, 0);
    },
    destoryAll: function destoryAll() {
        NcToast.toastList.forEach(function (id) {
            var toast = document.getElementById(id);
            toast.style.right = 0;
            _reactDom2["default"].unmountComponentAtNode(toast);
            document.body.removeChild(toast);
        });
        NcToast.toastList = [];
    }
};

exports["default"] = NcToast;
module.exports = exports['default'];