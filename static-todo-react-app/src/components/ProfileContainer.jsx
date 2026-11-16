import ProfileCard from "./ProfileCard";

function ProfileContainer() {
    return(
        <div className="profile-container">

            <h1>User Profiles</h1>

            <ProfileCard
                name="Manasa"
                age={28}
                bio="Software Engineer"
            />

            <ProfileCard
                name="Kris"
                age={26}
                bio="Designer"
            />

            <ProfileCard
                name="Aaron"
                age={25}
                bio="Architect"
            />

            <ProfileCard
                name="Cherry"
                age={27}
                bio="Backend Developer"
            />

        </div>
    );

}

export default ProfileContainer;