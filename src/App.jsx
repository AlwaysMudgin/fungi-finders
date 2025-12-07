import React from 'react';
import './App.css';
import fungiFinders from './assets/images/fungi-finders.svg';
import outdoorExploration from './assets/images/outdoor-exploration.webp';
import botanicalExpertise from './assets/images/botanical-expertise.webp';
import culinaryDelight from './assets/images/culinary-delight.webp';
import getToKnow from './assets/images/get-to-know.webp';
import nature from './assets/images/nature.webp';
import hamburger from './assets/images/hamburger.svg';

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [widthIsMobile, setWidthIsMobile] = React.useState(
    window.innerWidth < 760
  );

  React.useEffect(() => {
    const handleResize = () => {
      if (widthIsMobile) {
        if (window.innerWidth > 760) {
          setWidthIsMobile(false);
        }
      } else {
        if (window.innerWidth < 760) {
          setWidthIsMobile(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <header className="site-header">
        <a className="skip-to-main" href="#main">
          Skip to main content
        </a>
        <div className="wrapper" data-width="wide">
          <div className="site-header__inner">
            <img src={fungiFinders} alt="Fungi Finders" />
            <button
              aria-controls="primary-nav"
              aria-expanded={menuIsOpen}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <span className="visually-hidden">Menu</span>
              <img src={hamburger} alt="" />
            </button>
            {(!widthIsMobile || menuIsOpen) && (
              <nav id="primary-nav" className="primary-navigation">
                <ul role="list">
                  <li>
                    <a href="/">Discover</a>
                  </li>
                  <li>
                    <a href="#">Mushroom Guide</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero section" data-padding="compact">
          <div className="wrapper flow">
            <h1 className="hero__title">
              Discover the World of <span>Mushroom Foraging</span>
            </h1>
            <div className="wrapper flow" data-width="narrow">
              <p>
                Mushroom foraging is the art and science of identifying and
                collecting wild mushrooms.
              </p>
              <p>
                It's a practice that combines outdoor exploration, botanical
                knowledge, and culinary adventure. Foragers venture into
                forests, fields, and even urban green spaces to discover these
                hidden treasures.
              </p>
              <p>
                But beware – this hobby requires careful study and respect for
                nature, as some mushrooms can be dangerous if misidentified.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrapper flow">
            <div className="flow">
              <h2 className="section-heading">The joys of mushroom foraging</h2>
              <p>
                Foraging for mushrooms can be a rewarding experience for many
                reasons. People may venture off into the woods to forage for
                mushrooms because it allows them to connect with nature, enjoy
                the thrill of the hunt, and savor the satisfaction of finding a
                hidden culinary treasure.{' '}
              </p>
            </div>
            <div className="equal-columns">
              <article className="card">
                <img
                  src={outdoorExploration}
                  alt="Tightly grouped mushrooms on mossy tree trunk"
                />
                <h3 className="card__title">Outdoor Exploration</h3>
                <p>
                  Mushroom foraging takes you off the beaten path and into the
                  heart of nature. Learn to read the landscape, identifying
                  prime mushroom habitats from lush forest floors to sun-dappled
                  meadows. Every expedition is a new adventure, with the
                  potential for exciting discoveries around every tree and under
                  every log.
                </p>
              </article>
              <article className="card">
                <img
                  src={botanicalExpertise}
                  alt="Assortment of different picked mushrooms"
                />
                <h3 className="card__title">Botanical Expertise</h3>
                <p>
                  Dive into the intricate world of fungal biology. Discover the
                  unique structures of mushrooms, from caps to gills to spores.
                  Learn to use field guides and identification keys to
                  distinguish between species. With practice, you'll start to
                  see the forest in a whole new light, recognizing the vital
                  role fungi play in ecosystem health.
                </p>
              </article>
              <article className="card">
                <img
                  src={culinaryDelight}
                  alt="Steaming plate of cooked mushrooms"
                />
                <h3 className="card__title">Culinary Delights</h3>
                <p>
                  Transform your foraged finds into delectable dishes. Many
                  edible mushrooms offer unique flavors and textures that can
                  elevate your cooking. From the earthy porcini to the delicate
                  chanterelle, each variety brings its own character to the
                  table. Explore recipes, preservation techniques, and the joy
                  of cooking with nature's bounty.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="section background-accent-dark"
          data-padding="narrow"
        >
          <div className="wrapper flow text-center" data-width="narrow">
            <h2 className="section-heading">
              Start your <span className="text-brand">Foraging Adventure</span>
            </h2>
            <p className="font-size-lg text-high-contrast">
              Whether you're seeking a deeper connection with nature, a new
              outdoor hobby, or simply love the idea of finding your own food,
              mushroom foraging offers a uniquely rewarding experience.
            </p>
          </div>
        </section>
        <section className="background-extra-dark section">
          <div className="wrapper" data-width="wide">
            <div
              className="equal-columns"
              data-gap="large"
              data-alignment="centered"
            >
              <img
                src={getToKnow}
                alt="Kneeling man inspecting mushroom on forest floor"
              />
              <div className="flow font-size-lg">
                <h2 className="section-heading">Get to know your mushrooms</h2>
                <p>
                  Successful and safe mushroom foraging begins with a deep
                  understanding of the species you'll encounter in the wild -
                  not just what the edible ones look like, but their toxic
                  look-alikes, seasonal patterns, and preferred habitats.
                </p>
                <p>
                  It can feel like a big task, but we’ve got a handy reference
                  guide to help you out!
                </p>
                <a className="button" href="#">
                  <span className="visually-hidden">
                    Learn more about various types of mushrooms with our handy{' '}
                  </span>
                  Reference Guide
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrapper" data-width="wide">
            <div
              className="equal-columns"
              data-gap="large"
              data-alignment="centered"
            >
              <div className="flow font-size-lg">
                <h2 className="section-heading">Connect with Nature</h2>
                <p>
                  Experience the beauty of the great outdoors while foraging for
                  mushrooms with fellow enthusiasts.
                </p>
                <a className="button" href="#">
                  Learn More{' '}
                  <span className="visually-hidden">
                    about the different types of mushrooms using our hand
                    mushroom guide
                  </span>
                </a>
              </div>
              <img
                src={nature}
                alt="Small mushrooms budding from mossy tree roots"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p className="site-footer__title">Happy Foraging!</p>
        <a href="mailto:contact@fungifinders.com">contact@fungifinders.com</a>
      </footer>
    </>
  );
}

export default App;
