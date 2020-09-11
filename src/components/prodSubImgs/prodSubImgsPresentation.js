import React from "react";
import "./prodSubImgs.css";
import { Container, Button, Badge, Avatar } from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
const ProdSubImgsPresentation = (props) => {
  const [index, setIndex] = React.useState(-1);
  const upload = () => {
    document.getElementById("selectImage").click();
  };
  const handleChange = (e) => {
    props.fileSelectHandler(e, index);
  };
  return (
    <Container className="qtySizeContnr" component="main" maxWidth="md">
      {props.imageUrls.map((item, ind) => {
        return (
          <Badge
            key={ind}
            onClick={() => {
              console.log(ind);
              setIndex(ind);
              upload();
            }}
            overlap="circle"
            variant="standard"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            badgeContent={<EditTwoToneIcon className="badgeIcon" />}
          >
            <Avatar className="subAvatar" src={item} />
          </Badge>
        );
      })}
      <input
        id="selectImage"
        hidden
        type="file"
        onChange={(e) => handleChange(e)}
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
          onClick={() => props.sendSubImages()}
          variant="outlined"
          color="secondary"
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default ProdSubImgsPresentation;
