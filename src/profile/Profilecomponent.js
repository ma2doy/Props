import React from 'react'

const profilecomponent = ({fullName,bio,profession,children,handleAlert}) => {
    
    return (
        <div>
            {/* {props.handleAlert} */}
            <h1>{fullName} </h1>
            <p>{bio}</p>
            <p>{profession}</p>
            <img src={children} alt=""/>
            <button onClick={()=>handleAlert(fullName)} >click me</button>
        </div>
    
    )
}

export default profilecomponent

