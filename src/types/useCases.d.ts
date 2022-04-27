interface IUsePerformLoginUseCase {
  userEmail: string;
  userPassword: string;
  firebaseAuth?: Auth;
}

interface IUsePerformSignOutUseCase {
  firebaseAuth: Auth;
}

interface IUseGetFirebaseAuthUseCase {
  firebaseAuth: Auth;
}

type IUseGetAuthFromLocalUseCase = (key: string) => null | Auth;
