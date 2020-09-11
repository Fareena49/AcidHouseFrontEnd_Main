import React, { useState, useEffect } from "react";
import SizeQtyPresentation from "./sizeQtyPresentation";
const SizeQtyContainer = (props) => {
  const [sizeQtyArray, setSizeQtyArray] = useState([]);
  const [sizeName, setSizeName] = useState("");
  const [sizeQty, setSizeQty] = useState(0);
  useEffect(() => {
    if (props.sizeQtyArray.length > 0) {
      setSizeQtyArray(props.sizeQtyArray);
    }
  }, []);
  const deleteSizeQtyArray = (id) => {
    const tempArray = [...sizeQtyArray];
    const index = tempArray.findIndex((item) => {
      return item.id === id;
    });
    tempArray.splice(index, 1);
    setSizeQtyArray(tempArray);
  };
  const addSizeQtyArray = () => {
    if (sizeName !== "" && sizeQty !== 0) {
      const index = sizeQtyArray.findIndex((item) => {
        return item.name === sizeName;
      });
      if (index < 0) {
        setSizeQtyArray((oldArray) => {
          return [
            ...oldArray,
            { id: Date.now(), name: sizeName, qty: sizeQty },
          ];
        });
        setSizeName("");
        setSizeQty(0);
      } else {
        alert("Size Ecist");
      }
    }
  };
  const sendSizeQty = () => {
    if (sizeQtyArray.length > 0) {
      props.getSizeQtyArray(sizeQtyArray);
    }
  };
  return (
    <SizeQtyPresentation
      addSizeQtyArray={addSizeQtyArray}
      deleteSizeQtyArray={deleteSizeQtyArray}
      sizeQtyArray={sizeQtyArray}
      sizeName={sizeName}
      sizeQty={sizeQty}
      setSizeName={(val) => setSizeName(val.toUpperCase())}
      setSizeQty={(val) => setSizeQty(+val)}
      sendSizeQty={sendSizeQty}
      handleBack={() => props.goBack()}
    />
  );
};

export default SizeQtyContainer;
