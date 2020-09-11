import React, { useState, useEffect } from "react";
import CatAndSubcatPresentation from "./catAndSubcatPresentation";
import { getCategories } from "../../modules/apiService";
import { useHistory } from "react-router-dom";
const CatAndSubcatContainer = (props) => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  useEffect(() => {
    setSelectedCategory(props.selectedCategory);
    setSelectedSubCategory(props.selectedSubCategory);
    getCategories().then((res) => {
      if (res.status === 200) {
        setCategories(res.data.data);
      }
      if (res.status === 401 || res.status === 403) {
        sessionStorage.removeItem("token");
        props.setAuthentication();
        history.push("/");
      }

      if (props.selectedSubCategory !== "") {
        const index = res.data.data.findIndex((cat) => {
          return cat.categoryName === props.selectedCategory;
        });
        setSubCategories(res.data.data[index].subCategories);
      }
    });
  }, []);
  const changeCatSelect = (val) => {
    setSelectedCategory(val);
    const index = categories.findIndex((cat) => {
      return cat.categoryName === val;
    });
    setSubCategories(categories[index].subCategories);
  };
  const sendCatAndSubcat = () => {
    if (selectedCategory !== "" && selectedSubCategory !== "") {
      props.getCatAndSubcat(selectedCategory, selectedSubCategory);
    }
  };
  return (
    <CatAndSubcatPresentation
      changeCatSelect={changeCatSelect}
      selectedCategory={selectedCategory}
      categories={categories}
      subCategories={subCategories}
      setSelectedSubCategory={(val) => setSelectedSubCategory(val)}
      selectedSubCategory={selectedSubCategory}
      sendCatAndSubcat={sendCatAndSubcat}
      handleBack={() => props.goBack()}
    />
  );
};

export default CatAndSubcatContainer;
