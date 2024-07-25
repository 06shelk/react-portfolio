import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Footer from '../components/Footer'
import About from '../components/About'
import Intro from '../components/Intro'

const HomeView = () => {
  return (
    <>
     <Skip/>
     <Header/>
    
     <Main>
        <Intro/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
     </Main> 
     <Footer/>
    </>
  )
}

export default HomeView