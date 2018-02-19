import React, { Component } from 'react';
import $ from "jquery";
import './styles/style.css';
import FrontPage from './components/FrontPage';
import PortfolioPane from './components/PorfolioPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };

    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  
  componentDidMount() {
		this.preloadImages();
  }
  
	preloadImages() {
		var images = [];
		for( let item in this.props.portfolio ) {
			images.push(new Image().src = item.img);
		}
	}

  renderLinks( links ) {
    return links.map((link) => {
      return <a href={link.link} target="_blank">{link.name}</a>;
    });
  }

  handleForward(event) {
    if(this.state.index >= this.props.portfolio.length-1) {
      this.setState({index: 0 });
    } else {
      this.setState({index:this.state.index + 1})
    }
  }
  handleBack() {
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
      <FrontPage />
			<a id="portfolio"></a>
      <div className="portfolio">
			<PortfolioPane portfolio={this.props.portfolio} />
      </div>
    </div>
    );
  }
}

export default App;
