import { GetStaticProps } from "next";
import { User } from "../components/user";
import { UserType } from "../types/types";


const UserList = ({ users }: { users: UserType[] }) => {

    const userList = users.map((item) => <User user={item} key={item.id}/>);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {userList}
            </ul>
        </>
    )
}

export const getStaticProps: GetStaticProps = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: { users }
    };
}

export default UserList;