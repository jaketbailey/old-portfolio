
export default function SkillCard (props) {
  return (
    <div className ="custom">
      <a className ="skill-link" href={props.link} target="_blank">
        <div className ="card skill-card ">
          <div className ="card-body-skill">
              <img className ="skill-icon" src={props.src}/>
              {props.skillName}
          </div>
        </div>
      </a>
    </div>
  )
}