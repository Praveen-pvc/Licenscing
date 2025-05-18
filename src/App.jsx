import "./App.css"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <span className="logo-text">SoftSell</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#why-choose-us">Why Choose Us</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="nav-button">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
