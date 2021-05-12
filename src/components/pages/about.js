import React from "react";

import profilePicture from "../../../static/assets/images/bio/m_chloe.jpg";

export default function About() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: `url(${profilePicture}) no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="right-column">
                <h2>About Me:</h2>
                <p>
                    I love to learn new things and accept challenging projects.
                    Above all things I value a good team and being a valuable
                    member of that team. I have a great attitude and feel like I
                    would be an excellent addition to any workforce.
                </p>
                <h2>Hobbies:</h2>
                <p>
                    I enjoy playing Irish folk music on my mandolin, playing
                    survival games and simulators, trying out new VR games as
                    they come out, playing board games with my children, reading
                    fantasy series, researching and learning new things. In the
                    evenings I enjoy playing through the{" "}
                    <a
                        href="https://www.codewars.com/users/cbass07"
                        target="_blank"
                    >
                        codewars challenge website
                    </a>
                    .
                </p>
                <div>
                    <ul>
                        <h2>Preffered Languages:</h2>
                        <li>MongoDB, ExpressJS, ReactJS, NodeJS (MERN)</li>
                        <h2>Skills:</h2>
                        <li>
                            Python 3, Javascript, ReactJS, NodeJS, ExpressJS,
                            React Native, Firebase, AWS, Redux, HTML5, CSS,
                            Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS,
                            Flexbox, CSS Grid{" "}
                        </li>

                        <li>
                            a good attitude, strong listening skills, critical
                            thinking, focus, adaptability, love of a good
                            challenge
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
