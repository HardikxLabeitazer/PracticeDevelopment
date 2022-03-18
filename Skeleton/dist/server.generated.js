module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\r\n    env: \"development\" || false,\r\n    port: process.env.PORT || 3000,\r\n    jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\r\n    mongoUri: process.env.MONGODB_URI ||\r\n      process.env.MONGO_HOST ||\r\n      'mongodb://' + (process.env.IP || 'localhost') + ':' +\r\n      (process.env.MONGO_PORT || '27017') +\r\n      '/mernproject'\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controller/auth.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/auth.controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst signin = async (req,res)=>{\r\n    try {\r\n        let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\"email\":req.body.email})\r\n        if(!user){\r\n            return res.status('401').json({error:\"User not found\"})\r\n\r\n        }\r\n        if(!user.authenticate(req.body.password)){\r\n            return res.status('401').send({error:\"Email and password don't match.\"})\r\n        }\r\n\r\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({_id:user._id},_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret)\r\n        res.cookie(\"t\",token,{expire:new Date() + 9999})\r\n\r\n        return res.json({\r\n            token,\r\n            user:{\r\n                _id:user._id,\r\n                name:user.name,\r\n                email:user.email\r\n            }\r\n        })\r\n    }catch(err){\r\n        return res.status(401).json({error:\"Could not sign in\"})\r\n    }\r\n}\r\nconst signout =(req,res)=>{\r\n    res.clearCookie(\"t\");\r\n    return res.status('200').json({\r\n        message:\"signed out\"\r\n    })\r\n}\r\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\r\n    secret:_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\r\n    userProperty:'auth',\r\n    algorithms:['RS256','sha1','HS256']\r\n})\r\n\r\nconst hasAuthorization =(req,res,next)=>{\r\n\r\n    const authorized = req.profile && req.auth && req.profile._id == req.auth._id\r\n    if(!(authorized)){\r\n        return res.status('403').json({\r\n            error:\"User is not authorized\"\r\n        })  \r\n         \r\n    }\r\n            next()  \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({signin,signout,requireSignin,hasAuthorization});\n\n//# sourceURL=webpack:///./server/controller/auth.controller.js?");

/***/ }),

/***/ "./server/controller/user.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/user.controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\r\n\r\n\r\n\r\nconst create =async (req,res)=>{\r\n    const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body)\r\n    try{\r\n        await user.save();\r\n        return res.status(200).json({\r\n            message:\"Successfully signed up!\"\r\n        })\r\n    }catch(err){\r\n        return res.status(400).json({\r\n            error:_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\r\n        })\r\n    }\r\n}\r\nconst list =async (req,res)=>{\r\n    try{\r\n        let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\r\n        res.json(users)\r\n    }catch(err){\r\n        return res.status(400).json({\r\n            error:_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\r\n        })\r\n    }\r\n}\r\nconst userByID = async (req,res,next,id)=>{\r\n\r\n    try{\r\n        let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id)\r\n        if(!user){\r\n            return res.status('400').json({\r\n                error:\"User not found\"\r\n            })\r\n        }\r\n\r\n        req.profile = user;\r\n        next();\r\n    }catch(err){\r\n        return res.status('400').json({\r\n            error:\"Could not retrieve user\"\r\n        })\r\n    }\r\n}\r\nconst read =(req,res)=>{\r\n    req.profile.hashed_password = undefined;\r\n    req.profile.salt = undefined;\r\n    return res.json(req.profile)\r\n}\r\nconst update = async (req,res)=>{\r\n\r\n    try{\r\n        let user = req.profile;\r\n        user = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])(user,req.body);\r\n        user.updated = Date.now();\r\n        await user.save()\r\n        user.hashed_password = undefined;\r\n        user.salt = undefined;\r\n        res.json(user)\r\n    }catch(err){\r\n        return res.status(400).json({\r\n            error:_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\r\n        })\r\n    }\r\n}\r\nconst remove = async (req,res)=>{\r\n    try{\r\n        let user = req.profile;\r\n        let deletedUser  =await user.remove();\r\n        deletedUser.hashed_password = undefined;\r\n        deletedUser.salt = undefined;\r\n        res.json(deletedUser)\r\n    }catch(err){\r\n        return res.status(400).json({\r\n            error:_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({create,userByID,read,list,remove,update});\n\n//# sourceURL=webpack:///./server/controller/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.js */ \"./config/config.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n function compile(app){\r\n    if(_config_config_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].env === \"development\"){\r\n        const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\r\n        const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler,{\r\n            publicPath:_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\r\n        })\r\n        app.use(middleware);\r\n        app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default.a)\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({compile});\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\n_devBundle__WEBPACK_IMPORTED_MODULE_9__[\"default\"].compile(app);\r\n\r\n\r\n\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json())\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({extended:true}));\r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\r\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\r\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\r\napp.get('/',(req,res)=>{\r\n    res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\r\n})\r\n\r\n\r\n\r\napp.use('/',_routes_user_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\napp.use('/',_routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\napp.use((err,req,res,next)=>{\r\n    if(err.name==='UnauthorizedError'){\r\n        res.status(401).json({\"error\":err.name + \": \" + err.message})\r\n    }\r\n    else if(err){\r\n        res.status(400).json({\"error\":err.name + \": \"+err.message})\r\n        console.log(err)\r\n    }\r\n})\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getUniqueErrorMessage=(err)=>{\r\n    let output\r\n    try{\r\n        let fieldName=err.message.substring(err.message.lastIndexOf('.$')+2,err.message.lastIndexOf('_1'))\r\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) +'already exists'\r\n\r\n    }catch(ex){\r\n        output = 'Uniqu field already exists'\r\n    }\r\n    return output\r\n}\r\n\r\nconst getErrorMessage =(err)=>{\r\n    let message ='';\r\n    if(err.code){\r\n        switch(err.code){\r\n            case 11000:\r\n            case 11001:\r\n                message=getUniqueErrorMessage(err);\r\n                break;\r\n            default:\r\n                message='Something Went Wrong'\r\n        }\r\n    }\r\n    else{\r\n        for(let errName in err.errors){\r\n            if(err.errors[errName].message)\r\n            message = err.errors[errName].message //error\r\n        }\r\n    }\r\n    return message\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({getErrorMessage});\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n\r\n    name:{\r\n        type:String,\r\n        trim:true,\r\n        required:'Name is required'\r\n    },\r\n    email:{\r\n        type:String,\r\n        trim:true,\r\n        unique:'Email already exists',\r\n        match:[/.+\\@.+\\..+/,'Please fill a valid email address'],\r\n        required:'Email is required'\r\n    },\r\n    created:{\r\n        type:Date,\r\n        default:Date.now\r\n    },\r\n    updated:Date,\r\n    hashed_password:{\r\n        type:String,\r\n        required:\"Password is easy\"\r\n    },\r\n    salt:String,\r\n\r\n});\r\n\r\n//password\r\nUserSchema\r\n    .virtual('password')\r\n    .set(function(password){\r\n        this._password = password;\r\n        this.salt = this.makeSalt();\r\n        this.hashed_password = this.encryptPassword(password)\r\n    })\r\n    .get(function(){\r\n        return this._password\r\n    })\r\nUserSchema.methods ={\r\n    authenticate :function(plainText){\r\n        return this.encryptPassword(plainText)===this.hashed_password\r\n    },\r\n    encryptPassword:function(password){\r\n        if(!password)return ''\r\n        try{\r\n            return crypto__WEBPACK_IMPORTED_MODULE_1___default.a\r\n                .createHmac('sha1',this.salt)\r\n                .update(password)\r\n                .digest('hex')\r\n        }catch(err){\r\n            return ''\r\n        }\r\n    },\r\n    makeSalt:function(){\r\n        return Math.round((new Date().valueOf()*Math.random())) + ''\r\n    }\r\n}\r\nUserSchema.path('hashed_password').validate(function(v){\r\n    if(this._password && this._password.length <6){\r\n        this.invalidate('password','Password must be at least 6 characters.')\r\n    }\r\n    if(this.isNew && !this._password){\r\n        this.invalidate('password','Password is required')\r\n    }\r\n},null)\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User',UserSchema));\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/auth.controller */ \"./server/controller/auth.controller.js\");\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\r\nrouter.route('/auth/signin')\r\n    .post(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin)\r\nrouter.route('/auth/signout')\r\n    .get(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout)\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/user.controller */ \"./server/controller/user.controller.js\");\n/* harmony import */ var _controller_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/auth.controller */ \"./server/controller/auth.controller.js\");\n// import express from 'express'\r\n// import { Router } from 'express'\r\n// import userCtrl from '../controller/user.controller'\r\n// import authCtrl from '../controller/auth.controller';\r\n\r\n// const router = express.Router()\r\n\r\n// router.route('/api/users')\r\n// .get(userCtrl.list)\r\n// .post(userCtrl.create)\r\n\r\n// // router.route('/api/users/:userId')\r\n// // .get(userCtrl.read)\r\n// // .put(userCtrl.update)\r\n// // .delete(userCtrl.remove)\r\n\r\n// router.route('/api/users/:userId')\r\n// .get(authCtrl.requireSignin,userCtrl.read)\r\n// .put(authCtrl.requireSignin,authCtrl.hasAuthorization,userCtrl.update)\r\n// .delete(authCtrl.requireSignin,authCtrl.hasAuthorization,userCtrl.remove)\r\n// router.param('userId',userCtrl.userByID)\r\n\r\n\r\n\r\n// export default router\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()\r\n\r\nrouter.route('/api/users')\r\n  .get(_controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list)\r\n  .post(_controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create)\r\n\r\nrouter.route('/api/users/:userId')\r\n  .get(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read)\r\n  .put(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controller_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update)\r\n  .delete(_controller_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controller_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove)\r\n\r\nrouter.param('userId', _controller_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID)\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n// Connection URL\r\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise\r\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })\r\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\r\n    console.error(\"Connection Unsuccessful\");\r\n})\r\n\r\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, (err) => {\r\n  if (err) {\r\n    console.log(err)\r\n  }\r\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port)\r\n})\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (()=>{\r\n    return `<!doctype html>\r\n    <html lang=\"en\">\r\n    <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>MERN Skeleton </title>\r\n    </head>\r\n    <body>\r\n    <div id=\"root\">Hello World</div>\r\n    </body>\r\n    </html>`\r\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\")\r\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\")\r\nconst CURRENT_WORKING_DIR = process.cwd()\r\n\r\nconst config = {\r\n    name: \"browser\",\r\n    mode: \"development\",\r\n    devtool: 'eval-source-map',\r\n    entry: [\r\n        'webpack-hot-middleware/client?reload=true',\r\n        path.join(CURRENT_WORKING_DIR, 'client/main.js')\r\n    ],\r\n    output: {\r\n        path: path.join(CURRENT_WORKING_DIR , '/dist'),\r\n        filename: 'bundle.js',\r\n        publicPath: '/dist/'\r\n    },\r\n    module: {\r\n        rules: [\r\n            {\r\n                test: /\\.jsx?$/,\r\n                exclude: /node_modules/,\r\n                use: [\r\n                    'babel-loader'\r\n                ]\r\n            },\r\n            {\r\n                test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\r\n                use: 'file-loader'\r\n            }\r\n        ]\r\n    },  \r\n    plugins: [\r\n          new webpack.HotModuleReplacementPlugin(),\r\n          new webpack.NoEmitOnErrorsPlugin()\r\n    ],\r\n    resolve: {\r\n        alias: {\r\n        //   'react-dom': '@hot-loader/react-dom'\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = config\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\hardi\\Desktop\\competitive\\Skeleton\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });