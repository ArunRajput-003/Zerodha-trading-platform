// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   const [cookies, removeCookie] = useCookies(["token"]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const verifyCookie = async () => {
//       // No token → go back to login
//       if (!cookies.token) {
//         window.location.href = "http://localhost:5173/login";
//         return;
//       }

//       try {
//         // Verify token with backend
//         const { data } = await axios.post(
//           "http://localhost:4000",
//           {},
//           {
//             withCredentials: true,
//           }
//         );

//         const { status, user } = data;

//         if (status) {
//           setUsername(user);

//           toast(`Hello ${user}`, {
//             position: "top-right",
//           });
//         } else {
//           removeCookie("token");

//           window.location.href = "http://localhost:5173/login";
//         }
//       } catch (error) {
//         console.error("Authentication error:", error);

//         removeCookie("token");

//         window.location.href = "http://localhost:5173/login";
//       }
//     };

//     verifyCookie();
//   }, [cookies.token, removeCookie]);

//   return (
//     <>
//       <TopBar />

//       <Dashboard />

//       <ToastContainer />
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ToastContainer,
  toast,
} from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        /*
         * IMPORTANT:
         *
         * We DO NOT check the token with JavaScript.
         *
         * The token is an HttpOnly cookie, so the browser
         * automatically sends it to the backend.
         */

        const { data } = await axios.post(
          "https://zerodha-trading-platform-fpy2.onrender.com/",
          {},
          {
            withCredentials: true,
          }
        );

        console.log(
          "Authentication response:",
          data
        );

        if (data.status) {
          setUsername(data.user || "User");
          setLoading(false);

          toast(`Hello ${data.user}`, {
            position: "top-right",
          });
        } else {
          /*
           * Backend says token is missing/invalid.
           */
          window.location.href =
            "https://zerodha-trading-frontend1.netlify.app/login";
        }

      } catch (error) {
        console.error(
          "Authentication verification failed:",
          error
        );

        window.location.href =
          "https://zerodha-trading-frontend1.netlify.app/login";
      }
    };

    verifyUser();
  }, []);

  /*
   * Don't render dashboard until authentication
   * has been verified.
   */
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        Checking authentication...
      </div>
    );
  }

  return (
    <>
      <TopBar />

      <Dashboard username={username} />

      <ToastContainer />
    </>
  );
};

export default Home;