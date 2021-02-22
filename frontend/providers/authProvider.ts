import { createContext } from "react";
import nookies from "nookies";

const AuthContext = createContext<{ user: firebase.User | null }>({
	user: null,
});

export function AuthProvider({ children }: any) {
	const [user, setUser] = useState<firebase.User | null>(null);

	useEffect(() => {
		return firebase.auth().onIdTokenChanged(async (user) => {
			if (!user) {
				setUser(null);
				nookies.set(undefined, "token", "");
			} else {
				const token = await user.getIdToken();
				setUser(user);
				nookies.set(undefined, "token", token);
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
}
