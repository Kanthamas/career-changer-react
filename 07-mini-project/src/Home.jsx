import Layout from "./Layout";
import { useContext, useEffect, useState } from "react";
import { Context } from "./UserContext";
import Admin from "./Admin";
import User from "./User";

const Home = () => {
<<<<<<< HEAD
  // You have to use getUserRole() to get role of current user
  // role is specify below
  // admin role is 'admin'
  // user role is 'user'
  // 'other' is who didn't login.
  const { getUserRole } = useContext(Context);
  // example of getUserRole.
  // const _role = getUserRole();
  // return type is always string.
  const [role, setRole] = useState();
=======
    // You have to use currentRole to get role of current user
    // role is specify below
    // admin role is 'admin'
    // user role is 'user'
    // 'other' is who didn't login.
    const { currentRole } = useContext(Context)
    // example of currentRole.
    // const _role = currentRole
    // return type is always string.

    // You have to add condition here according to role.
    if (currentRole === 'admin') {
        return (
            <Layout>
                <Admin />
            </Layout>
        )
    }
>>>>>>> 845cd43769fe56d973c77c0f9a098ed7aa431436

  // You have to add condition here according to role.
  if (role === "?????") {
    return (
      <Layout>
        <Admin />
      </Layout>
    );
  }

  return (
    <Layout>
      <User />
    </Layout>
  );
};

export default Home;
