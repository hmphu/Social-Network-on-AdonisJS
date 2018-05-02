webpackJsonp([0],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(194);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(96);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(95);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(94);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposeSection = function (_Component) {
  (0, _inherits3.default)(ComposeSection, _Component);

  //Export
  function ComposeSection() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ComposeSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.submitForm = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.post('/api/post', {
                content: _this.state.post_content,
                user_id: _this.props.initialData.userInfo.id,
                type: 'text'
              });

            case 3:
              post = _context.sent;

              console.log(post);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ComposeSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'compose-section' },
        _react2.default.createElement('textarea', { name: 'post_content', rows: 8, cols: 80, defaultValue: '', onChange: this.handleChange, value: this.state.post_content }),
        _react2.default.createElement(
          'div',
          { className: 'user-img' },
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(
            'div',
            { className: 'button photo-btn' },
            _react2.default.createElement('i', { className: 'fas fa-camera' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button video-btn' },
            _react2.default.createElement('i', { className: 'fas fa-video' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button send-btn', onClick: this.submitForm },
            _react2.default.createElement('i', { className: 'fas fa-paper-plane' })
          )
        )
      );
    }
  }]);
  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//!!!!!
//ligne 41
//  <div className={'dropdown ${this.State.dropdown ? 'active' :}'}> //ESX6 template

var LeftMenu = function (_Component) {
  (0, _inherits3.default)(LeftMenu, _Component);

  //Export
  function LeftMenu() {
    (0, _classCallCheck3.default)(this, LeftMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LeftMenu, [{
    key: "render",
    value: function render() {
      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          " Loading "
        );
      } else {
        var _props$initialData$us = this.props.initialData.userInfo,
            first_name = _props$initialData$us.first_name,
            last_name = _props$initialData$us.last_name;

        return _react2.default.createElement(
          "section",
          { id: "left-menu" },
          _react2.default.createElement(
            "div",
            { className: "account-dropdown" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              _react2.default.createElement("i", { className: "fab fa-typo3" })
            ),
            _react2.default.createElement(
              "div",
              { className: "name", onClick: this.clickedDropdown },
              first_name + " " + last_name
            ),
            _react2.default.createElement(
              "div",
              { className: "icon", onClick: this.clickedDropdown },
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown " + (this.state.dropdown ? 'active' : '') },
              _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/account" },
                  "account"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "/logout" },
                  "logout"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "groups" },
            _react2.default.createElement(
              "div",
              { className: "group" },
              _react2.default.createElement(
                "div",
                { className: "title" },
                "Title "
              ),
              _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                  "li",
                  null,
                  " ",
                  _react2.default.createElement(
                    "a",
                    { href: "/logout" },
                    "D\xE9connexion"
                  ),
                  " "
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  "link"
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  "link"
                )
              )
            )
          )
        );
      }
    }
  }]);
  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingComp = function (_Component) {
  (0, _inherits3.default)(LoadingComp, _Component);

  //Export
  function LoadingComp() {
    (0, _classCallCheck3.default)(this, LoadingComp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingComp.__proto__ || Object.getPrototypeOf(LoadingComp)).call(this));

    _this.state = {
      dropdown: false
    };
    return _this;
  }
  //on attribue la classe loading pour initialiser avec le reste sur l'index


  (0, _createClass3.default)(LoadingComp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "loading-comp", className: this.props.initialData == 'loading' ? 'active' : '' },
        _react2.default.createElement(
          "div",
          { className: "loading-icon" },
          _react2.default.createElement(
            "div",
            { className: "lds-css ng-scope", style: { width: "200px", height: "200px" } },
            _react2.default.createElement(
              "div",
              { style: { width: "100%", height: "100%" }, className: "lds-eclipse" },
              _react2.default.createElement("div", null)
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "loading-text" },
          "chargement.."
        )
      );
    }
  }]);
  return LoadingComp;
}(_react.Component);

exports.default = LoadingComp;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  //Export
  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log("purple swag");
    };

    _this.state = {
      name: "Sean"
    };
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "messenger" },
        _react2.default.createElement(
          "div",
          { className: "messenger-header" },
          _react2.default.createElement(
            "div",
            { className: "messenger-icon" },
            _react2.default.createElement("i", { className: "fas fa-calendar" })
          ),
          _react2.default.createElement(
            "div",
            { className: "title" },
            "Calendrier"
          ),
          _react2.default.createElement(
            "div",
            { className: "options-icon" },
            _react2.default.createElement("i", { className: "fas fa-ellipsis-v" })
          )
        )
      );
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchHeader = function (_Component) {
  (0, _inherits3.default)(SearchHeader, _Component);

  //Export
  function SearchHeader() {
    (0, _classCallCheck3.default)(this, SearchHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.clickedBtn = function () {
      console.log("purple swag");
    };

    _this.showLatestPosts = function () {
      if (_this.props.initialData.latestPosts != undefined) {
        return _this.props.initialData.latestPosts.map(function (post) {
          return _react2.default.createElement(
            "div",
            { className: "update-container" },
            _react2.default.createElement(
              "div",
              { className: "author-info" },
              _react2.default.createElement("a", { className: "user-img" }),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Sean"
                ),
                " a partag\xE9 une",
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "publication"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "media" },
              _react2.default.createElement("div", {
                className: "image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1457030642598-b037296c9296?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0cee8af04565ee4de4477cb5dcbabf8&auto=format&fit=crop&w=1350&q=80")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "padding-container" },
              _react2.default.createElement(
                "div",
                { className: "grey-container" },
                _react2.default.createElement(
                  "div",
                  { className: "update-info" },
                  _react2.default.createElement(
                    "h3",
                    null,
                    "Comment finir le site en temps et en heure?"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    post.content
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "update-stats" },
                  _react2.default.createElement(
                    "div",
                    { className: "icon-section" },
                    _react2.default.createElement(
                      "div",
                      { className: "like-circle" },
                      _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "other-users" },
                    "Alexis et 32 autres ont aim\xE9s ce post"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "comments-stats" },
                    "4 commentaires"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "compose-comment" },
                  _react2.default.createElement("textarea", { name: "name", rows: 8, cols: 80, defaultValue: "" }),
                  _react2.default.createElement(
                    "div",
                    { className: "buttons" },
                    _react2.default.createElement(
                      "div",
                      { className: "repost-btn" },
                      _react2.default.createElement("i", { className: "fas fa-redo" })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "like-btn" },
                      _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                    )
                  )
                )
              )
            )
          );
        });
      }
    };

    _this.state = {
      name: "Sean"
    };
    return _this;
  }

  (0, _createClass3.default)(SearchHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "posts" },
        this.showLatestPosts()
      );
    }
  }]);
  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchHeader = function (_Component) {
  (0, _inherits3.default)(SearchHeader, _Component);

  //Export
  function SearchHeader() {
    (0, _classCallCheck3.default)(this, SearchHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.clickedBtn = function () {
      console.log("purple swag");
    };

    _this.state = {
      name: "Sean"
    };
    return _this;
  }

  (0, _createClass3.default)(SearchHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "search-header" },
        _react2.default.createElement(
          "div",
          { className: "search-box" },
          _react2.default.createElement("input", { type: "text", name: true, defaultValue: true }),
          _react2.default.createElement(
            "div",
            { className: "icon-section" },
            _react2.default.createElement(
              "div",
              { className: "noti" },
              _react2.default.createElement("i", { className: "fas fa-bell" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number" },
                "3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "comment" },
              _react2.default.createElement("i", { className: "fas fa-comment" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number" },
                "3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("i", { className: "fas fa-user" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active" },
                "33"
              )
            )
          )
        )
      );
    }
  }]);
  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(96);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(95);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(94);

var _axios2 = _interopRequireDefault(_axios);

var _LeftMenu = __webpack_require__(165);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _Messenger = __webpack_require__(167);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _SearchHeader = __webpack_require__(169);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _ComposeSection = __webpack_require__(164);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(168);

var _Posts2 = _interopRequireDefault(_Posts);

var _LoadingComp = __webpack_require__(166);

var _LoadingComp2 = _interopRequireDefault(_LoadingComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pour lajax
var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log("purple swag");
    };

    _this.state = {
      name: "Sean"
    };
    return _this;
  }
  //creation d'une nouvelle methode pour lajax


  (0, _createClass3.default)(Layout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      var getInitialData = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var initialData;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get("/api/initialApp");

                case 3:
                  initialData = _context.sent;


                  self.setState({
                    initialData: initialData.data
                  }, function () {
                    console.log(self.state);
                  });
                  return _context.abrupt("return", initialData.data);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);

                  console.log(_context.t0);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function getInitialData() {
          return _ref.apply(this, arguments);
        };
      }();
      getInitialData();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "app-container home-page" },
        _react2.default.createElement(_LoadingComp2.default, {
          initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
        }),
        _react2.default.createElement(_LeftMenu2.default, {
          initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
        }),
        _react2.default.createElement(
          "section",
          { id: "content-container" },
          _react2.default.createElement(_SearchHeader2.default, null),
          _react2.default.createElement(
            "div",
            { className: "content-area" },
            _react2.default.createElement(_ComposeSection2.default, {
              initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
            }),
            _react2.default.createElement(_Posts2.default, {
              initialData: this.state.initialData == undefined ? "loading" : this.state.initialData
            })
          )
        ),
        _react2.default.createElement(_Messenger2.default, null)
      );
    }
  }]);
  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[188]);