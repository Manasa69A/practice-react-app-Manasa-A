function ProfileCard(props){
    return(
        <div className="profile-card">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );

}

export default ProfileCard;