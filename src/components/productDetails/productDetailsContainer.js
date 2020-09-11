import React, { useState, useEffect } from "react";
import ProductDetailsPresentation from "./productDetailsPresentation";

const ProductDetailsContainer = (props) => {
  const [itemId, setItemId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [sex, setSex] = useState("");
  const [best, setBest] = useState(false);
  const [totalQty, setTotalQty] = useState(0);
  useEffect(() => {
    setItemId(props.itemId);
    setName(props.name);
    setPrice(props.price);
    setSex(props.sex);
    setBest(props.best);
    setTotalQty(props.totalQty);
  }, []);
  const sendProductDetails = () => {
    if (itemId !== "" && name !== "" && price !== 0 && sex !== "") {
      props.getProductDetails(itemId, name, +price, sex, best);
    }
  };
  return (
    <ProductDetailsPresentation
      itemId={itemId}
      name={name}
      price={price}
      sex={sex}
      best={best}
      totalQty={totalQty}
      setItemId={(val) => setItemId(val)}
      setName={(val) => setName(val)}
      setPrice={(val) => setPrice(+val)}
      setSex={(val) => setSex(val)}
      setBest={() => setBest(!best)}
      handleBack={() => props.goBack()}
      sendProductDetails={sendProductDetails}
    />
  );
};

export default ProductDetailsContainer;
