import axiosInstance from "../../Middleware/jwtInterceptor";

const loginUser = async (user) => {
  var { data } = await axiosInstance.post("api/login", { ...user });
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

const exportFunction = {
  loginUser,
  createregisterrequest,
  verifyEmail,
};

export default exportFunction;
