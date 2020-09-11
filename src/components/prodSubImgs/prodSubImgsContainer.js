import React, { useState, useEffect } from "react";
import ProdSubImgsPresentation from "./prodSubImgsPresentation";
const ProdSubImgsContainer = (props) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState(["", "", "", "", "", ""]);
  useEffect(() => {
    if (props.subImages.length > 0) {
      setImageFiles(props.subImages);

      props.subImages.forEach((element, index) => {
        var reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = (e) => {
          const tempUrls = [...imageUrls];
          tempUrls[index] = e.target.result;
          setImageUrls(tempUrls);
        };
      });
    }
  }, []);
  const fileSelectHandler = (e, index) => {
    console.log(e);
    console.log(index);
    const tempArray = [...imageFiles];
    // tempArray[index].id = Date.now();
    tempArray[index] = e.target.files[0];
    setImageFiles(tempArray);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      const tempUrls = [...imageUrls];
      tempUrls[index] = e.target.result;
      setImageUrls(tempUrls);
    };
  };

  const sendSubImages = () => {
    if (imageFiles.length > 2) {
      props.getSubImages(imageFiles);
    }
  };
  return (
    <ProdSubImgsPresentation
      imageUrls={imageUrls}
      handleBack={() => props.goBack()}
      fileSelectHandler={(e, i) => fileSelectHandler(e, i)}
      sendSubImages={sendSubImages}
    />
  );
};

export default ProdSubImgsContainer;
