import React from 'react'
import TopBar from './components/TopBar'
import MastHead from './components/MastHead'
import IconsGrid from './components/IconsGrid'
import Testimonials from './components/Testimonials'
import BottomSignup from './components/BottomSignup'
import Footer from './components/Footer'
import ImageShowcase from './components/ImageShowcase'



import testimonialImage1 from './assets/img/testimonials-1.jpg'
import testimonialImage2 from './assets/img/testimonials-2.jpg'
import testimonialImage3 from './assets/img/testimonials-3.jpg'

import bgshowcase1 from './assets/img/bg-showcase-1.jpg'
import bgshowcase2 from './assets/img/bg-showcase-2.jpg'
import bgshowcase3 from './assets/img/bg-showcase-3.jpg'


const iconGridData = [
  {
    icon: <i className="bi-window m-auto text-primary"></i>,
    headerText: "Fully Responsive",
    content: "This theme will look great on any device, no matter the size!"
  },
  {
    icon: <i className="bi-layers m-auto text-primary"></i>,
    headerText: "Bootstrap 5 Ready",
    content: "Featuring the latest build of the new Bootstrap 5 framework!"
  },
  {
    icon: <i className="bi-terminal m-auto text-primary"></i>,
    headerText: "Easy to Use",
    content: "Ready to use with your own content, or customize the source files!"
  }
]

const testimonial = [
  {
    name: "Margaret E.",
    content: '"This is fantastic! Thanks so much guys!"',
    img: testimonialImage1
  },
  {
    name: "Fred S.",
    content: '"Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages."',
    img: testimonialImage2
  },
  {
    name: "Sarah W.",
    content: '"Thanks so much for making these free resources available to us!"',
    img: testimonialImage3
  }
]

const showcase = [
  {
    id:1,
    image: bgshowcase1,
    head: "Fully Responsive Design",
    content: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    id:2,
    image: bgshowcase2,
    head: "Updated For Bootstrap 5",
    content: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
  },
  {
    id:3,
    image: bgshowcase3,
    head: "Easy to Use & Customize",
    content: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
  }
]

function App() {
  return <>
 <TopBar/>
 <MastHead/>
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {
            iconGridData.map((e, i) => (
              <IconsGrid data={e} key={i} />
            ))
          }
        </div></div>
    </section>


    <section className="showcase">
      <div className="container-fluid p-0">
        {
            showcase.map((e, i) => (
              <ImageShowcase data={e} key={i} />
            ))
          }
      </div></section>


    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {
            testimonial.map((e, i) => (
              <Testimonials data={e} key={i} />
            ))
          }
        </div></div></section>


    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <BottomSignup />

        </div></div></section>


    <footer className="footer bg-light">
      <div className="container">
        <div className="row">

          <Footer />
        </div> </div></footer>



  </>
}

export default App