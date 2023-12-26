import React from "react";
import "./Hero.scss";
import {
  heroPic,
  houseCleaning,
  // vacuumBest,
  getYourHouse,
  industryCleaning,
  officeCleaning,
  payOnline,
  // disinfect,
  schedule,
  womenFlowers,
} from "../../assets/images";

function Hero() {
  return (
    <div className="main">
      <section>
        <div className="container">
          <div className="first-items">
            <div className="text-part">
              <p>Quality cleaning for your home</p>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus. z
              </p>
              <div className="btn-call">
                <button className="buttonHeader">Get a free quote</button>
                <div className="contactt">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="92"
                    viewBox="0 0 92 92"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_38)">
                      <path
                        d="M46 77.5C65.6061 77.5 81.5 61.6061 81.5 42C81.5 22.3939 65.6061 6.5 46 6.5C26.3939 6.5 10.5 22.3939 10.5 42C10.5 61.6061 26.3939 77.5 46 77.5Z"
                        fill="white"
                        stroke="#DCDDEB"
                      />
                      <path
                        d="M57.0856 59.3845C57.0732 59.3845 57.0609 59.3845 57.0485 59.3845C51.11 59.19 44.1529 53.4336 39.3595 48.6371C34.5599 43.8407 28.8035 36.8805 28.6183 30.9698C28.5504 28.8956 33.6402 25.2072 33.6926 25.1701C35.0137 24.2504 36.4798 24.5775 37.0817 25.4109C37.4891 25.9757 41.3473 31.8216 41.767 32.4853C42.2022 33.1736 42.1374 34.1983 41.5942 35.2261C41.2948 35.7971 40.3009 37.5441 39.8349 38.359C40.338 39.075 41.6683 40.8313 44.4153 43.5783C47.1654 46.3253 48.9186 47.6587 49.6377 48.1618C50.4526 47.6957 52.1996 46.7019 52.7706 46.4025C53.7829 45.8654 54.8015 45.7975 55.496 46.2235C56.2059 46.6587 62.0364 50.5354 62.5734 50.9088C63.0241 51.2268 63.3142 51.77 63.3728 52.4027C63.4284 53.0416 63.2309 53.7176 62.8204 54.3071C62.7864 54.3565 59.1412 59.3845 57.0856 59.3845Z"
                        fill="#0075FF"
                      />
                    </g>
                  </svg>
                  <div className="tel-number">
                    <p>Call us now</p>
                    <p>(414) 567 - 2109</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={heroPic} alt="Hero" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="second-items">
            <p id="about-us">About Us</p>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className="s-cards">
              <div className="s-card">
                <img src={schedule} alt="Img" />
                <p className="schedule">1. Schedule online</p>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="s-card">
                <img src={payOnline} alt="Img" />
                <p className="payOnline">2. Pay online easily</p>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="s-card">
                <img src={getYourHouse} alt="Img" />
                <p className={schedule}>3. Get your house cleaned</p>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
            </div>
            <div className="s-buttons">
              <button className="first">Get a free quote</button>
              <button className="second">Explore services</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="third-items">
            <div className="texts">
              <p>Our Services</p>
              <button className="second">Explore services</button>
            </div>
            <div className="s-cards">
              <div className="s-card">
                <img src={houseCleaning} alt="Img" />
                <p className="schedule">House cleaning</p>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="s-card">
                <img src={officeCleaning} alt="Img" />
                <p className="payOnline">Office cleaning</p>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="s-card">
                <img src={industryCleaning} alt="Img" />
                <p className={industryCleaning}>Industrial cleaning</p>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="fourth-items">
            <img src={womenFlowers} alt="img" />
            <div className="texts">
              <p>Covid-19 sanitization</p>
              <p>
                We follow guidelines to keep you safe from the COVID-19 virus
              </p>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="btn-call">
                <button className="buttonHeader">Get a free quote</button>
                <div className="contactt">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="92"
                    viewBox="0 0 92 92"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1_38)">
                      <path
                        d="M46 77.5C65.6061 77.5 81.5 61.6061 81.5 42C81.5 22.3939 65.6061 6.5 46 6.5C26.3939 6.5 10.5 22.3939 10.5 42C10.5 61.6061 26.3939 77.5 46 77.5Z"
                        fill="white"
                        stroke="#DCDDEB"
                      />
                      <path
                        d="M57.0856 59.3845C57.0732 59.3845 57.0609 59.3845 57.0485 59.3845C51.11 59.19 44.1529 53.4336 39.3595 48.6371C34.5599 43.8407 28.8035 36.8805 28.6183 30.9698C28.5504 28.8956 33.6402 25.2072 33.6926 25.1701C35.0137 24.2504 36.4798 24.5775 37.0817 25.4109C37.4891 25.9757 41.3473 31.8216 41.767 32.4853C42.2022 33.1736 42.1374 34.1983 41.5942 35.2261C41.2948 35.7971 40.3009 37.5441 39.8349 38.359C40.338 39.075 41.6683 40.8313 44.4153 43.5783C47.1654 46.3253 48.9186 47.6587 49.6377 48.1618C50.4526 47.6957 52.1996 46.7019 52.7706 46.4025C53.7829 45.8654 54.8015 45.7975 55.496 46.2235C56.2059 46.6587 62.0364 50.5354 62.5734 50.9088C63.0241 51.2268 63.3142 51.77 63.3728 52.4027C63.4284 53.0416 63.2309 53.7176 62.8204 54.3071C62.7864 54.3565 59.1412 59.3845 57.0856 59.3845Z"
                        fill="#0075FF"
                      />
                    </g>
                  </svg>
                  <div className="tel-number">
                    <p>Call us now</p>
                    <p>(414) 567 - 2109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
