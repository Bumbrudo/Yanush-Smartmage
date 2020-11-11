require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function(
        $,
        modal
    ) {
        var options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            modalClass: 'modal-content newsletter',
            buttons: []
        };

        var popup = modal(options, $('#modal-content-newsletter'));

        $( document ).ready(function() {
            setTimeout(function(){ $('#modal-content-newsletter').modal('openModal'); }, 10000);
        });

    }
);