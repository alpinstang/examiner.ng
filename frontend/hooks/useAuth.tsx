import { auth, db } from "../config/firebase";
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { Notify } from "notiflix";

const authContext = createContext({ user: null });

const { Provider } = authContext;

interface SignUpData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider();
  return <Provider value={auth}>{props.children}</Provider>;
}
export const useAuth: any = () => {
  return useContext(authContext);
};

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
  const [user, setUser]: any = useState(null);

  const createUser = (user: any) => {
    console.log(user);
    user.phone = user.phone.value;
    return db
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then(() => {
        Notify.Success("User information saved.");
        setUser(user);
        return user;
      })
      .catch((error) => {
        Notify.Failure("Error writing user to database. " + error.message);
        return { error };
      });
  };

  const signIn = ({ email, password }: SignInData) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response: any) => {
        setUser(response.user);
        getUserAdditionalData(user);
        Notify.Success("Signed in successfully.");
        return response.user;
      })
      .catch((error) => {
        Notify.Failure("Something went wrong! " + error.message);
        return { error };
      });
  };

  const signUp = ({
    first_name,
    last_name,
    phone,
    email,
    password,
  }: SignUpData) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        auth.currentUser?.sendEmailVerification();
        Notify.Success("Thanks for signing up!");
        return createUser({
          uid: response.user?.uid,
          email,
          first_name,
          last_name,
          phone,
        });
      })
      .catch((error) => {
        Notify.Failure("Something went wrong! " + error.message);
        return { error };
      });
  };

  const getUserAdditionalData = (user: firebase.default.User) => {
    return db
      .collection("users")
      .doc(user.uid)
      .get()
      .then((userData: any) => {
        if (userData.data()) {
          setUser(userData.data());
        }
      });
  };

  const updateUserData = (user: firebase.default.User) => {
    return db
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then((userData: any) => {
        if (userData.data()) {
          setUser(userData.data());
        }
      });
  };

  const handleAuthStateChanged = (user: any) => {
    setUser(user);
    if (user) {
      getUserAdditionalData(user);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

    return () => unsub();
  }, []);

  return {
    user,
    signUp,
    signIn,
    getUserAdditionalData,
    updateUserData,
  };
};