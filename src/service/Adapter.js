import Axios from 'axios';
import { ERROR_LOG } from '../components/Errors/ErrorMappings';


export const GET = (
      URL,
      data,
      headers
) =>
      Axios.get(URL, {
            data,
            headers
      });

export const POST = (
      URL,
      data,
      headers
) =>
      Axios.post(URL, data, {
            headers
      });


export const CALL = (
      method,
      url,
      headers
) => Axios({
      method,
      url,
      headers
})