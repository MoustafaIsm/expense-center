import { initializeApp } from 'firebase/app';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { firebaseConfiguration } from 'src/environments/environment';

const firebaseConfig = firebaseConfiguration;

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);

