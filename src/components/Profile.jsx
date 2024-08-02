import style from "./Profile.module.css";

function Profile({ image }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.profImg} src={image} alt="" />
        <div className={style.nameContainer}>
          <h3 className={style.name}>Gnaendra P</h3>
          <p className={style.role}>Frontend Developer</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
