import type { User } from "../types/Types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.username}</p>
        </div>
        <div className="card-back">
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>DOB: {user.date_of_birth}</p>
          <p>
            Address: {user.address?.city ?? "N/A"},{" "}
            {user.address?.country ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
