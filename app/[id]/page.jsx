"use client"
import { useEffect, useState } from "react";

export default function UsersDetail({ params }) {
  const { id } = params;
  
  const[UserList, setUserList] = useState([]);
  const[TodosData, setTodosData] = useState([]);
  useEffect(() => {
    async function GetUsersData() {
      const UsersData = await fetch("https://dummyjson.com/users/" + id).then(res => res.json());
      setUserList(UsersData)
    }
    GetUsersData();

    async function GetTodosData() {
      const TodosData = await fetch("https://dummyjson.com/users/" + id + "/todos").then(res => res.json());
      setTodosData(TodosData)
    }
    GetTodosData();
  },[])
console.log(TodosData);
console.log(UserList);

  
  
  return (
    <div className="usersDetail">
      <img src={UserList.image} />
      <div className="usersdetailtext">
      <h3>{UserList.firstName} {UserList.lastName}</h3>
      <p>{UserList.email}</p>
      <p>{UserList.phone}</p>
      <p>{UserList.age}</p>
      <p>{UserList.birthDate}</p>
      <p>{UserList.gender}</p>
      </div>
      
    </div>
  );
}



// "address": {
// "address": "626 Main Street",
// "city": "Phoenix",
// "state": "Mississippi",
// "stateCode": "MS",
// "postalCode": "29112",
// "coordinates": {
// "lat": -77.16213,
// "lng": -92.084824
// },
// "country": "United States"
// },


// "id": 1,
// "firstName": "Emily",
// "lastName": "Johnson",
// "maidenName": "Smith",
// "age": 28,
// "gender": "female",
// "email": "emily.johnson@x.dummyjson.com",
// "phone": "+81 965-431-3024",
// "username": "emilys",
// "password": "emilyspass",
// "birthDate": "1996-5-30",
// "image": "https://dummyjson.com/icon/emilys/128",
// "bloodGroup": "O-",
// "height": 193.24,
// "weight": 63.16,
// "eyeColor": "Green",


