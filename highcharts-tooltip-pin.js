/**
 * Highcharts pin tooltip
 *
 * AUTHOR: Muhammad Umar Farooq
 */
'use strict';
(function (factory) {
	if (typeof module === 'object' && module.exports) {
		module.exports = factory;
	} else if (typeof define === 'function' && define.amd) {
		define(function () {
			return factory;
		});
	} else {
		factory(Highcharts);
	}
}(function (Highcharts) {
    (function (H) {

    H.Tooltip.prototype.pin = function () {
        this._hide = this.hide;
        this._move = this.move;
        this._refresh = this.refresh;
        this.hide = function () {};
        this.move = function () {};
        this.refresh = function () {};
    };
    H.Tooltip.prototype.unpin = function () {
        this.hide = this._hide;
        this.move = this._move;
        this.refresh = this._refresh;
    };

}(Highcharts));
	return (function () {


	}());
}));
