import React from "react";
import Header from "../../components/Header";
import { Image, Accordion, Card, Button } from "react-bootstrap";
import "./style.css";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <>
      <div className="HomePagefontStyle">
        <Header id={props.match.params.id} token={props.match.params.token} />

        <div className="collapseMenu">
          <Accordion defaultActiveKey="1" className="">
            <Card>
              <Card.Header>
                <a href="#more-info">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  className="clickIcons"
                >
                  <i className="fas fa-chevron-down" aria-expanded="false"></i>
                </Accordion.Toggle>
                  </a>
              </Card.Header>
              <Accordion.Collapse eventKey="1" id="more-info">
                <Card.Body>
                  <div className="post_mobile-view">
                    <div
                      className="post_mobile-view-content"
                      style={{ paddingBottom: "6rem" }}
                    >
                      <div className="post_icons">
                        <Image
                          src="../images/PostAnOffer.png"
                          alt="Post an offer"
                        />
                        <div className="label">Poster une offre</div>
                      </div>

                      <div className="post_icons">
                        <Image src="../images/faq.png" alt="Post an offer" />
                        <div className="label">FAQ</div>
                      </div>

                      <div className="post_icons">
                        <Image
                          src="../images/uploadcv.png"
                          alt="Post an offer"
                        />
                        <div className="label">Télécharger votre CV</div>
                      </div>
                    </div>

                    <div className="post_mobile-view-content">
                      <div className="post_icons">
                        <Image
                          src="../images/register.png"
                          alt="Post an offer"
                        />
                        <div className="label">S’inscrire</div>
                      </div>

                      <div className="post_icons">
                        <Image
                          src="../images/contact_us.png"
                          alt="Post an offer"
                        />
                        <div className="label">Contactez-nous</div>
                      </div>

                      <div className="post_icons">
                        <Image src="../images/cgv.png" alt="Post an offer" />
                        <div className="label">CGV</div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Home;
