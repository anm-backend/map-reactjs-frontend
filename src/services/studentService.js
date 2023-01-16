import axios from "../utils/axios";

// export const fetchCount = (amount = 1) =>
//   new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));

export const postCreateStudent = (student = {}) =>
  axios.post(`/student`, student);

export const getListStudent = () => axios.get(`/student`);
export const getDetailStudent = (id = "") => axios.get(`/student/${id}`);

export const patchUpdateStudent = (id = "") => axios.patch(`/student/${id}`);
export const deleteDeleteStudent = (id = "") => axios.delete(`/student/${id}`);
