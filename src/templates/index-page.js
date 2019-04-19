import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Element } from "react-scroll";

import Phone from "../img/phone-call.svg";
import Fax from "../img/file-text.svg";
import Email from "../img/mail.svg";
import Eye from "../img/eye.svg";
import Clip from "../img/clipboard.svg";
import Check from "../img/user-check.svg";

import Layout from "../components/Layout";
import Form from "../components/Form";
import Hours from "../components/Hours";

function createMarkup(cms) {
  return { __html: cms };
}

function formatPhone(num) {
  var cleaned = ("" + num).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

export const IndexPageTemplate = ({
  hero,
  services,
  appt,
  insurance,
  settings,
  staff,
  image2
}) => (
  <div>
    <div
      className="w-screen h-screen flex content-center justify-center"
      style={{
        backgroundImage: `url(${
          !!hero.image.childImageSharp
            ? hero.image.childImageSharp.fluid.src
            : hero.image
        })`,
        backgroundPosition: `top left`,
        backgroundSize: `cover`,
        backgroundAttachment: `fixed`
      }}
    >
      <div className="v-center p-4">
        <h2
          className="text-6xl text-center font-optical tracking-widest text-white lg:text-12xl leading-none text-shadow-md"
          dangerouslySetInnerHTML={createMarkup(hero.title)}
        />
      </div>
    </div>

    <Element name="services">
      <section className="md:mb-24 text-center">
        <div className="container mx-auto lg:-mt-32 lg:shadow-md rounded-lg">
          <div className="flex p-8 py-16 lg:p-16">
            <div className="lg:w-1/2 flex flex-col lg:pr-16">
              <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-4">
                Services
              </h3>

              <div className="py-8 border-b-2 border-t-2 border-gray-200">
                <div className="flex content-center items-center mb-6">
                  <div className="relative mr-4">
                    <svg
                      className="z-0 fill-current text-ta-100 h-10 w-10"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="50" />
                    </svg>
                    <Check className="absolute absolute-center z-10 h-5 w-5 text-white stroke-current" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {services.item1}
                  </h3>
                </div>

                <p className="text-gray-700 text-left leading-relaxed">
                  {services.text1}
                </p>
              </div>
              <div className="py-8 border-b-2 border-gray-200">
                <div className="flex content-center items-center mb-6">
                  <div className="relative mr-4">
                    <svg
                      className="z-0 fill-current text-ta-100 h-10 w-10"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="50" />
                    </svg>
                    <Eye className="absolute absolute-center z-10 h-5 w-5 text-white stroke-current" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {services.item2}
                  </h3>
                </div>
                <p className="text-gray-700 text-left leading-relaxed">
                  {services.text2}
                </p>
              </div>
              <div className="py-8">
                <div className="flex content-center items-center mb-6">
                  <div className="relative mr-4">
                    <svg
                      className="z-0 fill-current text-ta-100 h-10 w-10"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="50" />
                    </svg>
                    <Clip className="absolute absolute-center z-10 h-5 w-5 text-white stroke-current" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {services.item3}
                  </h3>
                </div>
                <p className="text-gray-700 text-left leading-relaxed">
                  {services.text3}
                </p>
              </div>
            </div>
            <div className="hidden lg:w-1/2">
              <img
                className="w-full h-full"
                src={services.image.publicURL}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Element>

    <Element name="appts">
      <section className="container mx-auto bg-gray-100 md:my-40">
        <div className="flex flex-col p-8 py-24">
          <div className="lg:w-1/2">
            <img className="w-full h-full" src={appt.image.publicURL} alt="" />
          </div>
          <div className="pt-8 md:w-1/2">
            <div className="md:p-16 text-center">
              <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8">
                Appointments
              </h3>
              <p className="pb-8 text-lg leading-relaxed text-gray-700">
                Ready to make your appointment? Download the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={appt.patient.publicURL}
                >
                  new patient form{" "}
                </a>
                and bring it with you. You can call us at{" "}
                <a href={`tel:${settings.phone}`}>
                  {formatPhone(settings.phone)}
                </a>{" "}
                or book an appointment online below.
              </p>
              <a href={appt.book} target="_blank" rel="noopener noreferrer">
                <button className="bg-ta-blue hover:bg-ta-200 text-white text-lg font-bold py-4 px-6 rounded uppercase tracking-wider shadow-lg">
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>

    <section className="bg-ta-blue">
      <div className="container mx-auto text-white pt-16 pb-8 px-12 md:p-24">
        <h3 className="text-2xl tracking-widest font-semibold text-center pb-8">
          Insurances Accepted
        </h3>
        <div className="flex flex-wrap justify-center">
          {insurance.images.map(img => (
            <div
              className="bg-white rounded-lg py-6 px-8 w-full md:w-1/5 mb-8 shadow-md flex items-center"
              key={img.id}
            >
              <img className="w-full h-auto opacity-75" src={img.publicURL} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <Element name="about">
      <section className="bg-gray-100">
        <div className="container mx-auto md:py-32 flex flex-col">
          <div className="w-full h-64 px-4 order-1 mb-16 md:w-1/2 z-10">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3351669291683!2d-97.13281078436765!3d32.677131781002295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62dbf6034d49%3A0x190f5b44c0395508!2sTa+Eye+Associates!5e0!3m2!1sen!2sus!4v1554481592234!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <div className="mx-4 mt-16 order-0 rounded-t-lg md:w-1/2 bg-white shadow-lg text-gray-800 flex flex-col justify-center content-center">
            <div className="z-0 p-8 pb-12 md:px-8 md:pt-12 md:pb-16">
              <h3 className="text-4xl tracking-widest font-semibold font-optical uppercase pb-8 text-center text-black">
                Ta Eye Associates
              </h3>
              <div className="flex flex-col justify-center content-center">
                <div className="pb-8 md:w-1/2">
                  <h3 className="font-semibold text-black pb-4">Location</h3>
                  <ul className="pb-4">
                    <li className="flex content-center items-center mb-6">
                      <div className="relative mr-2">
                        <svg
                          className="z-0 fill-current text-ta-100 h-8 w-8"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="50" cy="50" r="50" />
                        </svg>
                        <Phone className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <a href={`tel:${settings.phone}`}>
                        {formatPhone(settings.phone)}
                      </a>
                    </li>
                    <li className="flex content-center items-center mb-6">
                      <div className="relative mr-2">
                        <svg
                          className="z-0 fill-current text-ta-100 h-8 w-8"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="50" cy="50" r="50" />
                        </svg>
                        <Fax className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <a href={`tel:${settings.fax}`}>
                        {formatPhone(settings.fax)}
                      </a>
                    </li>
                    <li className="flex content-center items-center mb-6">
                      <div className="relative mr-2">
                        <svg
                          className="z-0 fill-current text-ta-100 h-8 w-8"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="50" cy="50" r="50" />
                        </svg>
                        <Email className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <a href={`mailto:${settings.email}`}>{settings.email}</a>
                    </li>
                  </ul>
                  <p className="leading-loose" dangerouslySetInnerHTML={createMarkup(settings.address)} />
                </div>

                <div className="md:w-1/2">
                  <h3 className="font-semibold text-black text-left pb-2">
                    Hours
                  </h3>
                  <Hours classes="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>

    <Element name="team">
      <section className="pt-16">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-16">
            Our Team
          </h3>
          {staff.doctors.map(doc => (
            <div className="flex flex-col items-center pb-8">
              <div
                className="flex-none img-circle rounded-full h-64 w-64 overflow-hidden shadow-inner"
                style={{
                  backgroundImage: `url(${doc.image.publicURL})`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`
                }}
              />
              <div className="flex-shrink text-left p-8">
                <div className="">
                  <h4 className="text-2xl font-bold border-b-4 border-ta-100 inline-block mb-4">
                    {doc.name}{" "}
                    <span className="text-base font-normal">{doc.title}</span>
                  </h4>
                  <p
                    className="text-gray-700 pb-2"
                    dangerouslySetInnerHTML={createMarkup(doc.bio)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>

    <section className="bg-ta-200 text-blue-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-wrap md:justify-center md:content-center">
          {staff.staff.map(usr => (
            <div className="flex items-center pl-8 pb-8">
              <div
                className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner"
                style={{
                  backgroundImage: `url(${usr.image.publicURL})`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`
                }}
              />
              <div className="flex-shrink text-left pl-8">
                <div className="">
                  <h4 className="text-xl font-bold">{usr.name}</h4>
                  <p>{usr.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Element name="contact">
      <section className="bg-gray-100 pt-16">
        <Form
          formatPhone={formatPhone(settings.phone)}
          phone={settings.phone}
        />
        <Img fluid={image2.childImageSharp.fluid} className="z-0" />
      </section>
    </Element>
  </div>
);

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array
//   })
// };

const IndexPage = ({ data }) => {
  const { index } = data;
  const { site } = data;
  const { staff } = data;

  return (
    <Layout>
      <IndexPageTemplate
        hero={index.frontmatter.hero}
        services={index.frontmatter.services}
        appt={index.frontmatter.appointment}
        insurance={index.frontmatter.insurance}
        image2={index.frontmatter.image2}
        settings={site.frontmatter.settings}
        staff={staff.frontmatter}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        services {
          item1
          text1
          item2
          text2
          item3
          text3
          image {
            publicURL
          }
        }
        appointment {
          image {
            publicURL
          }
          patient {
            publicURL
          }
          book
        }
        insurance {
          images {
            publicURL
            id
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site: markdownRemark(frontmatter: { templateKey: { eq: "site-page" } }) {
      frontmatter {
        settings {
          phone
          fax
          email
          address
        }
      }
    }
    staff: markdownRemark(frontmatter: { templateKey: { eq: "staff-page" } }) {
      frontmatter {
        doctors {
          name
          title
          bio
          image {
            publicURL
          }
        }
        staff {
          name
          title
          image {
            publicURL
          }
        }
      }
    }
  }
`;
