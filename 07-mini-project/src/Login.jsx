<<<<<<< HEAD
import Layout from "./Layout";
import { useContext } from "react";
import { Context } from "./UserContext";
import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  // You have to pass data to login() function to successful login.
  const { login } = useContext(Context);
  // example of login with button onClick event listerner.
  // <button onClick={() => login({
  //     username: 'mock',
  //     password: 'mock',
  // })}>Text</button>
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
=======
import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react"

const Login = () => {
    // You have to pass data to login() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => login({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <Layout>
            <div>
                <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" />
                <input onChange={(event) => setPassword(event.target.value)} type="text" placeholder="password" />
                <button onClick={() => login({
                    username: username,
                    password: password
                })} >Login</button>
            </div>
        </Layout>
    )
}
>>>>>>> 845cd43769fe56d973c77c0f9a098ed7aa431436

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Layout>
      <div>
        {/* <button onClick={() => login({ username: 'admin', password: 'admin' })}>Login</button> */}
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={handleUsername}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={handlePassword}
        />
        <button
          onClick={() => login({ username: username, password: password })}
        >
          Login
        </button>
      </div>
    </Layout>
  );
};

export default Login;
