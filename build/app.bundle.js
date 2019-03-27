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
        this.items = [];
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
    }, {
        key: "attack",
        value: function attack(w) {
            if (w) {
                return w.damage + Math.floor(this.stats.str / 4);
            } else {
                return Math.floor(this.stats.str / 4);
            }
        }
    }, {
        key: "defend",
        value: function defend(a) {
            if (a) {
                return a.defense + this.stats.con / 4;
            } else {
                return this.stats.con / 4;
            }
        }
    }, {
        key: "hitOrMiss",
        value: function hitOrMiss(t) {
            var mod1 = Math.floor(Math.random() * 3);
            var mod2 = Math.floor(Math.random() * 3);
            var acc = this.stats.acc ? this.stats.acc + this.stats.dex : this.stats.dex;
            var eva = t.stats.eva ? this.stats.eva + this.stats.dex : this.stats.dex;
            var hit = acc + mod1 - (eva + mod2);
            if (hit > 0) {
                return true;
            } else {
                return false;
            }
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

        _this.stats.mp = 20;
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

/***/ "./Game/Characters/Heroes/EpicClasses/WhiteWizard.js":
/*!***********************************************************!*\
  !*** ./Game/Characters/Heroes/EpicClasses/WhiteWizard.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Cleric2 = __webpack_require__(/*! ../EliteClasses/Cleric */ "./Game/Characters/Heroes/EliteClasses/Cleric.js");

var _Cleric3 = _interopRequireDefault(_Cleric2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhiteWizard = function (_Cleric) {
    _inherits(WhiteWizard, _Cleric);

    function WhiteWizard(n) {
        _classCallCheck(this, WhiteWizard);

        return _possibleConstructorReturn(this, (WhiteWizard.__proto__ || Object.getPrototypeOf(WhiteWizard)).call(this, n));
    }

    return WhiteWizard;
}(_Cleric3.default);

exports.default = WhiteWizard;

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
exports.Epic = undefined;

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

var _WhiteWizard = __webpack_require__(/*! ./EpicClasses/WhiteWizard */ "./Game/Characters/Heroes/EpicClasses/WhiteWizard.js");

var _WhiteWizard2 = _interopRequireDefault(_WhiteWizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heroes = [_Cleric2.default, _Druid2.default, _Necromancer2.default, _Ranger2.default, _Rogue2.default, _Warrior2.default];
exports.default = Heroes;
var Epic = exports.Epic = [_WhiteWizard2.default];

/***/ }),

/***/ "./Game/Game.js":
/*!**********************!*\
  !*** ./Game/Game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Heroes = __webpack_require__(/*! ./Characters/Heroes/Heroes */ "./Game/Characters/Heroes/Heroes.js");

var _Heroes2 = _interopRequireDefault(_Heroes);

var _Items = __webpack_require__(/*! ./Items/Items */ "./Game/Items/Items.js");

var _Items2 = _interopRequireDefault(_Items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
    _classCallCheck(this, Game);

    this.heroes = _Heroes2.default, this.items = _Items2.default;
};

exports.default = Game;

/***/ }),

/***/ "./Game/Items/Defensive/Armor.js":
/*!***************************************!*\
  !*** ./Game/Items/Defensive/Armor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Armor = function Armor(name, type) {
    _classCallCheck(this, Armor);

    this.name = name, this.type = type, this.defense = 1;
};

exports.default = Armor;

/***/ }),

/***/ "./Game/Items/Defensive/Armors.js":
/*!****************************************!*\
  !*** ./Game/Items/Defensive/Armors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClothArmors = __webpack_require__(/*! ./ClothArmors/ClothArmors */ "./Game/Items/Defensive/ClothArmors/ClothArmors.js");

var _ClothArmors2 = _interopRequireDefault(_ClothArmors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Armors = [_ClothArmors2.default];

exports.default = Armors;

/***/ }),

/***/ "./Game/Items/Defensive/ClothArmors/ClothArmor.js":
/*!********************************************************!*\
  !*** ./Game/Items/Defensive/ClothArmors/ClothArmor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Armor2 = __webpack_require__(/*! ../Armor */ "./Game/Items/Defensive/Armor.js");

var _Armor3 = _interopRequireDefault(_Armor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClothArmor = function (_Armor) {
    _inherits(ClothArmor, _Armor);

    function ClothArmor(name, type) {
        _classCallCheck(this, ClothArmor);

        var _this = _possibleConstructorReturn(this, (ClothArmor.__proto__ || Object.getPrototypeOf(ClothArmor)).call(this, name, type));

        _this.defense = 3;
        return _this;
    }

    return ClothArmor;
}(_Armor3.default);

exports.default = ClothArmor;

/***/ }),

/***/ "./Game/Items/Defensive/ClothArmors/ClothArmors.js":
/*!*********************************************************!*\
  !*** ./Game/Items/Defensive/ClothArmors/ClothArmors.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClothArmor = __webpack_require__(/*! ./ClothArmor */ "./Game/Items/Defensive/ClothArmors/ClothArmor.js");

var _ClothArmor2 = _interopRequireDefault(_ClothArmor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClothArmors = [_ClothArmor2.default];

exports.default = ClothArmors;

/***/ }),

/***/ "./Game/Items/Items.js":
/*!*****************************!*\
  !*** ./Game/Items/Items.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Weapons = __webpack_require__(/*! ./Offensive/Weapons */ "./Game/Items/Offensive/Weapons.js");

var _Weapons2 = _interopRequireDefault(_Weapons);

var _Armors = __webpack_require__(/*! ./Defensive/Armors */ "./Game/Items/Defensive/Armors.js");

var _Armors2 = _interopRequireDefault(_Armors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Items = [_Weapons2.default, _Armors2.default];

exports.default = Items;

/***/ }),

/***/ "./Game/Items/Offensive/Swords/Sword.js":
/*!**********************************************!*\
  !*** ./Game/Items/Offensive/Swords/Sword.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Weapon2 = __webpack_require__(/*! ../Weapon */ "./Game/Items/Offensive/Weapon.js");

var _Weapon3 = _interopRequireDefault(_Weapon2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sword = function (_Weapon) {
    _inherits(Sword, _Weapon);

    function Sword(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "slashing";

        _classCallCheck(this, Sword);

        var _this = _possibleConstructorReturn(this, (Sword.__proto__ || Object.getPrototypeOf(Sword)).call(this, n, t));

        console.log(_this);
        return _this;
    }

    return Sword;
}(_Weapon3.default);

exports.default = Sword;

/***/ }),

/***/ "./Game/Items/Offensive/Swords/Swords.js":
/*!***********************************************!*\
  !*** ./Game/Items/Offensive/Swords/Swords.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sword = __webpack_require__(/*! ./Sword */ "./Game/Items/Offensive/Swords/Sword.js");

var _Sword2 = _interopRequireDefault(_Sword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swords = [_Sword2.default];

exports.default = Swords;

/***/ }),

/***/ "./Game/Items/Offensive/Weapon.js":
/*!****************************************!*\
  !*** ./Game/Items/Offensive/Weapon.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weapon = function Weapon(name, type) {
    _classCallCheck(this, Weapon);

    this.name = name, this.type = type, this.dmg = 1;
};

exports.default = Weapon;

/***/ }),

/***/ "./Game/Items/Offensive/Weapons.js":
/*!*****************************************!*\
  !*** ./Game/Items/Offensive/Weapons.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Swords = __webpack_require__(/*! ./Swords/Swords */ "./Game/Items/Offensive/Swords/Swords.js");

var _Swords2 = _interopRequireDefault(_Swords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weapons = [_Swords2.default];

exports.default = Weapons;

/***/ }),

/***/ "./Game/helpers/buildList.js":
/*!***********************************!*\
  !*** ./Game/helpers/buildList.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _showAbilities = __webpack_require__(/*! ./showAbilities */ "./Game/helpers/showAbilities.js");

var _showAbilities2 = _interopRequireDefault(_showAbilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildList(arr, t) {
    console.log(t);
    var target = document.getElementById(t);
    var list = document.createElement("ul");
    target.appendChild(list);
    for (var i = 0; i < arr.length; i++) {
        var item = document.createElement("li");
        item.innerText = arr[i].name;
        item.id = arr[i].name;
        item.addEventListener('click', _showAbilities2.default);
        list.appendChild(item);
    }
}

exports.default = buildList;

/***/ }),

/***/ "./Game/helpers/buildParty.js":
/*!************************************!*\
  !*** ./Game/helpers/buildParty.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var buildParty = {
    party: [],
    addPlayer: function addPlayer(p) {
        this.party.push(p);
    }
};

exports.default = buildParty;

/***/ }),

/***/ "./Game/helpers/showAbilities.js":
/*!***************************************!*\
  !*** ./Game/helpers/showAbilities.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function showAbilities(player) {
    console.log(player.target.id);
    // let div = document.getElementById("abilities")
}
exports.default = showAbilities;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./Game/Game */ "./Game/Game.js");

var _Game2 = _interopRequireDefault(_Game);

var _buildList = __webpack_require__(/*! ./Game/helpers/buildList */ "./Game/helpers/buildList.js");

var _buildList2 = _interopRequireDefault(_buildList);

var _buildParty = __webpack_require__(/*! ./Game/helpers/buildParty */ "./Game/helpers/buildParty.js");

var _buildParty2 = _interopRequireDefault(_buildParty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();
var helpers = {
    buildList: _buildList2.default,
    buildParty: _buildParty2.default
};

function startGame() {
    helpers.buildList(game.heroes, "newplayer");
}
module.exports = {
    helpers: helpers,
    startGame: startGame
};

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map