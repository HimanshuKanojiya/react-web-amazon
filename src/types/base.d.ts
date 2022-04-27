interface IGetFireBaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

type IInitializeFirebaseApp = firebase.FirebaseApp;

interface IPerformSigUpUsingEmailPassword {
  userEmail: string;
  userPassword: string;
  firebaseAuth: Auth;
}

interface IPerformSignOut {
  FirebaseAuth: Auth;
}

interface IUseBrowserStorage {
  getLocalStorageItem: (key: string) => string | any;
  setLocalStorageItem: (key: string, item: any) => void;
}
