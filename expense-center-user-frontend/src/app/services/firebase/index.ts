import { initializeApp } from 'firebase/app';
import { firebaseConfiguration } from 'src/environments/environment';

const firebaseConfig = firebaseConfiguration;

export const firebaseApp = initializeApp(firebaseConfig);
