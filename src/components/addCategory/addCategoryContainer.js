import React, { useState, useEffect } from "react";
import AddCategoryPresentation from "./addCategoryPresentation";
import {
  addCategory,
  addSubCategory,
  editCategory,
  editSubCategory
} from "../../modules/apiService";
const AddCategoryContainer = (props) => {
  const [name, setName] = useState("");
  const [iconName, setIconName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (props.editSubCategory) {
      setName(props.editSubCategory.name);
      setImageUrl(props.editSubCategory.displayImg);
    } else if (props.catString === "main" && props.editCategory) {
      setName(props.editCategory.categoryName);
      setIconName(props.editCategory.sideIcon);
      setImageUrl(props.editCategory.displayImg);
    }
  }, []);
  const fileSelectHandler = (e) => {
    console.log(e.target.files[0]);
    setImageFile(e.target.files[0]);
    var reader = new FileReader();

    reader.onload = function (e) {
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const sendData = () => {
    const formData = new FormData();
    if (props.catString === "main" && !props.editCategory) {
      // const formData = new FormData();
      formData.append("name", name);
      formData.append("iconName", iconName);
      formData.append("image", imageFile);
      addCategory(formData).then((data) => {
        props.onSubmit();
      });
    }
    if (props.catString === "sub" && !props.editSubCategory) {
      // const formData = new FormData();
      formData.append("name", name);
      formData.append("image", imageFile);
      formData.append("id", props.editCategory.id);
      addSubCategory(formData).then((data) => {
        props.onSubmit();
      });
    }
    if (props.catString === "main" && props.editCategory) {
      formData.append("name", name);
      formData.append("iconName", iconName);
      formData.append("id", props.editCategory.id);
      if (imageFile && imageUrl !== props.editCategory.displayImg) {
        formData.append("image", imageFile);
        formData.append("imageEdited", "true");
      } else {
        formData.append("imageEdited", "false");
      }

      editCategory(formData).then((data) => {
        props.onSubmit();
      });
    }
    if (props.catString === "sub" && props.editSubCategory) {
      formData.append("name", name);
      formData.append("catId", props.editCategory.id);
      formData.append("subCatId", props.editSubCategory.id);
      if (imageFile && imageUrl !== props.editSubCategory.displayImg) {
        formData.append("image", imageFile);
        formData.append("imageEdited", "true");
      } else {
        formData.append("imageEdited", "false");
      }
      editSubCategory(formData).then((data) => {
        props.onSubmit();
      });
    }
  };
  return (
    <AddCategoryPresentation
      open={props.open}
      handleClose={() => props.onClose()}
      catString={props.catString}
      editCategory={props.editCategory}
      editSubCategory={props.editSubCategory}
      name={name}
      iconName={iconName}
      imageUrl={imageUrl}
      setName={(val) => setName(val)}
      setIconName={(val) => setIconName(val)}
      fileSelectHandler={fileSelectHandler}
      submit={sendData}
    />
  );
};

export default AddCategoryContainer;
