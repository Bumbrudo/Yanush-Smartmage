requirejs([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/gallery/gallery',
    'mage/translate',
    'domReady!responsive'

], function ($, modal, gallery, $t, mediaCheck) {
    'use strict';

    $( "#sticky-addtocart-button" ).click(function() {
        $( "#product-addtocart-button" ).trigger( "click" );
    });

});
