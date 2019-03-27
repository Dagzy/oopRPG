var PlayGame =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Game/Characters/Character.js":
/*!**************************************!*\
  !*** ./Game/Characters/Character.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
    function Character(name) {
        _classCallCheck(this, Character);

        this.name = name;
        this.stats = {
            hp: 10,
            mp: 0,
            str: 8,
            wis: 8,
            int: 8,
            chr: 8,
            dex: 8,
            con: 8,
            level: 0
        };
    }

    _createClass(Character, [{
        key: "greeting",
        value: function greeting() {
            return "Hello, my name is " + this.name;
        }
    }, {
        key: "levelUp",
        value: function levelUp() {
            ++this.stats.level;
        }
    }]);

    return Character;
}();

exports.default = Character;

/***/ }),

/***/ "./Game/Characters/Heroes/BaseClasses/Mage.js":
/*!****************************************************!*\
  !*** ./Game/Characters/Heroes/BaseClasses/Mage.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Character2 = __webpack_require__(/*! ../../Character */ "./Game/Characters/Character.js");

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mage = function (_Character) {
    _inherits(Mage, _Character);

    function Mage(name) {
        _classCallCheck(this, Mage);

        var _this = _possibleConstructorReturn(this, (Mage.__proto__ || Object.getPrototypeOf(Mage)).call(this, name));

        _this.stats.hp -= 2;
        _this.stats.mp = 10;
        _this.stats.wis += 4;
        _this.stats.int += 4;
        _this.stats.str -= 2;
        return _this;
    }

    _createClass(Mage, [{
        key: 'dailySpells',
        value: function dailySpells() {
            return 2 + this.stats.level;
        }
    }]);

    return Mage;
}(_Character3.default);

exports.default = Mage;

/***/ }),

/***/ "./Game/Characters/Heroes/BaseClasses/Melee.js":
/*!*****************************************************!*\
  !*** ./Game/Characters/Heroes/BaseClasses/Melee.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Character2 = __webpack_require__(/*! ../../Character */ "./Game/Characters/Character.js");

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Melee = function (_Character) {
    _inherits(Melee, _Character);

    function Melee(name) {
        _classCallCheck(this, Melee);

        var _this = _possibleConstructorReturn(this, (Melee.__proto__ || Object.getPrototypeOf(Melee)).call(this, name));

        _this.stats.hp += 5;
        _this.stats.str += 4;
        _this.stats.dex += 2;
        _this.stats.con += 2;
        _this.stats.int -= 2;
        // this.warcry = this.warcry.bind(this)
        return _this;
    }

    _createClass(Melee, [{
        key: 'warcry',
        value: function warcry() {
            var _this2 = this;

            var _cooldown = 30;
            return {
                turns: 3,
                boost: function boost() {
                    _this2.stats.str += 2;
                },
                decrement: function decrement() {
                    turns--;
                }
            };
        }
    }]);

    return Melee;
}(_Character3.default);

exports.default = Melee;

/***/ }),

/***/ "./Game/Characters/Heroes/BaseClasses/Ranged.js":
/*!******************************************************!*\
  !*** ./Game/Characters/Heroes/BaseClasses/Ranged.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Character2 = __webpack_require__(/*! ../../Character */ "./Game/Characters/Character.js");

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ranged = function (_Character) {
    _inherits(Ranged, _Character);

    function Ranged(name) {
        _classCallCheck(this, Ranged);

        var _this = _possibleConstructorReturn(this, (Ranged.__proto__ || Object.getPrototypeOf(Ranged)).call(this, name));

        _this.stats.hp += 5;
        _this.stats.dex += 4;
        _this.stats.str += 2;
        _this.stats.con += 2;
        _this.stats.int -= 2;
        return _this;
    }

    _createClass(Ranged, [{
        key: 'focus',
        value: function focus() {
            var _this2 = this;

            return {
                turns: 3,
                boost: function boost() {
                    _this2.stats.dex += 2;
                },
                decrement: function decrement() {
                    turns--;
                }
            };
        }
    }]);

    return Ranged;
}(_Character3.default);

exports.default = Ranged;

/***/ }),

/***/ "./Game/Characters/Heroes/EliteClasses/Cleric.js":
/*!*******************************************************!*\
  !*** ./Game/Characters/Heroes/EliteClasses/Cleric.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Mage2 = __webpack_require__(/*! ../BaseClasses/Mage */ "./Game/Characters/Heroes/BaseClasses/Mage.js");

var _Mage3 = _interopRequireDefault(_Mage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cleric = function (_Mage) {
    _inherits(Cleric, _Mage);

    function Cleric(name) {
        _classCallCheck(this, Cleric);

        return _possibleConstructorReturn(this, (Cleric.__proto__ || Object.getPrototypeOf(Cleric)).call(this, name));
    }

    return Cleric;
}(_Mage3.default);

exports.default = Cleric;

/***/ }),

/***/ "./Game/Characters/Heroes/EliteClasses/Druid.js":
/*!******************************************************!*\
  !*** ./Game/Characters/Heroes/EliteClasses/Druid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Mage2 = __webpack_require__(/*! ../BaseClasses/Mage */ "./Game/Characters/Heroes/BaseClasses/Mage.js");

var _Mage3 = _interopRequireDefault(_Mage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Druid = function (_Mage) {
    _inherits(Druid, _Mage);

    function Druid(name) {
        _classCallCheck(this, Druid);

        return _possibleConstructorReturn(this, (Druid.__proto__ || Object.getPrototypeOf(Druid)).call(this, name));
    }

    return Druid;
}(_Mage3.default);

exports.default = Druid;

/***/ }),

/***/ "./Game/Characters/Heroes/EliteClasses/Necromancer.js":
/*!************************************************************!*\
  !*** ./Game/Characters/Heroes/EliteClasses/Necromancer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Mage2 = __webpack_require__(/*! ../BaseClasses/Mage */ "./Game/Characters/Heroes/BaseClasses/Mage.js");

var _Mage3 = _interopRequireDefault(_Mage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Necromancer = function (_Mage) {
    _inherits(Necromancer, _Mage);

    function Necromancer(name) {
        _classCallCheck(this, Necromancer);

        return _possibleConstructorReturn(this, (Necromancer.__proto__ || Object.getPrototypeOf(Necromancer)).call(this, name));
    }

    return Necromancer;
}(_Mage3.default);

exports.default = Necromancer;

/***/ }),

/***/ "./Game/Characters/Heroes/EliteClasses/Ranger.js":
/*!*******************************************************!*\
  !*** ./Game/Characters/Heroes/EliteClasses/Ranger.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Ranged2 = __webpack_require__(/*! ../BaseClasses/Ranged */ "./Game/Characters/Heroes/BaseClasses/Ranged.js");

var _Ranged3 = _interopRequireDefault(_Ranged2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ranger = function (_Ranged) {
    _inherits(Ranger, _Ranged);

    function Ranger(name) {
        _classCallCheck(this, Ranger);

        return _possibleConstructorReturn(this, (Ranger.__proto__ || Object.getPrototypeOf(Ranger)).call(this, name));
    }

    return Ranger;
}(_Ranged3.default);

exports.default = Ranger;

/***/ }),

/***/ "./Game/Characters/Heroes/EliteClasses/Rogue.js":
/*!******************************************************!*\
  !*** ./Game/Characters/Heroes/EliteClasses/Rogue.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Ranged2 = __webpack_require__(/*! ../BaseClasses/Ranged */ "./Game/Characters/Heroes/BaseClasses/Ranged.js");

var _Ranged3 = _interopRequireDefault(_Ranged2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rogue = function (_Ranged) {
    _inherits(Rogue, _Ranged);

    function Rogue(name) {
        _classCallCheck(this, Rogue);

        return _possibleConstructorReturn(this, (Rogue.__proto__ || Object.getPrototypeOf(Rogue)).call(this, name));
    }

    return Rogue;
}(_Ranged3.default);

exports.default = Rogue;

// import Ranged from '../BaseClasses/Ranged';

// class Rogue extends Ranged{
//     constructor(name){
//         super(name)
//     }
// }
// export default Rogue

/***/ }),

/***/ "./Game/Characters/Heroes/EliteClasses/Warrior.js":
/*!********************************************************!*\
  !*** ./Game/Characters/Heroes/EliteClasses/Warrior.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Melee2 = __webpack_require__(/*! ../BaseClasses/Melee */ "./Game/Characters/Heroes/BaseClasses/Melee.js");

var _Melee3 = _interopRequireDefault(_Melee2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Warrior = function (_Melee) {
    _inherits(Warrior, _Melee);

    function Warrior(name) {
        _classCallCheck(this, Warrior);

        return _possibleConstructorReturn(this, (Warrior.__proto__ || Object.getPrototypeOf(Warrior)).call(this, name));
    }

    return Warrior;
}(_Melee3.default);

exports.default = Warrior;

/***/ }),

/***/ "./Game/Characters/Heroes/Heroes.js":
/*!******************************************!*\
  !*** ./Game/Characters/Heroes/Heroes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Cleric = __webpack_require__(/*! ./EliteClasses/Cleric */ "./Game/Characters/Heroes/EliteClasses/Cleric.js");

var _Cleric2 = _interopRequireDefault(_Cleric);

var _Druid = __webpack_require__(/*! ./EliteClasses/Druid */ "./Game/Characters/Heroes/EliteClasses/Druid.js");

var _Druid2 = _interopRequireDefault(_Druid);

var _Necromancer = __webpack_require__(/*! ./EliteClasses/Necromancer */ "./Game/Characters/Heroes/EliteClasses/Necromancer.js");

var _Necromancer2 = _interopRequireDefault(_Necromancer);

var _Ranger = __webpack_require__(/*! ./EliteClasses/Ranger */ "./Game/Characters/Heroes/EliteClasses/Ranger.js");

var _Ranger2 = _interopRequireDefault(_Ranger);

var _Rogue = __webpack_require__(/*! ./EliteClasses/Rogue */ "./Game/Characters/Heroes/EliteClasses/Rogue.js");

var _Rogue2 = _interopRequireDefault(_Rogue);

var _Warrior = __webpack_require__(/*! ./EliteClasses/Warrior */ "./Game/Characters/Heroes/EliteClasses/Warrior.js");

var _Warrior2 = _interopRequireDefault(_Warrior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Tommy = new Warrior("Tommy");
// const Timmy = new Cleric("Timmy");

// let warcry = Tommy.warcry()
// console.log(Tommy.stats)
// warcry.boost()
// console.log(Tommy.stats)


function Party() {
    return [_Cleric2.default, _Druid2.default, _Necromancer2.default, _Ranger2.default, _Rogue2.default, _Warrior2.default];
}
exports.default = Party;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Heroes = __webpack_require__(/*! ./Game/Characters/Heroes/Heroes */ "./Game/Characters/Heroes/Heroes.js");

var _Heroes2 = _interopRequireDefault(_Heroes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Partay = (0, _Heroes2.default)();
// const Timmy = new Partay[0]("Timmy");

// console.log(Timmy)
function startGame() {
    var list = document.createElement("ul");
    document.body.appendChild(list);
    for (var i = 0; i < Partay.length; i++) {
        var item = document.createElement("li");
        item.innerText = Partay[i].name;
        list.appendChild(item);
    }
}
module.exports = {
    startGame: startGame,
    party: Partay
};

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map