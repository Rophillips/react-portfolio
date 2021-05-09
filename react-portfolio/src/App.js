import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Projects from './Projects.json';
import ProjectCard from "./components/ProjectCard";
import Wrapper from "./components/Wrapper";


class App extends Component {
  state = {
    Projects: [...Projects]
  }
  handleRemove = id => {
    // console.log(this.state);
    this.setState({
      Projects: this.state.Projects.filter(Project => Project.id !== id)
    });
  }

render() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route path="/projectCard" component={ProjectCard} />
        <Route path="/contact" component={Contact} />
        <Wrapper/>
        {/* {this.state.project.map( project => (
          <ProjectCard
            key={project.id}
            handleRemove={this.handleRemove}
            {...project}
          />
        ))} */}
        
        </div>
        <div className="/Footer">
           <Footer/>
       </div>

  </Router>
  
  );
}
}
export default App;
