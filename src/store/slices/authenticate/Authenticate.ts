import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, User } from "firebase/auth";
import { usePerformLoginUseCase } from "../../../service/useCases/authenticateUseCases/usePerformLoginUseCase";
import { useGetFirebaseAuthUseCase } from "../../../service/useCases/authenticateUseCases/useGetFirebaseAuthUseCase";

export const performSignInToFirebase = createAsyncThunk<
  { auth: Auth; userData: User },
  IperformSignIn
>(
  "authenticate/signIn",
  async ({ userEmail, userPassword }, { rejectWithValue }) => {
    try {
      const Auth = useGetFirebaseAuthUseCase();
      const user = await usePerformLoginUseCase({
        userEmail,
        userPassword,
        firebaseAuth: Auth,
      });
      return { auth: Auth, userData: user };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const Authenticate = createSlice({
  name: "authenticate",
  initialState: {
    loading: false,
    error: null,
    data: null,
    userAuth: null,
    isUserSignedIn: false,
    userEmail: "",
    userPassword: "",
    inputUIValidation: {
      isUserEmailValid: false,
      isPasswordValid: false,
    },
  } as IAuthenticateState,
  reducers: {
    addUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    addUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
    login: (state) => {
      state.isUserSignedIn = true;
    },
    logout: (state) => {
      state.isUserSignedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(performSignInToFirebase.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    });

    builder.addCase(performSignInToFirebase.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    });

    builder.addCase(performSignInToFirebase.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userAuth = action.payload.auth;
      state.data = action.payload.userData;
    });
  },
});

export const { login, logout, addUserEmail, addUserPassword } =
  Authenticate.actions;

export default Authenticate.reducer;
