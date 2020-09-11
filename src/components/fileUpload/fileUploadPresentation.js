import React from "react";
import "./fileUpload.css"
const FileUploadPresentation = (props) => {
  return (
    <div className="container">
      <h3>React File Upload</h3>
      <hr />
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-md-4 offset-md-4">
          <form  onSubmit={(e) => props.onSubmit(e)}>
            <div className="form-group">
              <input type="file" onChange={(e) => props.onFileChange(e)} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPresentation;
