import React, { useState } from "react";
import FileUploadPresentation from "./fileUploadPresentation";
// import axios from "axios";
import { fileUpload } from "../../modules/apiService";
const FileUploadContainer = (props) => {
  const [image, setImage] = useState("");
  const onFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    console.log(image);
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    fileUpload(formData).then((data) => {
      console.log(data);
    });
    // axios
    //   .post("http://localhost:3001/api/user-profile", formData, {})
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
  return (
    <FileUploadPresentation onSubmit={onSubmit} onFileChange={onFileChange} />
  );
};

export default FileUploadContainer;
