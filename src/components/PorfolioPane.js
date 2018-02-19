import React, { Component } from 'react';

class PortfolioPane extends Component {
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
		const { index } = this.state;
		const { portfolio } = this.props;
		return (
			<div className="card portfolio-pane"> 
        <div className="card-image" style={{height:400}}>
          <a href={portfolio[index].link} target="_blank">
            <img src={portfolio[index].img} className="portfolio-img" />
          </a>
          <div className="valign-wrapper">
            <a class="btn-floating halfway-fab waves-effect waves-light red left portfolio-nav" onClick={this.handleBack}><i class="material-icons">arrow_back</i></a>
            <a class="btn-floating halfway-fab waves-effect waves-light red portfolio-nav" onClick={(e)=>this.handleForward(e)}><i class="material-icons">arrow_forward</i></a>
          </div>
        </div>
        <div className="card-content" style={{textAlign:"center",height:100}}>
            <p>{portfolio[index].caption}</p>
        </div>
        <div className="card-action">
          {this.renderLinks(portfolio[index].links)}
        </div>    
      </div>
		);
	}
}
export default PortfolioPane;