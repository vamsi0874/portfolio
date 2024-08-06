import tick from '../assets/tick.png'
function SkillList({ skill }) {
  return (
    <span>
      <img src={tick} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
