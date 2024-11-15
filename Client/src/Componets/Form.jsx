/* eslint-disable no-unused-vars */
import  { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({
    name: "Abilash",
    age: 26,
    gender: "male",
    isMarried: true,
  });

  const changeHandler = (e)=>{
    const name = e.target.name

    const value = e.target.type === "checkbox"?e.target.checked:e.target.value
    setUser({...user,[name]:value})
  }


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <th>{user.name}</th>
          </tr>

          <tr>
            <th>Age:</th>
            <th>{user.age}</th>
          </tr>

          <tr>
            <th>Gender:</th>
            <th>{user.gender}</th>
          </tr>

          <tr>
            <th>Marital Status:</th>
            <th>{user.isMarried ? "Married" : "Not Married"}</th>
          </tr>
        </tbody>
      </table>
      
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={user.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            value={user.age}
            onChange={changeHandler}
          />
        </div>
        
        <div>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={user.gender == "male"}
              onChange={changeHandler}
            />
            Male
          </label>

          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={user.gender == "female"}
              onChange={changeHandler}

            />
            Female
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isMarried"
              value={user.isMarried}
              checked={user.isMarried == true}
              onChange={changeHandler}
            />
            Married
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
