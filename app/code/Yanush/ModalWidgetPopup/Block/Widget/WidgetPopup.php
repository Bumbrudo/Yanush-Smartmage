<?php
namespace Yanush\ModalWidgetPopup\Block\Widget;
class WidgetPopup extends \Magento\Framework\View\Element\Template
{
    public function getContent() : string
    {
        return "<p>" . 'sign up for exclusive offers' . "</p>";
    }
}