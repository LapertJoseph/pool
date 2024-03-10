import React from "react";
import "../src/profile.scss";

const Profile = ({ username, email, bio }) => {
  return (
    <div className="profile">
      <h2>Profil Utilisateur</h2>
      <div className="info">
        <p>
          <strong>Utilisateur:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Bio:</strong> {bio}
        </p>
      </div>
    </div>
  );
};

export default Profile;
