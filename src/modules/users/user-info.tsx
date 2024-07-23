import { useNavigate, useParams } from "react-router-dom";
import { UserId, usersSlice } from "./users.slice";
import { useAppSelector } from "../../store";

export function UserInfo() {
    const { id = "" } = useParams<{id: UserId}>()
    const navigate = useNavigate()
    const user = useAppSelector(state => usersSlice.selectors.selectUserById(state, id));
    const handleBackButtonClick = () => {
        navigate("..", { relative: "path" });
    };
  
    return (
      <div className="flex flex-col items-center">
        <button
          onClick={handleBackButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md"
        >
          Back
        </button>
        <h2 className="text-3xl">{user.name}</h2>
        <p className="text-xl">{user.description}</p>
      </div>
    );
  }