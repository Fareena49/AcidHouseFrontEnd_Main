import React from "react";
import "./sizeQty.css";
import {
  List,
  Container,
  TextField,
  Button,
  Grid,
  ListItem,
  Divider,
} from "@material-ui/core";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
const SizeQtyPresentation = (props) => {
  console.log(props);
  return (
    <Container className="qtySizeContnr" component="main" maxWidth="sm">
      <List>
        {props.sizeQtyArray.map((item, index) => {
          return (
            <>
              <ListItem key={item.name}>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    Name: {item.name}
                  </Grid>
                  <Grid item xs={5}>
                    Quantity: {item.qty}
                  </Grid>
                  <Grid item xs={2}>
                    <DeleteForeverTwoToneIcon
                      onClick={() => props.deleteSizeQtyArray(item.id)}
                    />
                  </Grid>
                </Grid>
                {/* {item.name}:{item.qty} */}
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
      <div className="addSize">
        <TextField
          value={props.sizeName}
          margin="normal"
          variant="outlined"
          label="Size Name"
          onChange={(e) => props.setSizeName(e.target.value)}
        ></TextField>
        <TextField
          value={props.sizeQty}
          onChange={(e) => props.setSizeQty(e.target.value)}
          margin="normal"
          variant="outlined"
          label="Size Qty"
          type="number"
        ></TextField>
        <Button
          margin="normal"
          className="buttnAct"
          color="primary"
          onClick={() => props.addSizeQtyArray()}
          variant="outlined"
        >
          Add Size
        </Button>
      </div>
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
            onClick={() => props.sendSizeQty()}
          variant="outlined"
          color="secondary"
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default SizeQtyPresentation;
