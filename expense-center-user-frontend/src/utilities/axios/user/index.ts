import axios from 'axios';
import { databaseURL } from 'src/environments/environment';

export const userInstance = axios.create({
  baseURL: databaseURL,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});
