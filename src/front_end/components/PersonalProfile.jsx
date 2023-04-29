import SkillCard from "./sub-components/SkillCard.jsx"

class Skill {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }
}

const getSkills = () => {
  const skills = [
    new Skill("React.js", "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"),
    new Skill("Javascript", "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3209724/language-javascript-icon-md.png"),
    new Skill("HTML5/CSS", "https://cdn.iconscout.com/icon/free/png-256/html5-2474813-2056052.png"),
    new Skill("Node.js", "http://cdn.onlinewebfonts.com/svg/img_189697.png"),
    new Skill("Go", "https://img.icons8.com/ios-filled/512/golang.png"),
    new Skill("PostgreSQL", "https://icons-for-free.com/download-icon-postgresql-1324440215994540667_512.icns"),
    new Skill("Vue.js", "https://icons-for-free.com/download-icon-bxl+vuejs-1325051940816489463_512.png"),
    new Skill("Express.js", "data:image/png;base64,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"),
    new Skill("MATLAB", "https://user-images.githubusercontent.com/10817626/67014544-482be200-f0f5-11e9-8e74-3dd575c8ad83.png"),
    new Skill("Python", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/1200px-Python_icon_%28black_and_white%29.svg.png"),
    new Skill("Git", "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"),
  ]

  return skills.map(skill => {
    return (
      <SkillCard
        skillName={skill.name}
        src={skill.src}
      />
    )
  })

}

export default function PersonalProfile() {
  return (
    <div id="personal-profile" class="container">
      <h2 class="pt-5 pb-2"> Personal Profile </h2>
      <div class="row">
      <h3 class>Skills</h3>
          <div class="d-flex flex-wrap justify-content-center mb-5">
            {getSkills()}
            </div>
        <div class="col col-sm-12 col-md-6 col-lg-6">
          <h3>Charity and Volunteer Work</h3>
            <div class="accordion pt-2" id="accordion1">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFourteen">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="true" aria-controls="collapseFourteen">
                    Graduate Induction - BAE Systems
                  </button>
                </h2>
                <div id="collapseFourteen" class="accordion-collapse collapse show" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    During my first month at BAE Systems, I volunteered to aid the early careers team based in Glasgow, Scotland with arranging the Graduate Immersion Induction for the September Intake.
                    I was tasked to liase with the new starters to arrange flights and hotel stays for the time they would spend in Glasgow for the Induction. Along with arranging their flights, I would also
                    join them in travelling up to Glasgow to assist with the actual event itself. I acted as the first point of contact to eight new graduate starters for around one month and a half before they joined the business.
                    Once I was in Glasgow, I then helped the early careers team in conducting the 3-day long in-person induction. <a href="https://www.linkedin.com/feed/update/urn:li:activity:6972555268836446208/" target="_blank">See Here.</a>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Land's End to John O'Groats Charity Ride
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    As a committed individual, taking pride in my 100% commitment to any task or interest. 
                    An example of this is that I have been raising money for charity from a very young age. In 2016, after 2 years of training, 
                    I cycled from Land’s End in Cornwall to John o’ Groats in Scotland, completing a total of 999 miles in 12 consecutive days. 
                    I successfully raised £7300 for three individual charities, Autoimmune Alopecia Research UK, Birmingham Children’s Hospital and Sandwell Young Carers. 
                    In addition, I set up a blog for the whole event and for the training attracting interest from BBC Midlands Today. 
                    There have been many other cycle events that I have completed, such as including Birmingham Bikeathon for Leukaemia and 
                    cycling for men’s cancer when I was 6 years of age, and I have raised money with family in other events, for example, Macmillan Cancer Support.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    College Student's Union
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    In 2020 I completed my A-Levels with a set of high grades, which are detailed below. During college, I was nominated and voted for as the 
                    Students' Union Secretary, demonstrating my leadership, negotiation and teamwork skills.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
              
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Duke of Edinburgh
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    In Year 10, I completed the Duke of Edinburgh Bronze Level Award, which included volunteer work and doing continuous activity and 
                    pursuing my further interests. The Award also included several expeditions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-6">
            <h3>Achievements</h3>
            <div class="accordion pt-2" id="accordion2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwelve">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="true" aria-controls="collapseTwelve">
                  Placement position at BAE Systems
                  </button>
                </h2>
                <div id="collapseTwelve" class="accordion-collapse collapse show" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    In November 2021 I got confirmation that I was successful in achieving a Software Engineering industrial placement at BAE Systems as part of Naval Ships.<br/>
                    I have since then started my placement learning Vue (another Javascript framework) as well as working with python again and Learning the basics of MATLAB.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThirteen">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">
                  First and Second Year University
                  </button>
                </h2>
                <div id="collapseThirteen" class="accordion-collapse collapse show" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    I have progressed at university with an overall first for both my first and second years studying Software Engineering.<br/>
                    At university I have developed my skills further in the fields of web development, database management, cyber security and agile development.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    A Levels at NSCG Stafford College
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    In 2020 I completed my A Levels in Computer Science, Psychology and Maths with my highest grade being an A in Computer Science. I have since progressed onto my first year of a BSc(Hons) Course in Software Engineering at the University of Portsmouth. I have recently progressed onto second year at University having passed my first year with an average of 70.75% across modules. In 2018 I completed my GCSEs with a set of very high grades ranging from graded 8-5. Aged 15 I successfully applied for and completed a prefect role at my school. In Year 10 I completed the Duke of Edinburgh Bronze Level Award, When involved I committed to volunteer work as well as doing a continuous activity and pursuing my interests further. The Award also included an expedition as well as two training expeditions where I further developed my team and leadership skills.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Piano, Saxophone and Music Theory
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  I also have a passion for music where I have achieved up to Grade 4 music theory, grade 3 piano and grade 5 alto saxophone. I am currently working towards grade 6 on the alto saxophone which I hope to complete after my A-Levels have finished.
                  </div>
                </div>
              </div>
            </div>
            </div>
        {/* <div class="col col-sm-12 col-md-12 col-lg-6 mt-3"> */}
          
        {/* </div> */}
      {/* <div class="col col-sm-12 col-md-12 col-lg-6 mt-3">  */}
        <h3 class="pt-5">Work Experience</h3>
            <div class="accordion pt-2" id="accordion3">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                    Placement Software Engineer at BAE Systems
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>June 2022 - Present</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Developing an analyst tool using MATLAB</li>
                      <li class="list-group-item">Working with Javascript web frameworks such as Vue</li>
                      <li class="list-group-item">Agile Software Development utilising the Atlassian Suite</li>
                      <li class="list-group-item">Understanding client needs and requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    Freelance work for Open College Network West Midlands
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>August 2021 - June 2022</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">In refining previous form versions and improving them by using the PDF file forma.</li>
                      <li class="list-group-item">Skilled use of PDFelement and other PDF editing software</li>
                      <li class="list-group-item">Meeting with the team at Open College Network to discuss their requirements for each form</li>
                      <li class="list-group-item">Remote working, using Microsoft Teams and emails to communicate with the team at Open College Network</li>
                      <li class="list-group-item">Efficient time management to deliver the forms for a deadline</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                    Barista at Costa Coffee UK&I
                  </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>November 2019 - June 2022</strong><br/>
                    <ul class="list-group pt-2">
                    Customer facing role involving:
                      <li class="list-group-item">Experience working within a fast paced, customer facing role</li>
                      <li class="list-group-item">Trained Barista</li>
                      <li class="list-group-item">COVID-19 trained (within a retail and hospitality environment)</li>
                      <li class="list-group-item">Order processing through a till system</li>
                      <li class="list-group-item">Management of product display across chilled and non-chilled foods</li>
                      <li class="list-group-item">Appraisal stating exceptional and professional customer service</li>
                      <li class="list-group-item">I have also worked in Drive Thru stores as well as standard stores</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                    Saturday Worker at All Blokes Ltd
                  </button>
                </h2>
                <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>September 2018 - November 2019</strong><br/>
                    <ul class="list-group pt-2">
                    Hands on customer/client facing role carrying out the following activities:
                      <li class="list-group-item">Diary management for 4 barbers</li>
                      <li class="list-group-item">Managing customers over the phone</li>
                      <li class="list-group-item">Organising refreshments for customers on arrival</li>
                      <li class="list-group-item">Maintaining a clean working environment for all 4 barbers throughout the day</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTen">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                  IT Support Work Experience at Exterion Media Ltd
                  </button>
                </h2>
                <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>February 2019</strong><br/>
                    Problem solving and providing face to face and remote IT support on Windows laptops, Android and IOS phones using a ticket system.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEleven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
                  Bespoke PC Building at Credit Management Ltd
                  </button>
                </h2>
                <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>February 2019</strong><br/>
                    Face to face discussion with the owner of a small business to obtain details of their IT requirements. I was required to plan and create a bespoke PC with installation of all necessary software.
                  </div>
                </div>
              </div>
          </div>
        </div>
      {/* </div> */}
  </div>
  )
}
