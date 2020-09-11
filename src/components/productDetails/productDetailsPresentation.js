import React from "react";
import {
  Container,
  TextField,
  Button,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
} from "@material-ui/core";
import "./productDetails.css";
const ProductDetailsPresentation = (props) => {
  return (
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Product ID"
          onChange={(e) => props.setItemId(e.target.value)}
          required
          value={props.itemId}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Product Name"
          onChange={(e) => props.setName(e.target.value)}
          required
          value={props.name}
        />
        <TextField
          type="number"
          fullWidth
          variant="outlined"
          margin="normal"
          label="Price"
          onChange={(e) => props.setPrice(e.target.value)}
          required
          value={props.price}
        />
        <FormControl fullWidth variant="outlined" className="selectStyling">
          <InputLabel id="demo-simple-select-autowidth-labels-sex">
            Sex
          </InputLabel>
          <Select
            onChange={(e) => props.setSex(e.target.value)}
            labelId="demo-simple-select-autowidth-labels-sex"
            value={props.sex}
          >
            {["MALE", "FEMALE", "UNISEX"].map((cat, id) => {
              return (
                <MenuItem value={cat} key={id}>
                  {cat}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Switch
              checked={props.best}
              onChange={(e) => {
                console.log(e);
                props.setBest(e.target.value);
              }}
            />
          }
          label="BEST"
          labelPlacement="bottom"
        />

        <TextField
          type="number"
          fullWidth
          variant="outlined"
          margin="normal"
          label="Total Quantity"
          disabled
          required
          value={props.totalQty}
        />
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
          onClick={() => props.sendProductDetails()}
          variant="outlined"
          color="secondary"
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default ProductDetailsPresentation;
