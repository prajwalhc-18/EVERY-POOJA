import React from "react";
import "./PoojaPage.css"; 

function ChandraPoojaPage() {
  return (
    <div className="container">
      <section className="heading">
        <div className="main-heading">
          <h1>
            <strong>Chandra Pooja</strong>
          </h1>
          <p>
            Chandra Puja is a Hindu ritual dedicated to Chandra, the Moon god.
            Devotees perform this puja to seek blessings for mental peace, emotional stability,
            and overall well-being. The worship typically involves offering water, milk, and white
            flowers to the moon, along with chanting mantras and prayers. Chandra Pooja is believed
            to alleviate the negative effects of the moon and bring harmony to one's life.
          </p>
        </div>
        <div className="button-container">
          <p className="price">
            <span>&#x20B9; 5100</span>
          </p>
          <a href="#">
            <button className="book-now-button">Book Now</button>
          </a>
        </div>
      </section>
      <hr />
      <section className="content">
        <div className="benefits">
          <h2>
            <strong>What are the Benefits?</strong>
          </h2>
          <ul>
            <li>
              Brings emotional stability and mental peace.
            </li>
            <li>
              Alleviates negative effects of the moon and promotes harmony.
            </li>
            <li>
              Enhances intuition and fosters creativity.
            </li>
          </ul>
        </div>
        <hr />
        <div className="happen">
          <h2>
            <strong>How will it happen?</strong>
          </h2>
          <ul>
            <li>
              Devotees prepare for the puja by observing fast and cleansing rituals.
            </li>
            <li>
              The puja begins with the arrangement of a Kalash (pot) filled with water and milk,
              symbolizing the presence of Chandra.
            </li>
            <li>
              Offerings such as white flowers, rice, and sandalwood paste are made to the moon god.
            </li>
          </ul>
        </div>
        <hr />
        <div className="about">
          <h2>
            <strong>About Chandra Deva</strong>
          </h2>
          <ul>
            <li>
              Chandra, the Moon god, is one of the nine celestial deities in Hinduism.
            </li>
            <li>
              Depicted with a white complexion and adorned with a crown and ornaments,
              Chandra rides a chariot drawn by ten white horses.
            </li>
            <li>
              Chandra is associated with emotions, nurturing, and fertility, and is revered for
              his influence on the mind and emotions.
            </li>
          </ul>
        </div>
        <hr />
        <div className="max-benefits">
          <h2>
            <strong>
              What should you do after pooja to get maximum benefits?
            </strong>
          </h2>
          <ul>
            <li>
              Practice meditation and mindfulness to connect with the lunar energies.
            </li>
            <li>
              Maintain a balanced lifestyle and nourish your emotional well-being.
            </li>
          </ul>
        </div>
        <hr />
        <div className="connection">
          <h2>
            <strong>Why book with divine connection?</strong>
          </h2>
          <ul>
            <li>Convenience, authenticity, and personalized guidance.</li>
            <li>
              Access to experienced priests and experts for seamless rituals.
            </li>
            <li>Assurance of desired outcomes with personalized assistance.</li>
            <li>
              Seamless access to authentic rituals for a fulfilling spiritual
              experience.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ChandraPoojaPage;
