import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewPreview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        {/* to will add to current route */}
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
