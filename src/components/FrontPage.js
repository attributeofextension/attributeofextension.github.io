import React from 'react';
import Logo from './Logo';
import IntroCard from './IntroCard';
import ContactCard from './ContactCard';

const FrontPage = () => {
	return (
		<div className="top-page container">
			<Logo />
        <IntroCard />
        <ContactCard />
        <a className="btn-floating btn-large waves-effect waves-light red next-page" href="#portfolio"><i class="material-icons">arrow_downward</i></a>
    </div>
	);
}

export default FrontPage;