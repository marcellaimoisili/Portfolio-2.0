import React, { Component } from 'react';
import './all.css';
import WorkContainer from './WorkContainer.jsx';
import WorkDrivenApp from './WorkDrivenApp';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


class Home extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {inputVal:"Click Button to get Date"};
    //     this.changeVal = this.changeVal.bind(this);
    // }

    // changeVal(e){
    //     this.setState({inputVal: Date.now()});
    // }
    render() {
    return (
        <div className="Home">
                    <div className="demo-big-content">
                <Layout>
                    <Header title="Marcella Imoisili" scroll>
                        <Navigation>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Work</Link>
                            <Link to="/gallery">Gallery</Link>
                            {/* <Link to="/resume">Resume</Link> */}
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                     {/* <Drawer title="Title">
                        <Navigation>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Work</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>  */}
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
            <header className="Home-header">
            <h1>Portfolio Under Construction</h1>
            </header>
            <WorkDrivenApp></WorkDrivenApp>
            {/* <WorkContainer name={"SilverbirdTV"} info={"Location: (Silverbird Cinemas Galleria) 133 Ahmadu Bello Way, Victoria Island, Lagos - Nigeria"}></WorkContainer>
            <WorkContainer name={"Coursework"} info={"Course: (INFO 1300) Introductory Design and Programming for the Web - Cornell University"}></WorkContainer> */}
            {/* <div>
                <input type="text" placeholder="name" value={this.state.inputVal}/>
                <button onClick={this.changeVal}/>
            </div> */}
        </div>
    );
  }
}

export default Home;
