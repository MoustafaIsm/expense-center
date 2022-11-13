import { initializeApp } from 'firebase/app';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { firebaseConfiguration } from 'src/environments/environment';

const firebaseConfig = firebaseConfiguration;

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);
// TODO: Remove this when deploying
if (location.hostname === 'localhost') {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(database, 'localhost', 9000);
}
