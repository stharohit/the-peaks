import axios from 'axios';
import envVariables from 'src/constants/envVariables';

const defaultAxiosConfig = () => {
  axios.defaults.baseURL = envVariables.GUARDIAN_BASE_URL;
};

export default defaultAxiosConfig;
