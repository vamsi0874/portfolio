import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';


function Skills() {
 
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList  skill="CSS" />
        <SkillList  skill="JavaScript" />
        <SkillList  skill="React" />
        <SkillList  skill="Nodejs" />
        <SkillList  skill="Expressjs" />
        <SkillList  skill="Mongodb" />
        <SkillList  skill="Tailwind CSS" />
        <SkillList  skill="MySql" />
      </div>
      <hr />
      <div className={styles.skillList}>
        
        <SkillList  skill="C++" />
        <SkillList  skill="python" />
        <SkillList  skill="python" />
      </div>
      <hr />
      <div className={styles.skillList}>
     
        <SkillList  skill="Git" />
      
      </div>
    </section>
  );
}

export default Skills;
