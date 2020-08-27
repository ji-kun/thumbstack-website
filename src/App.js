import React from 'react';
import styles from './App.module.css';
import Hello from './Hello';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Clientele from './Components/Clientele/Clientele';
import Testimonials from './Components/Testimonials/Testimonials';
import Product from './Components/Products/Products';
import Footr from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import {SectionsContainer, Section, Header} from 'react-fullpage';

function App() {
	let options={
		sectionClassName:     'section',
	    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree','sectionFour'],
	    scrollBar:            false,
	    navigation:           true,
	    verticalAlign:        false,
	    sectionPaddingTop:    '0px',
	    sectionPaddingBottom: '0px',
	    arrowNavigation:      true
	}

	  return (
	  	<div>
	  	  <Navbar />
		  	<Header className={styles.header}>
			    <a href="#sectionOne" className="opa"></a>
			    <a href="#sectionTwo"></a>
			    <a href="#sectionThree"></a>
			    <a href="#sectionFour"></a>
			  </Header>
		  <Footr />
		  <SectionsContainer {...options}>
		    <Section className = {styles.section1}>
		    	<Hello />
		    </Section>
		    <Section className = {styles.section2}>
		    	<Product />
		    </Section>
		    <Section className = {styles.section3}>
		    	<Clientele />
		    </Section>
		    <Section className = {styles.section4}>
		    	<Testimonials />
		    </Section>
		  </SectionsContainer>
		 </div>
	);
}

export default App;

