import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCotegoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { setCaregories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  // how to use async function inside useEffect
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCotegoriesAndDocuments();
      console.log(categoriesArray);
      dispatch(setCaregories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
