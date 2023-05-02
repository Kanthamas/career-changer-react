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
