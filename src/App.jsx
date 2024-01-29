import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <section id="homePage">
        <Home />
      </section>
      <section id="educationPage">
        <Education theme={theme} />
      </section>
      <section id="skillsPage">
        <Skills theme={theme} />
      </section>
      <section id="projectsPage">
        <Projects theme={theme} />
      </section>
      <section id="contactPage">
        <Contact theme={theme} />
      </section>
    </div>
  );
}

export default App;
