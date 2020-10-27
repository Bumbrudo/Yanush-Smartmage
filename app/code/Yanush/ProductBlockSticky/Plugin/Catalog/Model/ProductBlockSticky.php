<?php

namespace Yanush\ProductBlockSticky\Plugin\Catalog\Model;

class ProductBlockSticky
{
    public function afterGetName(\Magento\Catalog\Model\Product $subject, $result)
    {
        $title = $result." - ".$subject->getSku();
        return $title;
    }
}

