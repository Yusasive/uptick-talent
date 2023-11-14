import styles from "../../styles/about-page.module.css";
import StoryPng from "../../assets/story.png";
import AboutHero from "../../assets/about-hero.png"

const Hero = () => {
  return (
    <div className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroDescription}>
            <h1>About Uptick Talent</h1>
            <h6>
              At Uptick Talent, we are on a relentless mission to cultivate the
              next generation of technology and business leaders. Our journey is
              characterized by innovation, mentorship, and a commitment to
              nurturing talent from all walks of life.
            </h6>
          </div>
          <div className={styles.heroImage}>
            <img
              src={AboutHero}
              width={400}
              height={100}
              alt="background image"
            />
          </div>
        </div>
        <div className={styles.storyContent}>
          <div className={styles.storyImage}>
            <img
              src={StoryPng}
              width={400}
              height={100}
              alt="background image"
            />
          </div>
          <div className={styles.storyDescription}>
            <h1>Our Story</h1>
            <h6>
              Uptick Talent was birthed to empower individuals with the
              knowledge and skills they need to thrive in today's fast-paced,
              ever-evolving world of technology and business. Since our
              inception, we have grown into a global community, serving as a
              launchpad for dreams and a bridge between aspirations and
              accomplishments.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
