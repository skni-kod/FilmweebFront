import React, { useState, useEffect } from "react";
import axios from "axios";
import "./loginform.scss";

const LoginForm: React.FC = () => {
    const [loginUrl, setLoginUrl] = useState(null);

    useEffect(() => {
        axios.get("http://172.22.238.126/api/login/github/redirect").then(response => {
           setLoginUrl(response.data);
            console.log(response);
          });
        // fetch("http://172.22.238.126/api/login/github/redirect", {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json",
        //     },
        // })
        //     .then((res) => {
        //         if (res.ok) {
        //             console.log(res.json());
        //             return res.json();
        //         }
        //         throw new Error("Something went wrong!");
        //     })
        //     .then((data) => setLoginUrl(data.url))
        //     .catch((error) => console.error(error));
    }, []);

    console.log(loginUrl);

    return (
        <div className={"login-form"}>
            {/* <h2 className={"login-copy"}>Logowanie</h2>
            <form action="#" method="post">
                <label htmlFor="userName">Nazwa użytkownika:</label>
                <input
                    type="text"
                    name="userNAme"
                    id="userName"
                    placeholder="Twoja nazwa użytkownika..."
                />
                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Twoje hasło..."
                />
                <button className={"loginButton"}>Zaloguj</button>
            </form> */}
            {loginUrl != null && <a href={loginUrl}>Google Sign In</a>}
        </div>
    );
};

export default LoginForm;
