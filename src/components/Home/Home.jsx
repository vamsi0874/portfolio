import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';


function Home() {
 
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
      
      </div>
      <div className={styles.info}>
        <h1>
          VAMSI
          <br />
          MYLARI
        </h1>
        <h2>FULL STACK Developer</h2>
        <span>
      
          <a href="https://github.com/vamsi0874" target="_blank">
          <div>
            <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt="Github icon" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vamsi-m-5a7a5a256/" target="_blank">
            <img src='data:image/png;base64,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' alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Innovative Software Developer with expertise in Python, JavaScript., Mern Stack and MYSQL. Proven
experience in creating responsive web applications and robust back-end solutions. Passionate about
continuous learning and delivering impactful projects.
        </p>
      </div>
    </section>
  );
}

export default Home;
