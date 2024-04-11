import React from "react";
import "./PoojaPage.css";

function KaliPoojaPage() {
  return (
    <div className="container">
      <section className="heading">
        <div className="main-heading">
          <h1>
            <strong>Kali Pooja</strong>
          </h1>
          <p>
            Kali Puja, also known as Shyama Puja, is a Hindu festival dedicated to
            the worship of Goddess Kali, the embodiment of divine feminine power and
            the destroyer of evil forces. Devotees perform this puja to seek the
            blessings of Goddess Kali for protection, strength, and liberation from
            negativity. The puja involves elaborate rituals, including the
            recitation of mantras, offerings of flowers and sweets, and the lighting
            of lamps. It symbolizes the triumph of good over evil and the victory
            of light over darkness.
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
            <li>Protection from evil forces and negative influences.</li>
            <li>Empowerment and strength to overcome challenges.</li>
            <li>Blessings of spiritual awakening and transformation.</li>
          </ul>
        </div>
        <hr />
        <div className="happen">
          <h2>
            <strong>How will it happen?</strong>
          </h2>
          <ul>
            <li>Devotees prepare for the puja by cleaning and purifying the space.</li>
            <li>Offerings of flowers, fruits, sweets, and incense are made to Goddess Kali.</li>
            <li>Mantras and hymns dedicated to Kali are chanted with devotion.</li>
          </ul>
        </div>
        <hr />
        <div className="about">
          <h2>
            <strong>About Goddess Kali</strong>
          </h2>
          <ul>
            <li>Goddess Kali is often depicted with a dark complexion and multiple arms.</li>
            <li>She symbolizes time, destruction, and the ultimate reality of existence.</li>
            <li>Kali is worshipped as the divine mother and protector of her devotees.</li>
          </ul>
        </div>
        <hr />
        <div className="max-benefits">
          <h2>
            <strong>What should you do after the puja to get maximum benefits?</strong>
          </h2>
          <ul>
            <li>Embrace fearlessness and courage in facing life's challenges.</li>
            <li>Cultivate inner strength and resilience through spiritual practices.</li>
          </ul>
        </div>
        <hr />
        <div className="connection">
          <h2>
            <strong>Why book with Divine Connection?</strong>
          </h2>
          <ul>
            <li>Expert priests conduct the puja with reverence and devotion.</li>
            <li>Personalized assistance and guidance for a meaningful spiritual experience.</li>
            <li>Access to authentic rituals and blessings for protection and empowerment.</li>
            <li>Assurance of desired outcomes through sincere prayers and offerings.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default KaliPoojaPage;
