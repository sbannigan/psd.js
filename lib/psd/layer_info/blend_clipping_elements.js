// Generated by CoffeeScript 1.11.1
(function() {
  var BlendClippingElements, LayerInfo,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  LayerInfo = require('../layer_info');

  module.exports = BlendClippingElements = (function(superClass) {
    extend(BlendClippingElements, superClass);

    function BlendClippingElements() {
      return BlendClippingElements.__super__.constructor.apply(this, arguments);
    }

    BlendClippingElements.shouldParse = function(key) {
      return key === 'clbl';
    };

    BlendClippingElements.prototype.parse = function() {
      this.enabled = this.file.readBoolean();
      return this.file.seek(3, true);
    };

    return BlendClippingElements;

  })(LayerInfo);

}).call(this);
