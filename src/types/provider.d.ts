interface FirebaseProvider {
  firebaseAuthCore: firebase.FirebaseApp;
}

interface IperformSignIn {
  userEmail: string;
  userPassword: string;
  firebaseAuth?: Auth;
}

interface IperformAccountCreation {
  userName: string;
  userPassword: string;
  userEmail: string;
  userPassword: string;
  userMobileNumber: string;
  firebaseAuth?: Auth;
}

interface IperformSignOut {
  firebaseAuth: Auth;
}

interface IUseLocalStorageProvider {
  getDataFromLocalStorage: (key: string) => string | any;
  setDataToLocalStorage: (key: string, item: any) => void;
}
