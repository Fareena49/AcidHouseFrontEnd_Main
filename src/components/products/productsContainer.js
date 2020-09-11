import React, { useState, useEffect } from "react";
import ProductsPresentation from "./productsPresentation";
import ProductDetails from "../productDetails/productDetails";
import CatAndSubcat from "../catAndSubcat/catAndSubcat";
import SizeQty from "../sizeQty/sizeQty";
import ProdDisImg from "../prodDisImg/prodDisImg";
import ProdSubImgs from "../prodSubImgs/prodSubImgs";
import { Container, Button, Typography } from "@material-ui/core";
import { addItem, getItems, deleteItem } from "../../modules/apiService";
import { useHistory } from "react-router-dom";
function getSteps() {
  return [
    "CATEGROY AND SUBCATEGORY",
    "AVAILABLE SIZES AND QUANTITY",
    "PRODUCT DETAILS",
    "DISPLAY IMAGE",
    "SUB IMAGES",
    "CONFIRM & SUBMIT",
  ];
}
const ProductsContainer = (props) => {
  const history = useHistory();
  const [showStepper, setShowStepper] = useState(false);
  const [fieldElements] = useState([
    { title: "Product Id", field: "itemId" },
    { title: "Name", field: "name" },
    { title: "Price", field: "price" },
    { title: "Total qty", field: "totalQty" },
    { title: "Main Category", field: "mainCategory" },
    { title: "Category", field: "category" },
    { title: "Best", field: "best" },
  ]);
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [sizeQtyArray, setSizeQtyArray] = useState([]);
  const [itemId, setItemId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [sex, setSex] = useState("");
  const [best, setBest] = useState(false);
  const [totalQty, setTotalQty] = useState(0);
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [fieldData, setFieldData] = useState([]);
  useEffect(() => {
    getItems().then((res) => {
      if (res.status === 200) {
        setFieldData(res.data.data);
      }
      if (res.status === 401 || res.status === 403) {
        sessionStorage.removeItem("token");
        props.setAuthentication();
        history.push("/");
      }
    });
  }, [itemAdded]);
  const submitProduct = () => {
    const formData = new FormData();
    formData.append("selectedCategory", selectedCategory);
    formData.append("selectedSubCategory", selectedSubCategory);
    formData.append("sizeQtyArray", JSON.stringify(sizeQtyArray));
    // sizeQtyArray.forEach((item) => {
    //   const obj = {
    //     id: item.id,
    //     name: item.name,
    //     qty: item.qty,
    //   };
    //   formData.append("sizeQtyArray", obj);
    // });
    formData.append("itemId", itemId);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("sex", sex);
    formData.append("best", best);
    formData.append("mainImage", mainImage);
    formData.append("totalQty", totalQty);
    subImages.forEach((image) => {
      formData.append("subImages", image);
    });

    addItem(formData).then((res) => {
      if (res.status === 200) {
        setSelectedCategory("");
        setSelectedSubCategory("");
        setSizeQtyArray([]);
        setItemId("");
        setName("");
        setPrice(0);
        setSex("");
        setBest(false);
        setTotalQty(0);
        setMainImage(null);
        setSubImages([]);
        setShowStepper(!showStepper);
        setActiveStep(0);
        setItemAdded(!itemAdded);
      }
      if (res.status === 401 || res.status === 403) {
        sessionStorage.removeItem("token");
        props.setAuthentication();
        history.push("/");
      }
    });
  };
  const getStepContent = (step) => {
    switch (step) {
      case 5:
        return (
          <Container maxWidth="xs" component="main">
            <Typography>Confirm and submit the entered product</Typography>
            <div>
              <Button
                className="buttnAct"
                onClick={() => handleBack()}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                className="buttnAct"
                onClick={() => submitProduct()}
                variant="outlined"
                color="secondary"
              >
                Submit
              </Button>
            </div>
          </Container>
        );
      case 4:
        return (
          <ProdSubImgs
            subImages={subImages}
            getSubImages={(files) => {
              setSubImages(files);
              handleNext();
            }}
            goBack={(e) => handleBack()}
          />
        );
      case 3:
        return (
          <ProdDisImg
            mainImage={mainImage}
            getImageFile={(file) => {
              setMainImage(file);
              handleNext();
            }}
            goBack={(e) => handleBack()}
          />
        );
      case 2:
        return (
          <ProductDetails
            itemId={itemId}
            name={name}
            price={price}
            sex={sex}
            best={best}
            totalQty={totalQty}
            goBack={(e) => handleBack()}
            getProductDetails={(itemId, name, price, sex, best) => {
              setItemId(itemId);
              setName(name);
              setPrice(price);
              setSex(sex);
              setBest(best);
              handleNext();
            }}
          />
        );
      case 1:
        return (
          <SizeQty
            sizeQtyArray={sizeQtyArray}
            getSizeQtyArray={async (array) => {
              setSizeQtyArray(array);
              let tempTotalQty = 0;
              // setTotalQty(0);
              await array.forEach((item) => {
                tempTotalQty += item.qty;
                setTotalQty(tempTotalQty);
              });
              handleNext();
            }}
            goBack={(e) => handleBack()}
          />
        );
      // return <Step2 onSelect={changeNoOfIoTDevices} value={noOfIoTDevices} />;
      case 0:
        return (
          <CatAndSubcat
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            getCatAndSubcat={(cat, subCat) => {
              setSelectedCategory(cat);
              setSelectedSubCategory(subCat);
              handleNext();
            }}
            goBack={(e) => handleBack()}
            setAuthentication={() => props.setAuthentication(false)}
          />
        );
      // return <Step3 onSelect={changePricePlan} value={pricePlan} />;

      default:
        return "Unknown step";
    }
  };

  const handleNext = () => {
    console.log(selectedSubCategory);
    console.log(selectedCategory);
    if (activeStep === steps.length - 1) {
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      getStepContent(activeStep);
    } else if (activeStep === 0) {
      setShowStepper(false);
    }
  };

  return (
    <ProductsPresentation
      showStepper={showStepper}
      setShowStepper={() => setShowStepper(!showStepper)}
      fieldData={fieldData}
      steps={steps}
      activeStep={activeStep}
      setActiveStep={(val) => setActiveStep(val)}
      getStepContent={(val) => getStepContent(val)}
      fieldElements={fieldElements}
      deleteItem={(id) =>
        deleteItem(id).then((data) => {
          setItemAdded(!itemAdded);
        })
      }
    />
  );
};

export default ProductsContainer;
