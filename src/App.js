import React from 'react';
import styles from './App.module.css';
import Hello from './Hello'
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
		  <Header className={styles.header}>
		    <a href="#sectionOne" className="opa">Section One</a>
		    <a href="#sectionTwo">Section Two</a>
		    <a href="#sectionThree">Section Three</a>
		  </Header>
		  <Footer>
		    <a href="" className="opa">Dcoumentation</a>
		    <a href="">Example Source</a>
		    <a href="">About</a>
		  </Footer>
		  <SectionsContainer {...options}>
		    <Section className = {styles.section1}>
		    	<Hello />
		    </Section>
		    <Section className = {styles.section2}>
		    	Page 2
		    </Section>
		    <Section className = {styles.section3}>
		    	Page 3
		    </Section>
		  </SectionsContainer>
		 </div>
	);
}

export default App;
