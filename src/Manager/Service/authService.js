import axiosInstance from '../../Middleware/jwtInterceptor'

const loginUser = async (user) => {
  var { data } = await axiosInstance.post('api/login', { ...user })
  return data
}

const exportFunction = {
  loginUser,
}

export default exportFunction
