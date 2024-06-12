import "./ProductDetails.scss";
import ProductCarousel from "./ProductCarousel";
import earbuds_01 from "../../assets/earbuds/earbuds_01.png";
import earbuds_02 from "../../assets/earbuds/earbuds_02.png";
import earbuds_03 from "../../assets/earbuds/earbuds_03.png";
import earbuds_04 from "../../assets/earbuds/earbuds_04.png";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <section class="section-view-device">
        <ProductCarousel productsImages={[earbuds_01, earbuds_02, earbuds_03, earbuds_04]} />
      </section>
      <section class="section-info-device">
        <ProductInfo name="Google Pixel Buds Pro" description="Music & Sound" price={229} />
      </section>
    </div>
  );
};

export default ProductDetails;
