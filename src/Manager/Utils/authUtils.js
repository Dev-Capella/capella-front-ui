import Cookies from 'universal-cookie';
const cookies = new Cookies();

const handleLogin  = async (data) => {
    setToken(data.accessToken);
    setRefreshToken(data.refreshToken)
};

const setToken = async (token) => {
    cookies.set('token', token);
};

const getToken = async () => {
    return cookies.get('token');
};

const setRefreshToken = async (token) => {
    cookies.set('refreshToken', token);
};

const getRefreshToken = async () => {
    return cookies.get('refreshToken');
};
const exportFunction = {
    handleLogin,
    getToken,
    getRefreshToken
};

export default exportFunction;
