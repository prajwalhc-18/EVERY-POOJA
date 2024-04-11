import React from "react";
import "./PoojaPage.css";

function ManglikPoojaPage() {
  return (
    <div className="container">
      <section className="heading">
        <div className="main-heading">
          <h1>
            <strong>Manglik Pooja</strong>
          </h1>
          <p>
            Manglik Pooja is a Hindu ritual performed to mitigate the malefic effects
            of Mangal Dosha in one's horoscope. Mangal Dosha occurs when the planet Mars
            (Mangal) is placed in certain positions in the horoscope, which is believed
            to cause disturbances and obstacles in one's life, especially in marriage.
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
            <li>Reduction in the malefic effects of Mangal Dosha.</li>
            <li>Harmonious and successful marriage prospects.</li>
            <li>Overcoming obstacles and challenges in personal and professional life.</li>
          </ul>
        </div>
        <hr />
        <div className="happen">
          <h2>
            <strong>How will it happen?</strong>
          </h2>
          <ul>
            <li>
              The pooja begins with the chanting of Vedic mantras and prayers
              dedicated to Lord Hanuman, who is believed to pacify the influence
              of Mars and protect the devotee from its negative effects.
            </li>
            <li>
              Offerings such as red cloth, sweets, sindoor (vermilion), and red
              flowers are made to Lord Hanuman as part of the rituals.
            </li>
            <li>
              Devotees observe fasts, visit Hanuman temples, and recite Hanuman
              Chalisa to seek the blessings of Lord Hanuman for a successful
              resolution of Mangal Dosha.
            </li>
          </ul>
        </div>
        <hr />
        <div className="about">
          <h2>
            <strong>About Mangal Dosha</strong>
          </h2>
          <ul>
            <li>
              Mangal Dosha is a condition in Vedic astrology caused by the placement
              of Mars in certain houses of the horoscope, particularly the 1st, 4th,
              7th, 8th, or 12th house.
            </li>
            <li>
              It is believed to cause delays, disputes, and challenges in marriage,
              leading to discord and disharmony between partners.
            </li>
            <li>
              Performing Manglik Pooja is believed to pacify the malefic influence
              of Mars and bring peace, happiness, and stability in married life.
            </li>
          </ul>
        </div>
        <hr />
        <div className="max-benefits">
          <h2>
            <strong>What should you do after the pooja to get maximum benefits?</strong>
          </h2>
          <ul>
            <li>
              Continue to worship Lord Hanuman and seek his blessings regularly by
              reciting Hanuman Chalisa and visiting his temples.
            </li>
            <li>
              Seek guidance from astrologers and perform remedies suggested to
              strengthen the benefic aspects of the horoscope.
            </li>
          </ul>
        </div>
        <hr />
        <div className="connection">
          <h2>
            <strong>Why book with Divine Connection?</strong>
          </h2>
          <ul>
            <li>Experienced priests conduct the pooja with dedication and sincerity.</li>
            <li>
              Personalized guidance and remedies tailored to individual horoscopes
              for effective resolution of Mangal Dosha.
            </li>
            <li>Assurance of positive outcomes and timely relief from astrological afflictions.</li>
            <li>Access to authentic Vedic rituals and spiritual practices for holistic well-being.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ManglikPoojaPage;
