import React from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@material-ui/core";
import MaterialTable from "material-table";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import "./products.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));
const ProductsPresentation = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="description">
        <Typography variant="h6">PRODUCTS</Typography>
        <Typography variant="overline">
          Add and View products in the store
        </Typography>
        {props.showStepper ? null : (
          <Button
            className="addCategory"
            variant="outlined"
            color="secondary"
            onClick={() => props.setShowStepper()}
          >
            Add Product
          </Button>
        )}
      </div>
      <div className="table">
        {props.showStepper ? (
          <div className={classes.root}>
            <CancelIcon
              className="closeStepper"
              onClick={() => {
                props.setActiveStep(0);
                props.setShowStepper();
              }}
            />
            <Stepper activeStep={props.activeStep} orientation="vertical">
              {props.steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{props.getStepContent(index)}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </div>
        ) : (
          <MaterialTable
            title="PRODUCTS"
            columns={props.fieldElements}
            data={props.fieldData}
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
            }}
            editable={{
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  resolve();
                  console.log(oldData);
                  props.deleteItem(oldData);
                }),
            }}
            actions={[
              {
                icon: () => {
                  return <MoreVertIcon />;
                },

                tooltip: "More Actions",
                onClick: (event, rowData) => {},
              },
            ]}
          />
        )}
      </div>
    </>
  );
};
export default ProductsPresentation;
