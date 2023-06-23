
export default function SkillCard (props) {

  let hide = "";

  if (props.hide === true) {
    hide = "hide ";
  }

  return (
    <div className ={hide + "custom"}>
      <a className ="skill-link" href={props.link} target="_blank">
        <div className ="card skill-card">
          <div className ="card-body-skill">
              <img className ="skill-icon" src={props.src}/>
              {props.skillName}
          </div>
        </div>
      </a>
    </div>
  )
}