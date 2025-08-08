import { useEffect, useState } from "react";
import "./App.css";
import type { User } from "./types/Types";
import UserCard from "./components/UserCard";

const Api_Url = "https://randomuser.me/api/?results=10&nat=rw";
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch(Api_Url);
      if (!response.ok) {
        throw new Error(`Error:${response.statusText}`);
      }

      const jsonData = await response.json(); // This is the whole response object, with 'results'

      const users: User[] = jsonData.results.map(
        (user: any, index: number) => ({
          id: index + 1,
          first_name: user.name.first,
          last_name: user.name.last,
          username: user.login.username,
          email: user.email,
          gender: user.gender,
          date_of_birth: user.dob.date.split("T")[0],
          address: {
            city: user.location.city,
            country: user.location.country,
          },
        })
      );

      setUsers(users); // Use mapped users here
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="app">
      <h1>Random User </h1>
      <button onClick={fetchUsers}>Refresh Users</button>

      <div className="card-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
