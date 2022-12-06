import axios from 'axios';
import defaultAxiosConfig from './defaultAxiosConfig';
import envVariables from 'src/constants/envVariables';

describe('test axios config', () => {
  defaultAxiosConfig();
  jest.mock('axios');

  it('should have default base url', () => {
    expect(axios.defaults.baseURL).not.toBeFalsy();
    expect(axios.defaults.baseURL).toEqual(envVariables.GUARDIAN_BASE_URL);
  });
});
