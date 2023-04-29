
export default function SkillCard (props) {
  return (
    <div class="custom">
      <div class="card skill-card ">
        <div class="card-body-skill">
          <img class="skill-icon" src={props.src}/>
          {props.skillName}
        </div>
      </div>
    </div>
  )
}