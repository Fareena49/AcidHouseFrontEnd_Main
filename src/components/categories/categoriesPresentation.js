import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Container,
  Avatar,
  Grid,
  Button,
} from "@material-ui/core";
import "./categories.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import AddCategory from "../addCategory/addCategory";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  headPad: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  img: {
    verticalAlign: "middle",
    height: 100,
    width: 100,
  },
  details: {
    alignItems: "center",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
const CategoriesPresentation = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="description">
        <Typography variant="h6">CATEGORIES</Typography>
        <Typography variant="overline">
          Add new categories and subcategories
        </Typography>

        <Button
          className="addCategory"
          variant="outlined"
          color="secondary"
          onClick={() => props.handleDial("main")}
        >
          Add Category
        </Button>
      </div>

      <div className={classes.root}>
        <Container>
          {props.categories.map((cat) => {
            return (
              <ExpansionPanel key={cat._id} className={classes.headPad}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid item xs={4} className="grItem">
                      <Avatar className={classes.img} src={cat.displayImg} />
                    </Grid>
                    <Grid item xs={6} className="grItem">
                      <Typography className={classes.heading}>
                        {cat.categoryName.toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} className="grItem">
                      <EditTwoToneIcon
                        className="actionIcon"
                        onClick={() => props.handleDial("main", cat)}
                      />
                      {cat.subCategories.length === 0 ? (
                        <DeleteForeverTwoToneIcon
                          className="actionIcon"
                          onClick={() => props.deleteCat(cat)}
                        />
                      ) : null}
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <div className="addSubCategory">
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => props.handleDial("sub", cat)}
                    >
                      Add Sub-Category
                    </Button>
                  </div>
                  <Grid container>
                    {cat.subCategories.map((subcat) => {
                      return (
                        <React.Fragment key={subcat.name}>
                          <Grid item xs={4} className="grItem">
                            <Avatar
                              className={classes.img}
                              src={subcat.displayImg}
                            />
                          </Grid>
                          <Grid item xs={6} className="grItem">
                            <Typography
                              className={classes.headPad}
                              // primary={subcat.name.toUpperCase()}
                            >
                              {subcat.name.toUpperCase()}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} className="grItem">
                            <EditTwoToneIcon
                              className="actionIcon"
                              onClick={() =>
                                props.handleDial("sub", cat, subcat)
                              }
                            />
                            <DeleteForeverTwoToneIcon
                              className="actionIcon"
                              onClick={() => props.deleteSubCat(cat, subcat)}
                            />
                          </Grid>
                        </React.Fragment>
                      );
                    })}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </Container>
      </div>
      {props.openAddCategory ? (
        <AddCategory
          open={props.openAddCategory}
          onClose={() => props.handleDial()}
          onSubmit={() => {
            props.handleDial();
            props.setCategoryAdded();
          }}
          catString={props.catString}
          editCategory={props.editCategory}
          editSubCategory={props.editSubCategory}
        />
      ) : null}
    </>
  );
};

export default CategoriesPresentation;
