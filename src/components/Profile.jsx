import style from "./Profile.module.css";

function Profile({ image }) {
  return (
    <>
      <div className={style.container}>
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default Profile;
