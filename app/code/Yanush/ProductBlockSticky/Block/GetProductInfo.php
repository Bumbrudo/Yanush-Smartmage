<?php

namespace Yanush\ProductBlockSticky\Block;

class GetProductInfo extends \Magento\Framework\View\Element\Template
{
    protected $_registry;
    /**
     * @var \Magento\Catalog\Helper\Image
     */
    private $imageHelper;

    public function __construct(
        \Magento\Backend\Block\Template\Context $context,
        \Magento\Framework\Registry $registry,
        \Magento\Catalog\Helper\Image $imageHelper,
        array $data = []
    )
    {
        $this->_registry = $registry;
        parent::__construct($context, $data);
        $this->imageHelper = $imageHelper;
    }

    public function getImage()
    {
        $product = $this->getCurrentProduct();
      return  $this->imageHelper->init($product, 'product_page_image_small')
            ->setImageFile($product->getImage())
            ->getUrl();

    }

    public function _prepareLayout()
    {
        return parent::_prepareLayout();
    }

    public function getCurrentProduct(): \Magento\Catalog\Model\Product
    {
        return $this->_registry->registry('current_product');
    }

}