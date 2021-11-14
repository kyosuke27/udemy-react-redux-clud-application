import React from "react";
import PropTypes from 'prop-types'; 

const App=()=>{
  
  const profile=[
    {name:"Taro",age:10},
    {name:"Hanako",age:5}
  ]
    return (
      <div>
        {
          profile.map((profile,index)=>{
            return <User name={profile.name} age={profile.age} key={index}/>//関数の中で値を返却している
          })
        }
    </div>
  )
}

const User =(props)=>{
  return  <div>Hi, I am {props.name},and {props.age} years old!</div>
}

User.propTypes={
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}

export default App;
