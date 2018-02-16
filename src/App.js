import React, { Component } from 'react';
import $ from "jquery";
import './styles/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };

    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  
  componentDidMount() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
  
  renderLinks( links ) {
    return links.map((link) => {
      return <a href={link.link} target="_blank">{link.name}</a>;
    });
  }

  handleForward(event) {
    console.log("click");
    if(this.state.index >= this.props.portfolio.length-1) {
      this.setState({index: 0 });
    } else {
      this.setState({index:this.state.index + 1})
    }
  }
  handleBack() {
    console.log(this.state.index);
    if( this.state.index > 0 ) {
      this.setState({index:this.state.index - 1})
    } else {
      this.setState({index: this.props.portfolio.length-1});
    }
  }
  render() {
    const index = this.state.index;
    
    
    return (
    <div>
      <div className="top-page container">

      <div className="logo"> 
        <h2>L</h2>
        <h2 style={{color:"#E91E63"}}>E</h2>
        <h2>A</h2>
        <h2 style={{color:"#E91E63"}}>H</h2> 
        <h2>C  <span style={{color:"#E91E63"}}>A</span>   R   <span style={{color:"#E91E63"}}>R</span></h2>
      </div>

      <div>
        <div className="card intro">
          <div className="card-content">
            <p>Hi! I'm a JavaScript developer with experience in the following technologies</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
            <p>Check out my portfolio below :)</p>
          </div>
        </div>
        <div className="card contact">
          <div className="card-content" style={{verticalAlign:"middle"}}>
            <h5>Connect</h5>
            <p style={{marginTop:40}}><i className="material-icons" style={{verticalAlign:"bottom"}}>email</i> leah.carr@gmail.com</p>
            <p><i className="material-icons" style={{verticalAlign:"bottom"}}>phone</i> 0437 758 311</p>
            <p style={{marginTop:40}}>Codepen: <a href="https://codepen.io/attributeofextension/" target="_blank">https://codepen.io/attributeofextension</a></p>
            <p style={{marginTop:40}}>Github: <a href="https://github.com/attributeofextension" target="_blank">https://github.com/attributeofextension</a></p>
          </div>
        </div>
      </div>
        <a className="btn-floating btn-large waves-effect waves-light red next-page" href="#portfolio"><i class="material-icons">arrow_downward</i></a>
        <div className="shadow1" />
      
      </div>
      <div className="portfolio">
        <a id="portfolio"></a>
        <div className="card portfolio-pane"> 
          <div className="card-image">
            <a href={this.props.portfolio[index].link} target="_blank">
              <img src={this.props.portfolio[index].img} className="portfolio-img" />
            </a>
            <div className="valign-wrapper">
              <a class="btn-floating halfway-fab waves-effect waves-light red left portfolio-nav" onClick={this.handleBack}><i class="material-icons">arrow_back</i></a>
              <a class="btn-floating halfway-fab waves-effect waves-light red portfolio-nav" onClick={(e)=>this.handleForward(e)}><i class="material-icons">arrow_forward</i></a>
            </div>
          </div>
          <div className="card-content" style={{textAlign:"center"}}>
              <p>{this.props.portfolio[index].caption}</p>
          </div>
          <div className="card-action">
            {this.renderLinks(this.props.portfolio[index].links)}
          </div>
          
        </div>
      </div>
    </div>
    );
  }
}

export default App;
