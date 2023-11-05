/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Wordlist-Generator",
    description:
      "It is Created to Enable Ethical Hackers to download their preferable Wordlists. As we all know, wordlists play an important part in an ethical hacker’s job. Preference makes it easier for the hacker to brute force efficiently. Therefore, we have designed this Wordlist Generator to overcome this problem get started.",
    url: "https://github.com/Dheerajjha451/wordlist.github.io",
  },
  {
    title: "News-Mental-health",
    description:
      "A news website which tells the user about latest scenario of mental health in the world. It also tells about the latest news related to mental health.",
    url: "https://github.com/Dheerajjha451/News-Mental-health",
  },

  {
    title: "QR-Attendance System",
    description:
      "A QR-Attendance System is a system that is used to take attendance of students in a class. It is a simple and efficient way to take attendance. It is a system that is used to take attendance of students in a class.",
    url: "https://github.com/Dheerajjha451/QR-Attendance-System",
  },

  {
    title: "VitalEase",
    description:
      "VitalEase revolutionizes elderly care, offering simplified medication management, streamlined communication, and remote monitoring for an enhanced quality of life.",
    url: "https://github.com/Dheerajjha451/vital-ease",
  },

  {
    title: "StudBud",
    description:
      "Stay informed, make the most of your academic journey, and explore endless opportunities with StudBud. Welcome to a world of authentic, relevant information right at your fingertips.",
    url: "https://github.com/Dheerajjha451/StudBud",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
