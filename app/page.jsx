
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  const { users } = await fetch("https://dummyjson.com/users").then(res => res.json());
  console.log(users)
  return (
    <div className="usersHome">
      {users.map(user => (
        <div className="usersContainer">
          <Link href={"/" + user.id}> <img src={user.image} />
           <div className="usersName">
           <h3>{user.firstName} {user.lastName}</h3>
           <p>{user.username}</p>
           </div>
            <img width={50} src="/right-arrow.png"/>
          </Link>
        </div>
      ))}
    </div>

  );
}
