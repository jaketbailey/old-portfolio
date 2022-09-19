
export default function Portfolio() {
  
  return (
    <div id="portfolio" class="container mt-3">
      <h3 class="pt-5">Portfolio</h3>
      <div class="row pt-2 justify-content-center">
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/blockshop.webp" class="card-img-top" alt="Lego© Store Project"/>
            <div class="card-body">
            <h5 class="card-title">Year 2 Lego© Store Project</h5>
              For 100% of the Year 2 Application Engineering Module I was set with a task to create, from scratch a Lego© E-commerce store.<br/>
              <p class="card-text collapse" id="card1">
                Payments would be black-box (as it wouldn't be an actual deployed store). 
                The task was to implement accounts, a basket system, a backed fullfillment process and hold a catalog
                of all the products. The store would be hosted on a web server hosted on port 8080 and would be accessed 
                via a web browser. <br/>I used Auth0 to set up oauth authentication so that accounts would be handles externally
                rather than storing passwords in the database. <br/>Each account would have some information stored on the database
                e.g. shipping address etc. Each customer could make multiple orders once another was fullfilled (once an order
                had been processed through checkout). In the end I received a final grade of 77, which is a high first for this
                module. <br/> All the source code is viewable on my 
                <a href="https://github.com/jaketbailey/app-eng-lego" target="_blank"> GitHub</a>
              </p>
            <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card1" aria-expanded="false" aria-controls="collapseExample">
              Read More
            </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/floodx.webp" class="card-img-top" alt="FloodX"/>
            <div class="card-body">
            <h5 class="card-title">FloodX Flood Management</h5>
              For 50% of our Software Engineering Theory and Practice (SETAP) module I was in a team of 6 developers and we had to come up with an idea to make a flood management system.<br/>
              <p class="card-text collapse" id="card2">
                This team project was far more strictly organised in comparison to a solo development project 
                as the team followed an Agile development module using Jira for a Kanban board. We got permission
                from Hampshire County Council to make a proof of concept (minimum viable product) flood management system.
                We used react to develop the front end then using NodeJS along with
                <a href="https://expressjs.com/" target="_blank"> Express </a>,
                <a href="https://www.postgresql.org/" target="_blank"> PostgreSQL </a>, 
                <a href="https://sequelize.org/" target="_blank"> Sequelize </a>, 
                <a href="https://www.twilio.com/" target="_blank"> Twilio API </a> and 
                <a href="https://sendgrid.com/" target="_blank"> SENDGRID API </a> 
                to develop the back end. The proof of concept was deployed on 
                <a href="https://www.heroku.com/" target="_blank"> Heroku </a>. <br/>
                I worked on a mixture of front and back-end, where I developed the messaging and email system, integrated front-end 
                with our API and developed a series of components and functionalities on the front-end. I also helped other members 
                of the team on the front-end if they ran into any issues.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card2" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/scrabble.webp" class="card-img-top" alt="Scrabble Project"/>
            <div class="card-body">
            <h5 class="card-title">Year 1 Scrabble Project</h5>
            For 50% of our Application Programming module for year 1 of my Software Engineering degree we were asked to make a game of scrabble using HTML, CSS and Javascript.<br/>
              <p class="card-text collapse" id="card3">
                For this coursework I decided to go above and beyond with my project, enabling
                the user to play online multiplayer using lobbys to connect to each others game rather than just making a single player
                local game. I have managed to program a working online multiplayer game of scrabble using websockets to allow the multiplayer lobbies
                to function. All the code for the project is viewable on my 
                <a href="https://github.com/jaketbailey/scrabble-coursework" target="_blank"> GitHub</a>.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card3" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/http.webp" class="card-img-top" alt="HTTP Status Checker"/>
            <div class="card-body">
            <h5 class="card-title">Simple HTTP Status Checker</h5>
              This small project I decided to make quickly to essentially help me keep up to date with my webserver.<br/>
              <p class="card-text collapse" id="card4">
                My webserver hosts this website, my sister's and I have another webserver hosting my scrabble game. This small
                Node application can be ran on a server and will essentially keep pinging a specific ip address and if the HTTP code returns anything
                other than 200 OK, I will receive a text message using the <a href="https://www.twilio.com/" target="_blank"> Twilio API </a> updating me of the situation so that I know to go and check my webserver to figure out
                what the issue is. <br/>The code is viewable on my <a href="https://github.com/jaketbailey/status-check" target="_blank"> Github</a>.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card4" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">        
          <div class="card w-10">
            <img src="/images/FTP.webp" class="card-img-top" alt="FTP Client"/>
            <div class="card-body">
            <h5 class="card-title">Simple FTP-Client</h5>
              This is a small scale project from when I was initially tinkering with Node.JS in 2020 during the COVID-19 Pandemic. <br/>
              <p class="card-text collapse" id="card5">
                It is a very simple command line style FTP (File Transfer Protocol) client. I have based interaction with the client
                from bash using commands like cd to navigate directories etc. I have plans to continue on with this project, but for now it
                can connect with an FTP server using the details the user can input. <br/>It also has support for TLS/SSL encryption and for FTP
                servers hosted on different ports. It can also currently navigate through directories.<br/> All the code for the project is viewable on my 
                <a href="https://github.com/jaketbailey/ftp-client" target="_blank"> GitHub</a>.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card5" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/jake.webp" class="card-img-top" alt="Old Portfolio"/>
            <div class="card-body">
            <h5 class="card-title">Old Portfolio Website</h5>
              I started making this portfolio website from scratch in 2020 and maintained it till September 2022 as previously I had used a website maker e.g. Wix Editor to make my website. <br/>
              <p class="card-text collapse" id="card6">
              As I had more time during the lockdown in 2020, I chose to make this website from scratch and host it all myself. 
              In making the website it allowed me to extend my skills coding in HTML, CSS, Javascript and Node.js.
              Since making the original website I have updated it multiple times and I am always trying to make it better
              every time. I use this for all my projects, contact details as well as an online CV. <br/>All the code for the project is viewable on my 
              <a href="https://github.com/jaketbailey/website" target="_blank"> GitHub</a>.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card6" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/heidi.webp" class="card-img-top" alt="Heidi Portfolio"/>
            <div class="card-body">
            <h5 class="card-title">Portfolio Website</h5>
              I have made a portfolio website using HTML, CSS and JS for my older sibling. <br/>
              <p class="card-text collapse" id="card7">
              As I had more time during the lockdown in 2020, I chose to make this website from scratch and host it all myself. 
              It is a similar website to my original portfolio site, with a different colour scheme and content. They use this website as a portfolio and
              online CV, any updates they needs to the website I will add and manage. I will also add any of their current
              work to the website if and when necessary. <br/>You can see their website <a href="https://heidibailey.co.uk" target="_blank">Here</a> and all the code for the project is viewable on my 
               <a href="https://github.com/jaketbailey/heidi-portfolio" target="_blank" > GitHub</a>.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card7" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            <img src="/images/Menu.png" class="card-img-top" alt="A Level Coursework"/>
            <div class="card-body">
            <h5 class="card-title">A Level Computer Science Project</h5>
              For my A Level coursework I created a cycling tracker windows forms program using VisualBasic.NET. <br/>
              <p class="card-text collapse" id="card8">
                The charity bike ride I completed in 2016 was the inspiration for this program. The system that I made aimed to act as a client version of current systems such as strava.com. 
                The system was designed to allow the user to enter all their past bike ride data which can then be compared against itself and other user's data. 
                <br/>If I had more time on this project I would have stored all the information on an external database rather than within text files on the user's 
                computer. The time limitation meant that the comparisons with other users was quite limited and every time the user was on a new computer their 
                information would have to be re-entered into the system. <br/>If this was a larger scale project then the larger aims could've been accomplished. 
                I have achieved a provisional grade A* for this project, and the code can be found on my 
                <a href="https://github.com/jaketbailey/alevel-coursework" target="_blank"> GitHub</a>.
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card8" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
          <div class="card w-10">
            {/* <div class="ratio ratio-16x9 ">
              <iframe class="card-img-top " src="/videos/LEJOG.webm" autoplay="false" title="LEJOG News Report" allowFullScreen/>
            </div> */}
            <div class="card-body">
            <h5 class="card-title">Land's End to John O'Groats 2016</h5>
              In 2016 I cycled from Land's End to John O'Groats to raise money for charity. I raised a total of £7,300 which was then split between 3 charities: Autoimmune Alopecia Research UK, Birmingham Children's Hospital and Sandwell Young Carers. <br/>
              <p class="card-text collapse" id="card9">
                I trained for this bike ride weekly for over a year. 
                During the training process, we met up with <a href="https://markbeaumontonline.com/" target="_blank"> Mark Beaumont </a> who gave us advice 
                on what equipment to use for the bike ride as well as different training strategies to use when approaching the ride. 
                I also attracted the attention of the BBC's David Lumb who reported on my Dad and I which was later broadcast on BBC Midland's Today. 
                I also got an interview with BBC Radio 5 Live where we discussed the charity cycle and some of our tips from our training experience.  
                For a gallery of photos from the ride see <a href="https://photos.app.goo.gl/rdVSqoFaRooboQPL6" target="_blank">Here</a>
              </p>
              <button class="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#card9" aria-expanded="false" aria-controls="collapseExample">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
