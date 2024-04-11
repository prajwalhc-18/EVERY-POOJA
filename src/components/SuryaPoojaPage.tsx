import React from "react";
import "./PoojaPage.css"; 

function SuryaPoojaPage() {
  return (
    <div className="container">
      <section className="heading">
        <div className="main-heading">
          <h1>
            <strong>Surya Pooja</strong>
          </h1>
          <p>
            Surya Puja is a sacred Hindu ritual dedicated to Lord Surya, the Sun God,
            who is revered as the source of light, energy, and life on Earth. Devotees
            perform this puja to seek blessings for health, vitality, success, and
            prosperity. The puja typically involves offering water, flowers, sandalwood
            paste, and prayers to the Sun God, accompanied by the chanting of Surya
            Mantras. It is believed to enhance one's physical and mental well-being,
            promote self-confidence, and remove obstacles from one's path.
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
              Bestows health, vitality, and energy to the devotee.
            </li>
            <li>
              Promotes success, prosperity, and abundance in life.
            </li>
            <li>
              Removes obstacles and dispels negative energies from one's path.
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
              Devotees wake up early and purify themselves before performing the puja.
            </li>
            <li>
              Offerings such as water, flowers, sandalwood paste, and red cloth are made
              to Lord Surya while facing the direction of the rising Sun.
            </li>
            <li>
              The Gayatri Mantra or Surya Mantras are chanted with devotion and reverence
              during the puja.
            </li>
          </ul>
        </div>
        <hr />
        <div className="about">
          <h2>
            <strong>About Lord Surya</strong>
          </h2>
          <ul>
            <li>
              Lord Surya, also known as Aditya or the Sun God, is considered the
              chief solar deity in Hinduism.
            </li>
            <li>
              Depicted riding a chariot drawn by seven horses, Lord Surya symbolizes
              the life-giving force and the source of light and energy in the universe.
            </li>
            <li>
              Worshipped during the Chhath Puja and other solar festivals, devotees
              seek his blessings for vitality, strength, and enlightenment.
            </li>
          </ul>
        </div>
        <hr />
        <div className="max-benefits">
          <h2>
            <strong>
              What should you do after the pooja to get maximum benefits?
            </strong>
          </h2>
          <ul>
            <li>
              Practice Surya Namaskar or Sun Salutation regularly for physical fitness
              and mental well-being.
            </li>
            <li>
              Spend time outdoors, soak in the Sun's rays, and connect with nature to
              absorb its positive energies.
            </li>
          </ul>
        </div>
        <hr />
        <div className="connection">
          <h2>
            <strong>Why book with Divine Connection?</strong>
          </h2>
          <ul>
            <li>Expert priests conduct the puja with authenticity and devotion.</li>
            <li>
              Personalized guidance and support are provided to ensure a fulfilling
              spiritual experience.
            </li>
            <li>Access to traditional rituals and blessings for overall well-being.</li>
            <li>
              Assurance of desired outcomes and benefits through sincere prayers and
              rituals.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SuryaPoojaPage;
