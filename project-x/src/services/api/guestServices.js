import api from "src/utils/api";

export const indexGuests = async () => {
  return api.call("get", "/guests").then(({ data }) => {
    return data;
  });
};

export const getGuest = async (id) => {
  return api.call("get", `/guest/${id}`).then(({ data }) => {
    return data;
  });
};

export const storeGuest = async (form = {}) => {
  return api.call("post", "/guest/store", form).then(({ data }) => {
    return data;
  });
};

export const updateGuest = async (id, form = {}) => {
  return api.call("patch", `/guest/${id}`, form).then(({ data }) => {
    return data;
  });
};

export const destroyGuest = async (id) => {
  return api.call("delete", `/guest/${id}`).then(({ data }) => {
    return data;
  });
};
