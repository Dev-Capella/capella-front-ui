import axiosInstance from "../../Middleware/jwtInterceptor";

const loginUser = async (user) => {
  var { data } = await axiosInstance.post("login", { ...user });
  return data;
};

const createregisterrequest = async (data) => {
  var { data } = await axiosInstance.post("createregisterrequest", { ...data });
  return data;
};
const verifyEmail = async (data) => {
  var { data } = await axiosInstance.post("verify-email", { ...data });
  return data;
};

const registerUser = async (user,userId) => {
  var { data } = await axiosInstance.post(`register/${userId}`, { ...user });
  return data;
};

const exportFunction = {
  loginUser,
  createregisterrequest,
  verifyEmail,
  registerUser
};

export default exportFunction;
