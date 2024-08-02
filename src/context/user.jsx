// import { ID } from "appwrite";
// import { createContext, useContext, useEffect, useState } from "react";
// import { account } from "../appwrite/config";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// const UserContext = createContext();

// export function useUser() {
//   return useContext(UserContext);
// }

// export function UserProvider(props) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function login(email, password) {
//     setLoading(true);
//     try {
//       await account
//         .createEmailPasswordSession(email, password)
//         .then((res) => console.log(res));
//       const currentUser = await account.get();
//       setUser(currentUser);
//       toast.success("Login successful!");
//       window.location.href = "/dashboard";
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function logout() {
//     console.log("calling logout function...");
//     try {
//       await account.deleteSession("current");
//       setUser(null);
//       window.location.href = "/";
//       toast.success("Logout successful!");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   }

//   async function register(email, password, name) {
//     setLoading(true);
//     try {
//       await account
//         .create(ID.unique(), email, password, name)
//         .then((resp) => {
//           console.log(resp);
//           toast.success("Registration successful!");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       await login(email, password);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function init() {
//     try {
//       const currentUser = await account.get();
//       setUser(currentUser);
//     } catch (error) {
//       setUser(null);
//     }
//   }

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <UserContext.Provider value={{ current: user, login, logout, register, loading }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }
