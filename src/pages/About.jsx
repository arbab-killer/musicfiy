import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.getElementById("team-image").style.top = `${0 - scrolled * 1}px`;
      document.querySelector(".img-1").style.top = `${0 - scrolled * 1}px`;
      document.querySelector(".img-2").style.top = `${0 - scrolled * 1}px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="product-navbar">
        <div className="product-navbar-centered">
          <ul>
            
            <li>
              <button onClick={()=>{history.back()}} className="text-2xl text-white">
                Back
              </button>
            </li>
          </ul>
        </div>
      </div>

      <header className="navbar hero" role="banner">
        <div className="container">
          <div className="navbar-header">
            <Link to="" className="navbar-brand">
              <p>
                <img
                  src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="APIMATIC Logo"
                />
                APIMATIC
              </p>
            </Link>
          </div>
        </div>
      </header>

      <div id="about-main">
        <div className="jumbotron">
          <div className="jumbotron-inner">
            <div className="top-box">
              <div className="content-box">
                <h1>About APIMATIC</h1>
                <p>
                  APIMatic is a developer experience platform for web APIs.{" "}
                  <br />
                  Our mission is to make developers productive through automatic
                  code generation.
                </p>
              </div>
            </div>
          </div>
          <div className="img-layer-container">
            <div className="team-image" id="team-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team"
              />
            </div>

            <div className="circles-container">
              <div className="img-1">
                <img
                  src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Circle 1"
                />
              </div>
              <div className="img-2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Circle 2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="story-container">
          <div className="need-for-dx-container">
            <h3 className="text-center">Need for DX</h3>
            <p>
              Application Programming Interfaces (APIs) have taken the world by
              storm and are now the de facto standard of software communication.
              Almost every software product nowadays consumes APIs. The business
              model of numerous companies around the world relies upon the
              consumption of their APIs. API providers, therefore, strive to
              increase API adoption rates by spending millions of dollars every
              year to improve developer experience. This is usually done by
              providing Software Development Kits (SDKs) and API documentation
              to developers consuming their API(s). Developing SDKs and writing
              documentation, however, are arduous, monotonous and error-prone
              tasks. It is a slow process and costs a lot of time and money.
            </p>
            <div className="img-container">
              <img
                src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="APIMATIC Developer Experience Process"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider"></div>
          <div className="our-tech-container">
            <h3 className="text-center">Our Technology</h3>
            <p>
              Our code generation engine enables API providers to generate SDKs
              for their APIs within minutes and at a fraction of the cost. We
              provide tools like our API editor and API transformer to further
              aid API providers in minimizing the time required to ship
              excellent quality SDKs to the developers using their APIs. Our
              code generation engine is also capable of generating succinct and
              error-free documentation for APIs and SDKs, both. The
              documentation for the SDKs includes dynamic screenshots detailing
              usage instructions tailored to the provider's specific API and
              also code snippets showing example usage. As the cherry on the
              cake, we provide beautifully designed DX portals to encapsulate
              this documentation.
            </p>
            <div className="img-container">
              <img
                src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="APIMATIC Code Generation Engine"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider"></div>
          <div className="origin-story-container">
            <h3 className="text-center">Origin Story</h3>
            <p>
              While doing research work for their PhDs from the University of
              Auckland in 2014, our founders came across one of the API
              industry's pain points: SDKs. They realized that API providers who
              spent hundreds of thousands of dollars every year on improving
              developer experience, by providing SDKs and user-friendly
              documentation were able to reach a wider developer audience for
              their APIs compared to API providers who weren't able to do so.
            </p>
            <p>
              It was so clear that even though writing SDKs and documentation
              was a difficult and expensive task, it followed repeatable
              patterns which could be defined as logic blocks in a code
              generation engine. So, as a research project, they started working
              on a code generation engine which dynamically generated SDKs using
              API description as input.
            </p>
            <p>
              After a rigorous journey, this research project was selected as a
              candidate for commercialization by Return on Science (a NZ
              national research commercialization program focused on bringing
              new academic research to market) and the concept was transformed
              into a product i.e. APIMatic.
            </p>
          </div>
          <div className="container-divider"></div>
          <div className="today-container">
            <h3 className="text-center">Flash Forward Today</h3>
            <p>
              APIMatic has come a long way since its inception 3 years ago.
              Having started with only generating SDKs, APIMatic now provides
              solutions in other areas of developer experience as well.
              Presently, APIMatic is used by numerous organizations around the
              world to:
            </p>
            <ul>
              <li>Create and store definitions of their APIs</li>
              <li>Generate SDKs for their APIs for 10 platforms</li>
              <li>Keep these SDKs in sync with API updates</li>
              <li>
                Convert API descriptions into multiple formats (Swagger, API
                Blueprint, RAML etc.)
              </li>
              <li>Generate beautiful documentation for their APIs and SDKs</li>
              <li>Generate complete Developer Experience API Portals</li>
            </ul>
          </div>
          <div className="container-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
