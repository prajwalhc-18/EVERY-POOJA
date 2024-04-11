import React from "react";
import "./PoojaPage.css";

function VastuPoojaPage() {
  return (
    <div className="container">
      <section className="heading">
        <div className="main-heading">
          <h1>
            <strong>Vastu Pooja</strong>
          </h1>
          <p>
            Vastu Puja is a traditional Hindu ritual performed to appease the
            deities and seek blessings for the home or workplace. It involves
            invoking the blessings of Vastu Purusha, the deity of architecture
            and construction. The puja aims to bring harmony, prosperity, and
            positive energy into the space by aligning it with the principles
            of Vastu Shastra.
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
            <li>Brings harmony, peace, and positivity to the environment.</li>
            <li>Enhances the flow of energy and promotes well-being.</li>
            <li>Protects from negative influences and obstacles.</li>
          </ul>
        </div>
        <hr />
        <div className="happen">
          <h2>
            <strong>How will it happen?</strong>
          </h2>
          <ul>
            <li>
              The puja begins with the preparation of the space and the
              installation of Vastu Yantras or symbols.
            </li>
            <li>
              Mantras and prayers are recited to invoke the blessings of Vastu
              Purusha and other deities associated with Vastu Shastra.
            </li>
            <li>
              Offerings such as flowers, fruits, and grains are made to the
              deities, seeking their blessings for the space and its occupants.
            </li>
          </ul>
        </div>
        <hr />
        <div className="about">
          <h2>
            <strong>About Vastu Pooja</strong>
          </h2>
          <ul>
            <li>
              Vastu Puja is based on the principles of Vastu Shastra, an
              ancient architectural science that guides the design and layout
              of buildings.
            </li>
            <li>
              It aims to create a harmonious and balanced environment by
              aligning the structure with the natural elements and cosmic
              energies.
            </li>
            <li>
              The puja is performed by Vastu experts or priests who have
              knowledge of the sacred texts and rituals associated with Vastu
              Shastra.
            </li>
          </ul>
        </div>
        <hr />
        <div className="max-benefits">
          <h2>
            <strong>What should you do after the pooja to get maximum benefits?</strong>
          </h2>
          <ul>
            <li>Follow the Vastu principles in daily life and activities.</li>
            <li>Maintain cleanliness and orderliness in the space.</li>
            <li>Regularly perform Vastu remedies and rituals as advised by experts.</li>
          </ul>
        </div>
        <hr />
        <div className="connection">
          <h2>
            <strong>Why book with Divine Connection?</strong>
          </h2>
          <ul>
            <li>Experienced priests and Vastu experts for authentic rituals.</li>
            <li>Personalized guidance and assistance for Vastu remedies.</li>
            <li>Ensures desired outcomes through dedicated support.</li>
            <li>Access to a wide range of Vastu-related services and consultations.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default VastuPoojaPage;
