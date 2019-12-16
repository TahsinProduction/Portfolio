import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h2 className="mb-0">
            <span className="text-primary">{config.firstName}</span>
          </h2>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          Hi!👋🏻 It's Tahsin here. I am the founder of TahsinProduction. I am a <b>Web Developer</b>💻, <b>Web Designer</b>🖌️, <b>Content Producer</b>🖋️, <b>Web Investigator</b>🕵🏻‍, <b>Business Magnet</b>🧲, <b>Web Crawler</b>🕷️, <b>Complex Problem Solver</b>✔️, <b>Inquisitive learner</b>📖, <b>Deep Thinker</b>🤔. Good at lots of things but expert in none. TahsinProduction is my dream project which I am trying to make true without anybody's help. I am the most practical person you have ever met. Most of the work is done in Russia but I don't even live in Russia.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">level: medium</div>
              <p>
              I am a Web Developer. I can make websites in Blogger, WordPress and static site. I can highly customize the look and the feel of the website. I have worked with a couple of small to middle size companies as a freelance web developer. I have created some professional websites for some individual client. And I am the senior web developer at TahsinProduction.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Designer</h3>
              <div className="subheading mb-3">level: medium</div>
              <p>
              I am a Web Designer. I can design an industry-standard UI/UX design. I usually work most of the time in this field. This is one of the things I like to work on. Designed many websites for other people and got a chance to communicate with some of the experts in this field. Even though most of the Web Design on TahsinProduction not done by me.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Investigator</h3>
              <div className="subheading mb-3">level: high</div>
              <p>
              I am very good at finding data through the internet. By using different techniques I can find information on the internet. I am highly trained in this field by some of the specialists. By applying different methods, different approaches and with a bit of luck, I can find almost any information lying on the internet for advanced people. I utilize not only google but also many other technologies which is untouched by an average person. This skill is a blessing for me.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Digital content editing</h3>
              <div className="subheading mb-3">level: high</div>
              <p>
              I can manipulate photos, videos and voices. I know how to use Photoshop, Illustrator, Premiere Pro, After Effects, Adobe Audition and some other software. I worked on a huge photo editing project, which turned out great.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Ethical Hacker</h3>
              <div className="subheading mb-3">level: medium-high</div>
              <p>
              I am not an ethical hacker, but I did learn ethical hacking. I love experimenting with it. This is not a professional skill, but I still like to tell other people how a particular thing can be hacked. It was my childhood fantasy from Hollywood movies.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">First Unsuccessfull Suicide Attempt</h3>
              <div className="subheading mb-3">This unsuccessfull attempt educated me a lot about how life is so important and how I should live my life. It was the turning point of my life.</div>
              <p>Impact: 9.50</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 9th, 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Death of my closest friend</h3>
              <div className="subheading mb-3">On this day Yekaterina died after suffering from Pneumonia. After her death I understood the imporance of giving time to the love one's.</div>
              <p>Impact: 10.00</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 14th, 2018</span>
            </div>
          </div>
          <p className="mb-0">
          <b>From my childhood I heard all the time that I have to be an Engineer. So, at first I wanted to be a Electric and Electronical Engineering, then Programmer, then Doctor, then a shop owner, then a farm owner, then a Marine Engineer, then an English Professor, then a banker, then a Pilot and now I want to be a Barrister.</b>
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i><b>
              I can fix a lot of things or at least try.
            </b></li>
            <li>
              <i className="fa-li fa fa-check"></i><b>
              I can do carpentry with power tools.
            </b></li>
            <li>
              <i className="fa-li fa fa-check"></i><b>
              I can cook. But only when I am watching recipes on YouTube.
            </b></li>
            <li>
              <i className="fa-li fa fa-check"></i><b>
              I can create things that simplify the complex work.
            </b></li>
            <li>
              <i className="fa-li fa fa-check"></i><b>
              I know how to do some secret magic, but don't have the proper gear.
            </b></li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
          Apart from being a web developer, I enjoy most of my time staying in the home doing much indoor fun stuff. I love horror movies even though horror movies don't scare me and for this reason I usually watch horror movies at 3A.M. When everybody is sleeping. I mostly hate human interaction and for reason I stay at home most of the time. I like to invent things or discover something new, so I usually try to create hardware when I am not developing any software, also I love to repair and restore things in my free time. I am a foodie and also a picky eater. I love listening to Audiobooks.
          </p>
          <p className="mb-0">
          When I am out of home, I mostly like to visit shopping malls or supermarket because I try to grab as much things as possible because I don't get out much and it's much cost effective to get most of supplies at once rather than going to market again & again. I do like to explore places but if there is something I want to get from that place, not for useless fun travel. I don't like it, but sometimes I just visit close relatives to just make sure that I am still part of the family.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="ambition"
      >
        <div className="w-100">
          <h2 className="mb-5">Ambition</h2>
          <p>
          I am not a very ambitious person, but there are some things I dreamt about in my childhood, which I made true and some things left to make true. I am writing about some of my dreams dreams below.
          </p>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              I want to be a better person than the previous day. I want to become a better person than what I was before that day and it can be done by gaining knowledge and doing good things for society. Also, I want people to remember me after my death, but not for the money made, for the life I had lived.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              I want to buy a home small sweet home in a remote village where there is hardly any technology available. I want to build that home very far from the locality and even if I build in a society I will make sure that there is no negative people, because negative people always spread negativity. My life is already full of negative people so don't want any negative people in the future. I will live in that home with as less people as possible, so I can find peace.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              I want to build an orphanage. Most of the people don't know, but I am partially orphan. Like I have father and mother both, but I have none. But I grew up like an orphan. My life was way worse than the child grew up in an orphanage. My life was hard and it is still hard, that time I couldn't even think about being a better person because life was so messed up. Life was hell, live was painful and the thought of committing suicide came again and again in mind. Nothing but people of this society did all of this. I can understand their feeling and that's why my orphanage will be different. The main focus will be mental health. No drug addict will be allowed though
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              I want to build a Retirement Home or an Old Age Home. I feel bad for those old people whose children don't want to stay with them. Those old people feel lonely and sometimes have to go through terrible situations. Most of the time older people have no one to talk to. Whenever I go to a house in which there is an old person, I spend time talking with him rather than playing with other kids. Even weekend I visit my grandmother to spend with her. No drug addict will be allowed
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              I want to adopt an orphan rather than having my own child. I have two reasons for doing this. The first and the most important thing is there is someone who just need a hand to get out of his/her terrible life. Your one hand can make someone's life better. The second reason is overpopulation. The world is exploding with overpopulation, there is already kid way more than the world can handle, so why bring another and increase the problem. I got another one, there is a very little chance of women dying during pregnancy. I know it's extremely rare, but why take risks. People have their own kids thinking that kid will carry their genetics and this is the reason most people don't adopt other people's kid. I have seen many people adopt animals, but when hear about adopting a child, they don't want to do it. They can spend thousands of dollars on vet, but not on a child. Even in most foster homes children suffer because they don't want the kid instead they want the money that the government gives them. It's shameful. For me, it's not an option but a choice.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Never want to marry in life. There hundreds of reasons for that, but don't wanna talk about any. This is one of the reasons I don't have any girlfriend. People say life is hard without loved ones, but I don't see a reason why it can be hard because most people get divorced after a marriage or start having an affair.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              I want to be influential in society so I do things like, throw drug addicts our of the country and stop people from having a divorce if they already have a child. Even though I know it's never gonna come true. At the same time, I don't want to be an influential person because the usually go through a high mental pressure which I am not willing to take.
            </li>
          </ul>
          <p className="mb-0">
          <b>"We are not here to just eat and die" All of these are my own personal opinion about life</b>
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="weakness"
      >
        <div className="w-100">
          <h2 className="mb-5">weakness</h2>
          <p className="mb-0">
          <b>Like every other thing in this world, I also have my own flaws and a portfolio shouldn't be complete without flaws</b>
          </p>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-bomb text-warning"></i>
              <b>Mental:</b> Let's start with the processor of the human body. I have many flaws in this part. I have Depression Disorder. I have early signs of Dementia. I have Dissociative Identity Disorder which is also known as Multiple Personality Disorder. Maybe I am the first person to admit that, but I have Antisocial Personality Disorder, which is sometimes known as Psychopathic Personality Disorder but I am trying hard to get rid of it also I opted myself for treatment. I chose to have treatment in another continent rather than my native country. At first nobody told that I have any disorder, but I have some problem with my brain. Doctor said that I did a good job to consult do a doctor rather than having narcotic drugs and my brain is better than other people's brain because I can understand which is good & which is bad for me. I work on my problems, to solve them. And I am improving fast.
            </li>
            <li>
              <i className="fa-li fa fa-bomb text-warning"></i>
              <b>Physical:</b> I don't have much physical problem. I have dust allergy and muscle pain when I do physical intensive work. That's all.
            </li>
            <li>
              <i className="fa-li fa fa-bomb text-warning"></i>
              <b>Family:</b> My family is a huge pain for me. Even this is one of the biggest reason of all of my mental disorders. My doctor told me to get rid of the family and start living in a good neighborhood because this family is very toxic which is harmful for me. Their toxic words are the main reason of my mental illness.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
