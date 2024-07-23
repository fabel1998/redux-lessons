import {
  createBrowserRouter,
  Link,
  Outlet,
  redirect,
} from "react-router-dom";
import { UsersList } from "./modules/users/users-list";
import { Counters } from "./modules/counters/counters";
import { UserInfo } from "./modules/users/user-info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <header>
        <Link to="/users">Users</Link>
        <Link to="/counters">Counters</Link>
      </header>
      <Outlet />
    </div>,
    children: [
      {
        index: true,
        loader: () => redirect('/users')
      },
      {
        path: "users",
        element: <UsersList />,
      },
      {
        path: "users/:userId",
        element: <UserInfo />,
      },
      {
        path: "counters",
        element: <Counters />,
      },
    ],
  },
]);