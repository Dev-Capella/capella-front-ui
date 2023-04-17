import axiosInstance from '../../Middleware/jwtInterceptor'

const loginUser = async (user) => {
  var { data } = await axiosInstance.post('login', { ...user })
  return data
}

const createregisterrequest = async (data) => {
  var { data } = await axiosInstance.post('createregisterrequest', { ...data })
  return data
}
const verifyEmail = async (data) => {
  var { data } = await axiosInstance.post('verify-email', { ...data })
  return data
}

const registerUser = async (user, userId) => {
  var { data } = await axiosInstance.post(`register/${userId}`, { ...user })
  return data
}
const passwordReset = async (data) => {
  var { data } = await axiosInstance.post('password-reset', { ...data })
  return data
}
const verifyResetPassword = async (data) => {
  var { data } = await axiosInstance.post('verify-reset-password', { ...data })
  return data
}
const updatePassword = async (data) => {
  var { data } = await axiosInstance.post('update-password', { ...data })
  return data
}
const exportFunction = {
  loginUser,
  createregisterrequest,
  verifyEmail,
  registerUser,
  passwordReset,
  verifyResetPassword,
  updatePassword,
}

export default exportFunction
