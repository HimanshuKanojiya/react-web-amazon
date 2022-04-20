interface FirebaseProvider {
  firebaseAuthCore: firebase.FirebaseApp;
}

interface IperformSignIn {
  userEmail: string;
  userPassword: string;
  firebaseAuth: Auth;
}

interface IperformSignOut {
  firebaseAuth: Auth;
}
