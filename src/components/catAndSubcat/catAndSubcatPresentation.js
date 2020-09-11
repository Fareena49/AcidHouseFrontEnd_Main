import React from "react";
import "./catAndSubcat.css";
import {
  Select,
  Container,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
} from "@material-ui/core";
const CatAndSubcatPresentation = (props) => {
  console.log(props);
  return (
    <Container component="main" maxWidth="xs">
      <Box className="boxStyling">
        <FormControl fullWidth variant="outlined" className="selectStyling">
          <InputLabel id="demo-simple-select-autowidth-label">
            Category
          </InputLabel>
          <Select
            onChange={(e) => props.changeCatSelect(e.target.value)}
            labelId="demo-simple-select-autowidth-label"
            value={props.selectedCategory}
          >
            {props.categories?.map((cat, id) => {
              return (
                <MenuItem value={cat.categoryName} key={id}>
                  {cat.categoryName.toUpperCase()}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined" className="selectStyling">
          <InputLabel id="demo-simple-select-autowidth-labels">
            Sub-Category
          </InputLabel>
          <Select
            onChange={(e) => props.setSelectedSubCategory(e.target.value)}
            labelId="demo-simple-select-autowidth-labels"
            value={props.selectedSubCategory}
          >
            {props.subCategories.map((cat, id) => {
              return (
                <MenuItem value={cat.name} key={id}>
                  {cat.name.toUpperCase()}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
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
          onClick={() => props.sendCatAndSubcat()}
          variant="outlined"
          color="secondary"
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default CatAndSubcatPresentation;
