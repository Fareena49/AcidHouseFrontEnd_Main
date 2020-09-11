import React, { useState, useEffect } from "react";
import ProdDisImgPresentation from "./prodDisImgPresentation";
const ProdDisImgContainer = (props) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (props.mainImage) {
      setImageFile(props.mainImage);
      var reader = new FileReader();

      reader.onload = function (e) {
        setImageUrl(e.target.result);
      };

      reader.readAsDataURL(props.mainImage);
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
  const sendDisplayImage = () => {
    if (imageFile) {
      props.getImageFile(imageFile);
    }
  };
  return (
    <ProdDisImgPresentation
      imageUrl={imageUrl}
      handleBack={() => props.goBack()}
      fileSelectHandler={(e) => fileSelectHandler(e)}
      sendDisplayImage={sendDisplayImage}
    />
  );
};

export default ProdDisImgContainer;
