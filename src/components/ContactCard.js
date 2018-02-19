import React from 'react';


const ContactCard = () => {
	return (
		<div className="card contact">
      <div className="card-content" style={{verticalAlign:"middle"}}>
        <h5>Connect</h5>
        <p style={{marginTop:40}}><i className="material-icons" style={{verticalAlign:"bottom"}}>email</i> leah.carr@gmail.com</p>
        <p><i className="material-icons" style={{verticalAlign:"bottom"}}>phone</i> 0437 758 311</p>
        <p style={{marginTop:40}}>Codepen: <a href="https://codepen.io/attributeofextension/" target="_blank">https://codepen.io/attributeofextension</a></p>
        <p style={{marginTop:40}}>Github: <a href="https://github.com/attributeofextension" target="_blank">https://github.com/attributeofextension</a></p>
      </div>
    </div>
	);
}
export default ContactCard;