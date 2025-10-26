import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyADS0mdxlwjB1rIY0dwPCj5gO4P23LTBU8',
	authDomain: 'productsproject-a5018.firebaseapp.com',
	projectId: 'productsproject-a5018',
	storageBucket: 'productsproject-a5018.firebasestorage.app',
	messagingSenderId: '663856666917',
	appId: '1:663856666917:web:2196d3a466e121917d62cc',
	databaseURL:
		'https://productsproject-a5018-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
