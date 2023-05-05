import axiosInstance from "../../Middleware/jwtInterceptor";

const getActiveBanners = async () => {
  var { data } = await axiosInstance.get("banners");
  return data;
};

const bannerService = {
  getActiveBanners,
};

export default bannerService;
