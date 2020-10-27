define([
    'jquery',
    'jquery/ui',
], function ($, _) {
    'use strict';

    $.widget('mage.maxheight',{

        _create: function() {

            var max = Math.max.apply(null, $(".product-item").map(function() {
                return $(this).height();
            }));
            $(".product-item").height(max);

        }

    });

    return $.mage.maxheight;

});