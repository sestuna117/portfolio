import React, { useEffect } from "react";
import "../Page.css";
import "./AboutPage.css";
import resume from "../../links/resume.pdf";
import user_instructions from "../../links/user_instructions.pdf";
import press_release from "../../links/press_release.pdf";
import cover_letter from "../../links/cover-letter.pdf";

const SKILLS_LIST = [
  "Java",
  "Python",
  "Javascript (React)",
  "Typescript (React)",
  "HTML/CSS",
  "Node.js",
  "Rest API",
  "Ocaml",
  "Ruby",
  "MIPS Assembly",
  "Github",
];

const SBU_COURSE_LIST: { id: string; name: string }[] = [
  { id: "CSE 214", name: "Data Structures" },
  { id: "CSE 215", name: "Foundation of Comp Science" },
  { id: "CSE 216", name: "Programming Abstractions" },
  { id: "CSE 220", name: "System Fundamentals I" },
  { id: "CSE 300", name: "Technical Communications" },
  { id: "CSE 310", name: "Computer Networks" },
  { id: "CSE 316", name: "Software Development" },
  { id: "CSE 331", name: "Computer Security Fundamentals" },
  { id: "CSE 337", name: "Scripting Languages" },
  { id: "CSE 373", name: "Analysis of Algorithms" },
  { id: "CSE 416", name: "Software Engineering" },
];

const CSE_300_WRITING_ASSIGNMENTS: { title: string; link: string }[] = [
  { title: "Resume", link: resume },
  { title: "Cover Letter", link: cover_letter },
  { title: "User Instructions", link: user_instructions },
  { title: "Press Release", link: press_release },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <div className="about-page">
      <div className="content-page">
        <div className="content-header">
          <h2 className="content-header-name">About</h2>
        </div>
        <div className="content-body">
          <p>
            I am currently enrolled as a senior at Stony Brook University
            studying for the Computer Science major. I am passionate about
            web-development and love learning new technologies to further
            improve my skills.
          </p>
          <p>
            I enjoy playing games and drawing. If I'm not doing one of those
            things, I'm likely think up about what I wanna try building for my
            next project.
          </p>
          <p>
            I first got onto web development during my junior year in university
            when my friend/mentor of sorts (you know who you are) convinced me
            to try developing something that I could actually use or enjoy. Thus
            I decided to make a stat tracker site for the popular MOBA game
            League of Legends. While developing my first site, I learned of the
            instance gratification that web development could give you, and it
            helped motivate me even more to continue. Since then I've been
            hooked on making websites and pages.
          </p>
        </div>
        <div className="content-header">
          <h2 className="content-header-name">Skills</h2>
        </div>
        <div className="content-body">
          <ul className="about-skills-list">
            {SKILLS_LIST.map((skill) => (
              <li key={skill} className="about-skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="content-header">
          <h2 className="content-header-name">Experience</h2>
        </div>
        <div className="content-body">
          <ul className="about-ed-list">
            <li className="school-item">
              <div className="about-ed-header">
                <div className="about-ed-school-header">
                  <h4>IBM</h4>
                  <span>May 2022 - August 2022</span>
                </div>
                <div className="about-ed-school-header">
                  <h4>Front End Developer Intern</h4>
                  <span>Southbury, CT</span>
                </div>
              </div>
              <div>
                <h4 className="about-ed-course-header">Description</h4>
                <ul className="about-ed-course-list">
                  <li>
                    Worked in Agile team to develop internal ledger web
                    application used within the company.
                  </li>
                  <li>
                    Developed new landing page for web application to be used by
                    thousands of IBMers.
                  </li>
                  <li>
                    Participated in IBM's Be(e) Innovative Intern Challenge and
                    collaborated on a team with 4 other interns to create and
                    design an IT solution to combat food and plastic waste
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-header">
          <h2 className="content-header-name">Education</h2>
        </div>
        <div className="content-body">
          <ul className="about-ed-list">
            <li className="school-item">
              <div className="about-ed-header">
                <div className="about-ed-school-header">
                  <h4>Stony Brook University</h4>
                  <span>2020 - Present</span>
                </div>
                <div className="about-ed-school-header">
                  <h4>Computer Science, B.S.</h4>
                  <span>Stony Brook, NY</span>
                </div>
              </div>
              <div>
                <h4 className="about-ed-course-header">Relevant Coursework:</h4>
                <ul className="about-ed-course-list">
                  {SBU_COURSE_LIST.map(({ id, name }) => (
                    <li key={name}>
                      {id + " " + name}
                      {id === "CSE 300" && (
                        <ul>
                          {CSE_300_WRITING_ASSIGNMENTS.map(
                            ({ title, link }) => (
                              <li>
                                <a
                                  className="ed-resource-link"
                                  href={link}
                                  target="_blank"
                                >
                                  {title}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="school-item">
              <div className="about-ed-header">
                <div className="about-ed-school-header">
                  <h4>Dutchess Community College</h4>
                  <span>2018 - 2020</span>
                </div>
                <div className="about-ed-school-header">
                  <h4>Computer Science, A.S.</h4>
                  <span>Poughkeepsie, NY</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
