import React from 'react'

const User = (props) => {
    // console.warn(props.data.name)
    // below line shows how i can store value of props in const {data}
    const { data } = props
    return (
        <div>
            <h1>User Component</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}
export default User;

// this how props flows data from 1 component to another component(basic_tutorial )