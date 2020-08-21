import React from 'react';
import styles from './App.module.css';
import Hello from './Hello';
import Navbar from './Components/Navbar';
import Clientele from './Components/Clientele';
import Testimonials from './Components/Testimonials';
import Product from './Components/Product';
import Footer from './Components/Footer';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

function App() {
	let options={
		sectionClassName:     'section',
	    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
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
		    <a href="#sectionOne" className="opa">Section One</a>
		    <a href="#sectionTwo">Section Two</a>
		    <a href="#sectionThree">Section Three</a>
		  </Header>
		  <Footer>
		    <Footer />
		  </Footer>
		  <SectionsContainer {...options}>
		    <Section className = {styles.section1}>
		    	<Hello />
		    </Section>
		    <Section className = {styles.section2}>
		    	<Products />
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
