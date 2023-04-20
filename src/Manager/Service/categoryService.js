import axiosInstance from '../../Middleware/jwtInterceptor'

const getCategories = async () => {
  var { data } = await axiosInstance.get('categories')
  return data
}

const exportFunction = {
    getCategories
}

export default exportFunction
