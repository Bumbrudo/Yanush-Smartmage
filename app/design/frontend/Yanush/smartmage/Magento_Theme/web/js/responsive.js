/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'matchMedia',
    'mage/tabs',
    'domReady!responsive',
    'jquery-sticky'
], function ($, mediaCheck, sticky,) {
    'use strict';

    mediaCheck({
        media: '(min-width: 768px)',

        /**
         * Switch to Desktop Version.
         */
        entry: function () {
            $(".nav-sections").sticky({topSpacing:0});
            $(".product-options-bottom-wrap.sticky").sticky({topSpacing:54});

            $(".header.content").unstick();
        },

        /**
         * Switch to Mobile Version.
         */
        exit: function () {
            $(".nav-sections").unstick();
            $(".product-options-bottom-wrap.sticky").unstick();
            $(".header.content").sticky({topSpacing:0});
        }
    });
});
