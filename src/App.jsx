import React from 'react';
import './App.css';
import fungiFinders from './assets/images/fungi-finders.svg';
import outdoorExploration from './assets/images/outdoor-exploration.webp';
import botanicalExpertise from './assets/images/botanical-expertise.webp';
import culinaryDelight from './assets/images/culinary-delight.webp';
import getToKnow from './assets/images/get-to-know.webp';
import nature from './assets/images/nature.webp';

function App() {
  return (
    <>
      <header className="site-header">
        <img src={fungiFinders} alt="Fungi Finders" />
        <nav className="primary-navigation">
          <ul>
            <li>
              <a href="/">Discover</a>
              <a href="#">Mushroom Guide</a>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Discover the World of Mushroom Foraging</h1>
          <p>
            Mushroom foraging is the art and science of identifying and
            collecting wild mushrooms.
          </p>
          <p>
            It's a practice that combines outdoor exploration, botanical
            knowledge, and culinary adventure. Foragers venture into forests,
            fields, and even urban green spaces to discover these hidden
            treasures.
          </p>
          <p>
            But beware – this hobby requires careful study and respect for
            nature, as some mushrooms can be dangerous if misidentified.
          </p>
        </section>
        <section>
          <div>
            <h2>The joys of mushroom foraging</h2>
            <p>
              Foraging for mushrooms can be a rewarding experience for many
              reasons. People may venture off into the woods to forage for
              mushrooms because it allows them to connect with nature, enjoy the
              thrill of the hunt, and savor the satisfaction of finding a hidden
              culinary treasure.{' '}
            </p>
          </div>
          <div>
            <article>
              <img
                src={outdoorExploration}
                alt="Tightly grouped mushrooms on mossy tree trunk"
              />
              <h3>Outdoor Exploration</h3>
              <p>
                Mushroom foraging takes you off the beaten path and into the
                heart of nature. Learn to read the landscape, identifying prime
                mushroom habitats from lush forest floors to sun-dappled
                meadows. Every expedition is a new adventure, with the potential
                for exciting discoveries around every tree and under every log.
              </p>
            </article>
            <article>
              <img
                src={botanicalExpertise}
                alt="Assortment of different picked mushrooms"
              />
              <h3>Botanical Expertise</h3>
              <p>
                Dive into the intricate world of fungal biology. Discover the
                unique structures of mushrooms, from caps to gills to spores.
                Learn to use field guides and identification keys to distinguish
                between species. With practice, you'll start to see the forest
                in a whole new light, recognizing the vital role fungi play in
                ecosystem health.
              </p>
            </article>
            <article>
              <img
                src={culinaryDelight}
                alt="Steaming plate of cooked mushrooms"
              />
              <h3>Culinary Delights</h3>
              <p>
                Transform your foraged finds into delectable dishes. Many edible
                mushrooms offer unique flavors and textures that can elevate
                your cooking. From the earthy porcini to the delicate
                chanterelle, each variety brings its own character to the table.
                Explore recipes, preservation techniques, and the joy of cooking
                with nature's bounty.
              </p>
            </article>
          </div>
        </section>
        <section>
          <h2>
            Start your <span>Foraging Adventure</span>
          </h2>
          <p>
            Whether you're seeking a deeper connection with nature, a new
            outdoor hobby, or simply love the idea of finding your own food,
            mushroom foraging offers a uniquely rewarding experience.
          </p>
        </section>
        <section>
          <img
            src={getToKnow}
            alt="Kneeling man inspecting mushroom on forest floor"
          />
          <div>
            <h2>Get to know your mushrooms</h2>
            <p>
              Successful and safe mushroom foraging begins with a deep
              understanding of the species you'll encounter in the wild - not
              just what the edible ones look like, but their toxic look-alikes,
              seasonal patterns, and preferred habitats.
            </p>
            <p>
              It can feel like a big task, but we’ve got a handy reference guide
              to help you out!
            </p>
            <a href="#">
              <span className="visually-hidden">
                Learn more about various types of mushrooms with our handy
              </span>{' '}
              Reference Guide
            </a>
          </div>
        </section>
        <section>
          <div>
            <h2>Connect with Nature</h2>
            <p>
              Experience the beauty of the great outdoors while foraging for
              mushrooms with fellow enthusiasts.
            </p>
            <a href="#">
              Learn More{' '}
              <span className="visually-hidden">
                about the different types of mushrooms using our hand mushroom
                guide
              </span>
            </a>
          </div>
          <img
            src={nature}
            alt="Small mushrooms budding from mossy tree roots"
          />
        </section>
      </main>
      <footer>
        <p>Happy Foraging!</p>
        <a href="mailto:contact@fungifinders.com">contact@fungifinders.com</a>
      </footer>
    </>
  );
}

export default App;
