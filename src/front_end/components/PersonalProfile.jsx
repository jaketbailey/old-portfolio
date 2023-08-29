import SkillCard from "./sub-components/SkillCard.jsx"


export default function PersonalProfile() {
  class Skill {
    constructor(name, src, link, hide = false) {
      this.name = name;
      this.src = src;
      this.link = link;
      this.hide = hide;
    }
  }

    const getSkills = () => {
    const mathworksLogo = "https://user-images.githubusercontent.com/10817626/67014544-482be200-f0f5-11e9-8e74-3dd575c8ad83.png"
    
    const skills = [
      new Skill("React.js", "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png", "https://reactjs.org/"),
      new Skill("Javascript", "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3209724/language-javascript-icon-md.png", "https://www.javascript.com/"),
      new Skill("HTML5/CSS", "https://cdn.iconscout.com/icon/free/png-256/html5-2474813-2056052.png", "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"),
      new Skill("Node.js", "http://cdn.onlinewebfonts.com/svg/img_189697.png", "https://nodejs.org/en/"),
      new Skill("Go", "https://img.icons8.com/ios-filled/512/golang.png", "https://golang.org/"),
      new Skill("PostgreSQL", "https://icons-for-free.com/download-icon-postgresql-1324440215994540667_512.icns", "https://www.postgresql.org/"),
      new Skill("Vue.js", "https://icons-for-free.com/download-icon-bxl+vuejs-1325051940816489463_512.png", "https://vuejs.org/"),
      new Skill("Express.js", "/images/expressjs.png", "https://expressjs.com/"),
      new Skill("MATLAB", mathworksLogo, "https://www.mathworks.com/products/matlab.html"),
      new Skill("Python", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/1200px-Python_icon_%28black_and_white%29.svg.png", "https://www.python.org/"),
      new Skill("Git", "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png", "https://git-scm.com/"),
      new Skill("Simulink Model Management and Architecture", mathworksLogo, "https://matlabacademy.mathworks.com/progress/instructorled/share/certificate.html?id=30c7d4fb-0f44-47d0-9f21-ece0bfceaddb&", true),
      new Skill("Matlab Programming Techniques", mathworksLogo, "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=7cefce18-a9fe-49c2-9d82-79741c343bfe&", true),
      new Skill("MATLAB Fundamentals", mathworksLogo, "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d167b7b2-1a23-4419-bb93-fc1641f38e85&&", true),
      new Skill("Matlab Onramp", mathworksLogo, "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b9552bb3-61f6-4d08-97d3-a4b95a672824&", true),
    ]
  
    return skills.map(skill => {
      return (
        <SkillCard
          skillName={skill.name}
          src={skill.src}
          link={skill.link}
          hide={skill.hide}
        />
      )
    })
  
  }

  return (
    <div id="personal-profile" class="container">
      <h2 class="pt-5 pb-2"> Personal Profile </h2>
      <div class="row">
      <h3 class>Skills and Certifications</h3>
          <div class="d-flex flex-wrap justify-content-center mb-5">
            {getSkills()}
          </div>
        <div class="flex-column col-sm-12 col-md-6 col-lg-6">
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
          <div class="flex-column col-sm-12 col-md-6 col-lg-6">
            <h3>AchievemeAchievementsnts</h3>
            <div class="accordion pt-2" id="accordion2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwelve">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="true" aria-controls="collapseTwelve">
                    <img src="/images/bae-systems-2.webp" class="m-1" width={"55rem"} alt="BAE Systems Logo" />
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
                    <img src="/images/uop.webp" class="m-1" width={"55rem"} alt="UOP Logo" />
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
                    <img src="/images/NSCG.webp" class="m-1" width={"55rem"} alt="BAE Systems Logo" />
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
                    <img src="/images/ABRSM.webp" class="m-1" width={"55rem"} alt="BAE Systems Logo" />
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
        <h3 class="pt-5">Work Experience</h3>
            <div class="accordion pt-2" id="accordion3">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                    <img src="/images/bae-systems-2.webp" class="m-1" width={"55rem"} alt="BAE Systems Logo" />
                    Placement Combat Systems Software Engineer at BAE Systems Maritime Naval Ships
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>June 2022 - June 2023</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Developing an analyst tool using MATLAB</li>
                      <li class="list-group-item">Leading a Rapid Application Development project</li>
                      <li class="list-group-item">Back-end and database development with MySQL and Django</li>
                      <li class="list-group-item">Working with Javascript web frameworks such as Vue</li>
                      <li class="list-group-item">Agile Software Development utilising the Atlassian Suite</li>
                      <li class="list-group-item">Understanding client needs and requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingPlacementGuide">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePlacementGuide" aria-expanded="true" aria-controls="collapsePlacementGuide">
                    <img src="/images/uop.webp" class="m-1" width={"55rem"} alt="University of Portsmouth Logo" />
                    Faculty/Placement and Employability Guide at the University of Portsmouth
                  </button>
                </h2>
                <div id="collapsePlacementGuide" class="accordion-collapse collapse show" aria-labelledby="headingPlacementGuide" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>August 2023 - Present</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Providing information and support for visitors to the University and departmental Open Days, HE Fairs and other events.</li>
                      <li class="list-group-item">Providing tours and showing visitors to rooms and buildings as required during such events</li>
                      <li class="list-group-item">Participating in question and answer sessions in relation to the Faculty, the Course, and the Year in Industry</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    <img src="/images/ocn.webp" class="m-1" width={"55rem"} alt="OCN Logo" />
                    Freelance work for Open College Network West Midlands
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
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
                    <img src="/images/costa.webp" class="m-1" width={"55rem"} alt="Costa Logo" />
                    Barista at Costa Coffee UK&I
                  </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>November 2019 - June 2022, June 2023 - Present</strong><br/>
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
                    <img src="/images/blokes.webp" class="m-1" width={"55rem"} alt="Blokes Logo" />
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
                    <img src="/images/global.webp" class="m-1" width={"55rem"} alt="Global Logo" />
                    IT Support Work Experience at Global
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
                    <img src="/images/cm.webp" class="m-1" width={"55rem"} alt="Credit Management Logo" />
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
