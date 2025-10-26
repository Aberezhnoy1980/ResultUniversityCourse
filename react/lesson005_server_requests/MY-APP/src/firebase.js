import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { checkEnvVars, REQUIRED_ENV_VARS } from './utils';

checkEnvVars(REQUIRED_ENV_VARS);

const {
	VITE_API_KEY: apiKey,
	VITE_AUTH_DOMAIN: authDomain,
	VITE_PROJECT_ID: projectId,
	VITE_STORAGE_BUCKET: storageBucket,
	VITE_MESSAGING_SENDER_ID: messagingSenderId,
	VITE_APP_ID: appId,
	VITE_DATABASE_URL: databaseURL,
} = import.meta.env;

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	databaseURL,
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
