import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
  Avatar,
  TextField,
  Container,
  Badge,
} from "@material-ui/core";
import "./addCategory.css";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
const AddCategoryPresentation = (props) => {
  const upload = () => {
    document.getElementById("selectImage").click();
  };
  return (
    <Dialog open={props.open} onClose={() => props.handleClose()} fullWidth>
      {props.catString === "main" && props.editCategory ? (
        <DialogTitle id="form-dialog-title">Edit Category</DialogTitle>
      ) : props.catString === "main" && !props.editCategory ? (
        <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
      ) : props.catString === "sub" && !props.editSubCategory ? (
        <DialogTitle id="form-dialog-title">Add Sub-Category</DialogTitle>
      ) : (
        <DialogTitle id="form-dialog-title">Edit Sub-Category</DialogTitle>
      )}
      <DialogContent>
        <Container>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            label={
              props.catString === "main" ? "Category Name" : "Sub-Category Name"
            }
            onChange={(e) => {
              props.setName(e.target.value);
            }}
            value={props.name}
          />

          {props.catString === "main" ? (
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Icon Name"
              value={props.iconName}
              onChange={(e) => {
                props.setIconName(e.target.value);
              }}
            />
          ) : null}
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
        </Container>
        <input
          id="selectImage"
          hidden
          type="file"
          onChange={(e) => props.fileSelectHandler(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => props.handleClose()}>
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => props.submit()}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryPresentation;
