"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _settings = require("../../components/settings");

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
var checkAppElementIsSet = function checkAppElementIsSet() {};

if (process.env.NODE_ENV !== 'production') {
  checkAppElementIsSet = function checkAppElementIsSet() {
    var appElement = _settings2.default.getAppElement();
    /* eslint-disable max-len */


    (0, _warning2.default)(!!appElement, '[Design System React] App element is not defined. Please use Settings.setAppElement(el).' + ' By default, `Modal` will add `aria-hidden=true` to the `body` tag, but this disables some assistive technologies.' + ' To prevent this you can add Settings.setAppElement(el) to your application with `el` being the root node of your application' + ' that you would like to hide from assistive technologies when the `Modal` is open.');
  };
}

exports.default = checkAppElementIsSet;