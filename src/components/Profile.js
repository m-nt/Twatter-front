import React from "react";

function Profile({ username, id, email }) {
  return (
    <div className="card-body">
      <h3>{username}</h3>
      <h5 className="card-text md-2 text-muted">#id&nbsp;{id}</h5>
      <h5 className="card-text md-2  text-muted">{email}</h5>
    </div>
  );
}

export default Profile;
