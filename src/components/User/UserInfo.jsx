import "../../styles/components/User/UserInfo.css";

function UserInfo(props) {
  const data = props.dataUserInfo;
  console.log(data);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {data.firstName + " " + data.lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default UserInfo;
