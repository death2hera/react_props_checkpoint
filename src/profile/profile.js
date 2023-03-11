import React from "react";
import PropTypes from "prop-types";
const Profile =(props)=>{
    return(
        <>
        
        <div style={{padding: "10px"}}>
            {props.children}
        </div>
        <div>
            <h1>
                My name is {props.fullname}, i am a {props.profession}
            </h1>
        </div>
        <div>
            
        </div>


        
        
        </>
        

    );


};

Profile.prototype={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,


}


function handleName (props){
    alert(props.fullname);
}





Profile.defaultProps = {
    fullname: "John Doe",
    bio: "I love everything about nature, lol",
    profession: "wakandan warrior",
    handleName : () => {
        alert (`John doe`)
    }
}


export default Profile;