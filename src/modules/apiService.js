import axios from "axios";
const api_url = "http://localhost:3001/api/";
const getToken = () => {
  return sessionStorage.getItem("token");
};

export const fileUpload = (formData) => {
  return axios.post(api_url + "user-profile", formData, {});
};
export const adminLogin = (obj) => {
  return axios.put(api_url + "adminLogin", obj);
};
export const addCategory = (obj) => {
  return axios.post(api_url + "addCategory", obj);
};
export const editCategory = (obj) => {
  return axios.post(api_url + "editCategory", obj);
};

export const editSubCategory = (obj) => {
  return axios.post(api_url + "editSubCategory", obj);
};
export const addSubCategory = (obj) => {
  return axios.put(api_url + "addSubCategory", obj);
};
export const getCategories = async () => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;
  try {
    response = await axios.get(api_url + "getCategories", config);
  } catch (e) {
    response = e.response;
  } finally {
    return response;
  }
};

export const deleteSubCategory = (catid, subid, imgPath) => {
  return axios.put(api_url + "delSubCategory", {
    catId: catid,
    subId: subid,
    imgPath: imgPath,
  });
};
export const deleteCategory = (catid, imgPath) => {
  return axios.put(api_url + "delCategory", {
    catId: catid,
    imgPath: imgPath,
  });
};

export const getItems = async () => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;

  try {
    response = await axios.get(api_url + "getItems", config);
  } catch (e) {
    response = e.response;
  } finally {
    return response;
  }
};

export const addItem = async (formData) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;

  try {
    response = await axios.post(api_url + "addItem", formData, config);
    // response = await axios.get(api_url + "getItems", config);
  } catch (e) {
    response = e.response;
  } finally {
    return response;
  }
};

export const deleteItem = (obj) => {
  return axios.put(api_url + "delItem", {
    obj: obj,
  });
};
