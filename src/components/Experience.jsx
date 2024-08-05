import style from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <div className={style.experContainer}>
        <h2 className="heading">Experience</h2>
        <div>
          <h3 id="comp-hed">DigiLearn</h3>
          <p>August-2023 to peresent</p>
          <p>
            <b>Role:</b> Front-end Web Developer
          </p>
          <p className="ab-con">
            Developing the interactive activity for the student for learning
            propose. Activity are developed using the HTML, CSS and JavaScript
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
