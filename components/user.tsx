import { UserType } from "../types/types";

export const User = ({ user } : { user: UserType }) => {
    return (
        <li>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </li>
    )
}