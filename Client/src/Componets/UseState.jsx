import { useState } from 'react'

const UseState = () => {
  // const[cartCount, setCartCount] = useState(0);
  // const handleClick = ()=>{setCartCount(cartCount+1)};
  // const[name, setName] = useState("Abi")
  // const[age, setAge] = useState(26)

  //object type usestate
  // const [user, setUser] = useState({ name: "Abi", age: 26 });

  // const handleName = () => {
  //   setUser({...user,name:"Ram"})
  // }
  // const handleAge = () => {
  //   setUser({...user,age:30})
  // }
  // const [data, setData]  = useState("");
  // const handleData = (e)=>{setData(e.target.value)}

  const[user, setUser] = useState({fname:"Abi",lname:"lash", age:26});

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }


  return (
    <div>
      {/* <h1>No of items added in cart: {cartCount}</h1>
      <button className='btn btn-danger' onClick={handleClick}>Add to Cart {cartCount}</button> */}

      {/* <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h2>{user.age}</h2>
      <button className='btn btn-primary' onClick={handleName}>Toggle Name</button><br></br>
      <button className='btn btn-danger' onClick={handleAge}>Age</button> */}

      {/* <input onChange={handleData} placeholder='Enter Data' className='w-25 p-2 m-2'></input>
      <p className='m-2'>Data:{data}</p> */}
      <h2>{user.fname} {user.lname} {user.age}</h2>
      <input type="text" placeholder='Enter Your First Name' className='w-25 p-2 m-5' name='fname' onChange={handleChange} value={user.fname}/><br></br>
      <input type="text" placeholder='Enter Your Last Name' className='w-25 p-2 m-5'name='lname' onChange={handleChange} value={user.lname}/><br></br>
      <input type="text" placeholder='Enter Your Age' className='w-25 p-2 m-5' name='age' onChange={handleChange} value={user.age}/><br></br>




    </div>
  )
}

export default UseState