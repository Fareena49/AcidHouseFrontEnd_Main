import React, { useState, useEffect } from "react";
import CategoriesPresentation from "./categoriesPresentation";
import { getCategories } from "../../modules/apiService";
import { deleteSubCategory, deleteCategory } from "../../modules/apiService";
import { useHistory } from "react-router-dom";
const CategoriesContainer = (props) => {
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);
  const [catString, setCatString] = useState("");
  const [editCategory, setEditCategory] = useState({});
  const [editSubCategory, setEditSubCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoryAdded, setCategoryAdded] = useState(false);
  useEffect(() => {
    getCategories().then((res) => {
      if (res.status === 200) {
        setCategories(res.data.data);
      }
      if (res.status === 401 || res.status === 403) {
        sessionStorage.removeItem("token");
        props.setAuthentication();
        history.push("/");
      }
    });
  }, [categoryAdded]);
  const deleteSubCat = (cat, subcat) => {
    deleteSubCategory(cat.id, subcat.id, subcat.displayImg).then((data) => {
      setCategoryAdded(!categoryAdded);
    });
  };
  const deleteCat = (cat) => {
    deleteCategory(cat.id, cat.displayImg).then((data) => {
      setCategoryAdded(!categoryAdded);
    });
  };
  return (
    <CategoriesPresentation
      openAddCategory={openDialog}
      categories={categories}
      handleDial={(string, category, subcategory) => {
        category ? setEditCategory(category) : setEditCategory(undefined);
        subcategory
          ? setEditSubCategory(subcategory)
          : setEditSubCategory(undefined);
        setOpenDialog(!openDialog);
        if (string) {
          setCatString(string);
        }
      }}
      catString={catString}
      editCategory={editCategory}
      editSubCategory={editSubCategory}
      setCategoryAdded={() => {
        console.log("call effect again");
        setCategoryAdded(!categoryAdded);
      }}
      deleteSubCat={deleteSubCat}
      deleteCat={deleteCat}
    />
  );
};

export default CategoriesContainer;

// {
//     _id: "C1",
//     name: "Men",
//     sideIcon: "man",
//     displayImg:
//       "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/3/f/3front_1.jpg",
//     subCategories: [
//       {
//         name: "Jeans",
//         displayImg:
//           "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/6/0/602front.jpg",
//       },
//       {
//         name: "Shirts",
//         displayImg:
//           "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/6/0/602front.jpg",
//       },
//       {
//         name: "Shoes",
//         displayImg:
//           "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/6/0/602front.jpg",
//       },
//     ],
//   },
//   {
//     _id: "C2",
//     name: "Women",
//     displayImg:
//       "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/6/0/602front.jpg",
//     sideIcon: "woman",
//     collectionName: "WomenCollection",
//     subCategories: [],
//   },
//   {
//     _id: "C3",
//     name: "Accessories",
//     sideIcon: "glasses",
//     displayImg:
//       "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/3/f/3front_1.jpg",
//     collectionName: "AccessoriesCollection",
//     subCategories: [
//       {
//         name: "Rings",
//         displayImg:
//           "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/6/0/602front.jpg",
//       },
//       {
//         name: "Pendant",
//         displayImg:
//           "https://api.powerlook.in/pub/media/catalog/product/cache/a355f488ce208bb58a90660f35cdc6e0/6/0/602front.jpg",
//       },
//     ],
//   },
