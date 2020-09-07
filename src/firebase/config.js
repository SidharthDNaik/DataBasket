import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBesASEkPbZK-KgmUEORCrnqaGdIAQYVCI',
  authDomain: 'databasket-b0ac0.firebaseapp.com',
  databaseURL: 'https://databasket-b0ac0.firebaseio.com/',
  projectId: 'databasket-b0ac0',
  storageBucket: 'databasket-b0ac0.appspot.com',
  messagingSenderId: '799196121119',
  appId: '1:799196121119:ios:95dbf9f4901861e3336d2a',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
