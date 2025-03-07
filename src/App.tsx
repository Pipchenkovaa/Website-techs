// import React from 'react'
// import { useState } from 'react'
import Header from './components/Header'
import ModrenTechBlock from './components/ModrenTechSection'
import FrontendTechCardsSection from './components/FrontendCardsSection'
import BackendTechCardsSection from './components/BackendCardsSection'
import { navBarLinks, modrenTechSection, generalTrands } from './assets/data/skeleton'
import GeneralThandsBlock from './components/GeneralTrands'
import './styles/main.css'

function App() {
  return (
		<div className="container">
			<Header list={navBarLinks.list} />
			<ModrenTechBlock title={modrenTechSection.title} description={modrenTechSection.description} image={modrenTechSection.image}/>
			<FrontendTechCardsSection />
			<BackendTechCardsSection />
			<GeneralThandsBlock list={generalTrands.list}/>
		</div>
  )
}

export default App