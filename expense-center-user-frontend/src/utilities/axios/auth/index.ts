import axios from 'axios';
import { databaseURL } from 'src/environments/environment';

export const authInstance = axios.create({
  baseURL: databaseURL,
});
