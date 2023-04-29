import PortfolioItem from './sub-components/PortfolioItem.jsx'

class Project {
  constructor(image, alt, title, description, content) {
    this.image = image;
    this.alt = alt;
    this.title = title;
    this.description = description;
    this.content = content;
  }
}

const getProjects = () => {
  const projects = [
    new Project(
      "/images/blockshop.webp",
      "Lego© Store Project",
      "Year 2 Lego© Store Project",
      `For 100% of the Year 2 Application Engineering Module I was set with a task to create, from scratch a Lego© E-commerce store.</br>`,
      `
        For 100% of the Year 2 Application Engineering Module I was set with a task to create, from scratch a Lego© E-commerce store. <br/><br/>
        Payments would be black-box (as it wouldn't be an actual deployed store). 
        The task was to implement accounts, a basket system, a backed fullfillment process and hold a catalog
        of all the products. The store would be hosted on a web server hosted on port 8080 and would be accessed 
        via a web browser. <br/><br/>I used Auth0 to set up oauth authentication so that accounts would be handles externally
        rather than storing passwords in the database. <br/><br/>Each account would have some information stored on the database
        e.g. shipping address etc. Each customer could make multiple orders once another was fullfilled (once an order
        had been processed through checkout). In the end I received a final grade of 77, which is a high first for this
        module. <br/> All the source code is viewable on my 
        <a href="https://github.com/jaketbailey/app-eng-lego" target="_blank"> GitHub</a>
      `),
      new Project(
        "/images/floodx.webp",
        "FloodX",
        "FloodX Flood Management",
        `For 50% of our Software Engineering Theory and Practice (SETAP) module I was in a team of 6 developers and we had to come up with an idea to make a flood management system.<br/>`,
        `
          For 50% of our Software Engineering Theory and Practice (SETAP) module I was in a team of 6 developers and we had to come up with an idea to make a flood management system.<br/><br/>
          This team project was far more strictly organised in comparison to a solo development project 
          as the team followed an Agile development module using Jira for a Kanban board. We got permission
          from Hampshire County Council to make a proof of concept (minimum viable product) flood management system.<br/><br/>
          We used react to develop the front end then using NodeJS along with
          <a href="https://expressjs.com/" target="_blank"> Express </a>,
          <a href="https://www.postgresql.org/" target="_blank"> PostgreSQL </a>, 
          <a href="https://sequelize.org/" target="_blank"> Sequelize </a>, 
          <a href="https://www.twilio.com/" target="_blank"> Twilio API </a> and 
          <a href="https://sendgrid.com/" target="_blank"> SENDGRID API </a> 
          to develop the back end. The proof of concept was deployed on 
          <a href="https://www.heroku.com/" target="_blank"> Heroku </a>. <br/><br/>
          I worked on a mixture of front and back-end, where I developed the messaging and email system, integrated front-end 
          with our API and developed a series of components and functionalities on the front-end. I also helped other members 
          of the team on the front-end if they ran into any issues.
        `),
        new Project(
          "/images/scrabble.webp",
          "Scrabble ProjectdX",
          "Year 1 Scrabble Project",
          `For 50% of our Application Programming module for year 1 of my Software Engineering degree we were asked to make a game of scrabble using HTML, CSS and Javascript.<br/>`,
          `
            For 50% of our Application Programming module for year 1 of my Software Engineering degree we were asked to make a game of scrabble using HTML, CSS and Javascript.<br/><br/>
            For this coursework I decided to go above and beyond with my project, enabling
            the user to play online multiplayer using lobbys to connect to each others game rather than just making a single player
            local game.<br/><br/> 
            I have managed to program a working online multiplayer game of scrabble using websockets to allow the multiplayer lobbies
            to function. All the code for the project is viewable on my 
            <a href="https://github.com/jaketbailey/scrabble-coursework" target="_blank"> GitHub</a>.
          `),
          new Project(
            "/images/FTP.webp",
            "FTP Client",
            "Simple FTP Client",
            `This is a small scale project from when I was initially tinkering with Node.JS in 2020 during the COVID-19 Pandemic.</br>`,
            `
              This is a small scale project from when I was initially tinkering with Node.JS in 2020 during the COVID-19 Pandemic.</br><br/>
              It is a very simple command line style FTP (File Transfer Protocol) client. I have based interaction with the client
              from bash using commands like cd to navigate directories etc. <br/><br/>
              I have plans to continue on with this project, but for now it
              can connect with an FTP server using the details the user can input. <br/>It also has support for TLS/SSL encryption and for FTP
              servers hosted on different ports. It can also currently navigate through directories.<br/><br/> All the code for the project is viewable on my 
              <a href="https://github.com/jaketbailey/ftp-client" target="_blank"> GitHub</a>.
            `),
            new Project(
              "/images/jake.webp",
              "Old Portfolio",
              "Old Portfolio Website",
              `I started making this portfolio website from scratch in 2020 and maintained it till September 2022 as previously I had used a website maker e.g. Wix Editor to make my website. <br/>`,
              `
                I started making this portfolio website from scratch in 2020 and maintained it till September 2022 as previously I had used a website maker e.g. Wix Editor to make my website. <br/><br/>
                As I had more time during the lockdown in 2020, I chose to make this website from scratch and host it all myself. 
                In making the website it allowed me to extend my skills coding in HTML, CSS, Javascript and Node.js.<br/><br/>
                Since making the original website I have updated it multiple times and I am always trying to make it better
                every time. I use this for all my projects, contact details as well as an online CV. <br/><br/>All the code for the project is viewable on my 
                <a href="https://github.com/jaketbailey/website" target="_blank"> GitHub</a>.
              `),
              new Project(
                "/images/heidi.webp",
                "Heidi Old Portfolio",
                "Heidi's Old Portfolio Website",
                `I have made a portfolio website using HTML, CSS and JS for my older sibling. <br/>`,
                `
                  I have made a portfolio website using HTML, CSS and JS for my older sibling. <br/><br/>
                  As I had more time during the lockdown in 2020, I chose to make this website from scratch and host it all myself. 
                  It is a similar website to my original portfolio site, with a different colour scheme and content. <br/><br/>They use this website as a portfolio and
                  online CV, any updates they needs to the website I will add and manage. I will also add any of their current
                  work to the website if and when necessary. <br/><br/>You can see their website <a href="https://heidibailey.co.uk" target="_blank">Here</a> and all the code for the project is viewable on my 
                  <a href="https://github.com/jaketbailey/heidi-portfolio" target="_blank" > GitHub</a>.
                `),
                new Project(
                  "/images/Menu.png",
                  "A Level Coursework",
                  "A Level Computer Science Project",
                  `For my A Level coursework I created a cycling tracker windows forms program using VisualBasic.NET. <br/>`,
                  `
                    For my A Level coursework I created a cycling tracker windows forms program using VisualBasic.NET. <br/><br/>
                    The charity bike ride I completed in 2016 was the inspiration for this program. The system that I made aimed to act as a client version of current systems such as strava.com. 
                    The system was designed to allow the user to enter all their past bike ride data which can then be compared against itself and other user's data. 
                    <br/><br/>If I had more time on this project I would have stored all the information on an external database rather than within text files on the user's 
                    computer. The time limitation meant that the comparisons with other users was quite limited and every time the user was on a new computer their 
                    information would have to be re-entered into the system. <br/><br/>If this was a larger scale project then the larger aims could've been accomplished.<br/><br/> 
                    I have achieved a provisional grade A* for this project, and the code can be found on my 
                    <a href="https://github.com/jaketbailey/alevel-coursework" target="_blank"> GitHub</a>.
                  `),
                  new Project(
                    "/images/LEJOG.webp",
                    "LEJOG 2016",
                    "Land's End to John O'Groats 2016",
                    `In 2016 I cycled from Land's End to John O'Groats to raise money for charity. I raised a total of £7,300 which was then split between 3 charities: Autoimmune Alopecia Research UK, Birmingham Children's Hospital and Sandwell Young Carers. <br/>`,
                    `
                    In 2016 I cycled from Land's End to John O'Groats to raise money for charity. I raised a total of £7,300 which was then split between 3 charities: Autoimmune Alopecia Research UK, Birmingham Children's Hospital and Sandwell Young Carers. <br/><br/>
                      I trained for this bike ride weekly for over a year. 
                      During the training process, we met up with <a href="https://markbeaumontonline.com/" target="_blank"> Mark Beaumont </a> who gave us advice 
                      on what equipment to use for the bike ride as well as different training strategies to use when approaching the ride. <br/><br/>
                      I also attracted the attention of the BBC's David Lumb who reported on my Dad and I which was later broadcast on BBC Midland's Today. 
                      I also got an interview with BBC Radio 5 Live where we discussed the charity cycle and some of our tips from our training experience.  <br/><br/>
                      For a gallery of photos from the ride see <a href="https://photos.app.goo.gl/rdVSqoFaRooboQPL6" target="_blank">Here</a>
                    `),
  ];

  return projects.map((project) => {
    return (
      <PortfolioItem
        image={project.image}
        alt={project.alt}
        title={project.title}
        description={project.description}
        content={project.content}
      />
    );
  });
}

export default function Portfolio() {
  
  return (
    <div id="portfolio" class="container mt-3">
      <h3 class="pt-5">Portfolio</h3>
      <div class="row pt-2 justify-content-center">
        {getProjects()}
      </div>
    </div>
  )
}
