import styles from "../../../styles/beginners-page.module.css";
import Image from "../../../assets/beginnerKids.png";

import { chooses } from "../../../data/data";

const Choose = () => {
  return (
    <div className={styles.chooses}>
      <h1>Why Choose Uptick Talent Beginners?</h1>
      <img
        src={Image}
        width={900}
        height={800}
        alt="kids learning"
      />
      <div className={styles.chooseContent}>
        {chooses.map((choose) => (
          <div className={styles.choose} key={choose.id}>
            <h5>{choose.title}</h5>
            <h6>{choose.content}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
