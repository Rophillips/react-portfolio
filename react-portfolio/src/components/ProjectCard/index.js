import React from "react";
import { Link } from "react-router-dom";
import "./index.js";
import "./style.css";
//import "./components/pages/Project";



function ProjectCard(props) {
    return (
        // <div className="row">
        // <div className="col-sm-4 mb-5">
        //   <div className="card h-100">
        //     <img className="card-img-top" src="https://github.com/kierajcullen/goodeats/raw/main/img/goodeats.gif"
        //       alt="GitHub Images">
        //     <div className="card-body">
        //       <h3 className="card-title">Project One - "Good Eats"</h3>
        //       <p className="card-text">Our project incorporates two APIs and allows users to optimize their recipe search by ingredient or title. Our team worked together to create a responsive website that is incredibly user friendly.
        //         </p>
        //     </div>
        //     <div className="card-footer">
        //       <a href="https://kierajcullen.github.io/goodeats/" class="btn btn-primary">Deployed Site</a>
        //       <a href="https://github.com/kierajcullen/goodeats" class="btn btn-secondary">GitHub Repo</a>
        //     </div>
        // </div>

        <div className="card-body">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    {/* <li>
                        <strong>Address:</strong> {props.location}
                    </li> */}
                </ul>
            </div>
            <span className="remove" onClick={() => props.handleRemove(props.id)}>𝘅</span>
        </div>
    );
}




export default ProjectCard;