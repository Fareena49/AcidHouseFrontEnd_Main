import React from "react";
import "./prodDisImg.css";
import { Container, Button, Badge, Avatar } from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
const ProdDisImgPresentation = (props) => {
  const upload = () => {
    document.getElementById("selectImage").click();
  };
  return (
    <Container className="qtySizeContnr" component="main" maxWidth="sm">
      <Badge
        onClick={upload}
        overlap="circle"
        variant="standard"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        badgeContent={<EditTwoToneIcon className="badgeIcon" />}
      >
        <Avatar className="dialAvatar" src={props.imageUrl} />
      </Badge>
      <input
        id="selectImage"
        hidden
        type="file"
        onChange={(e) => props.fileSelectHandler(e)}
      />
      <div>
        <Button
          className="buttnAct"
          onClick={() => props.handleBack()}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          className="buttnAct"
          onClick={() => props.sendDisplayImage()}
          variant="outlined"
          color="secondary"
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default ProdDisImgPresentation;
