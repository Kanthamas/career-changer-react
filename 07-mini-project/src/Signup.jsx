<<<<<<< HEAD
import Layout from "./Layout";
import { Context } from "./UserContext";
import { useContext, useState } from "react";

const Signup = () => {
  // You have to pass data to signup() function to successful registration.
  const { signup } = useContext(Context);
  // example of signup with button onClick event listerner.
  // <button onClick={() => signup({
  //     username: 'mock',
  //     password: 'mock',
  //     fullname: 'mock',
  //     organization: 'mock'
  // })}>Text</button>
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();
  const [organization, setOrganization] = useState();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleFullname = (event) => {
    setFullname(event.target.value);
  };
  const handleOrganization = (event) => {
    setOrganization(event.target.value);
  };
=======
import { useState } from "react"
import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext } from "react"

const Signup = () => {
    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    //     fullname: 'mock',
    //     organization: 'mock'
    // })}>Text</button>
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [fullname, setFullname] = useState()
    const [organization, setOrganization] = useState()

    return (
        <Layout>
            <div>
                <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username" /><br />
                <input onChange={(event) => setPassword(event.target.value)} type="text" placeholder="Password" /><br />
                <input onChange={(event) => setFullname(event.target.value)} type="text" placeholder="Fullname" /><br />
                <input onChange={(event) => setOrganization(event.target.value)} type="text" placeholder="Organization" /><br />
                <button onClick={() => signup({
                    username: username,
                    password: password,
                    fullname: fullname,
                    organization: organization
                })}>Save</button>
            </div>
        </Layout>
    )
}
>>>>>>> 845cd43769fe56d973c77c0f9a098ed7aa431436

  return (
    <Layout>
      <div>
        <input type='text' placeholder='Username' onChange={handleUsername} />
        <input
          type='password'
          placeholder='Password'
          onChange={handlePassword}
        />
        <input type='text' placeholder='Fullname' onChange={handleFullname} />
        <input
          type='text'
          placeholder='Organization'
          onChange={handleOrganization}
        />
        <button
          onClick={() => {
            signup({
              username: username,
              password: password,
              fullname: fullname,
              organization: organization,
            });
          }}
        >
          Save
        </button>
      </div>
    </Layout>
  );
};

export default Signup;
