import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

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
  var cleaned = ('' + num).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

export const IndexPageTemplate = ({
  hero,
  services,
  appt,
  insurance,
  settings,
  staff,
  image2,
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
      <div className="v-center">
        <h2
          className="font-optical tracking-widest text-white text-12xl leading-none text-shadow-md"
          dangerouslySetInnerHTML={createMarkup(hero.title)}
        />
      </div>
    </div>

    <section className="mb-24">
      <div className="container mx-auto -mt-32 bg-white shadow-md rounded-lg">
        <div className="flex p-16 pt-8">
          <div className="w-1/2 flex flex-col pr-16">
            <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8">
              Services
            </h3>
            <div className="pb-8">
              <div className="flex content-center items-center mb-3">
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

              <p className="text-gray-700 text-md">{services.text1}</p>
            </div>
            <div className="pb-8">
              <div className="flex content-center items-center mb-3">
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
              <p className="text-gray-700">{services.text2}</p>
            </div>
            <div className="">
              <div className="flex content-center items-center mb-3">
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
              <p className="text-gray-700">{services.text3}</p>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="w-full h-full"
              src={services.image.publicURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto my-40">
      <div className="flex">
        <div className="w-1/2">
          <img className="w-full h-full" src={appt.image.publicURL} alt="" />
        </div>
        <div className="w-1/2">
          <div className="p-16 text-center">
            <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8">
              Appointments
            </h3>
            <p className="pb-8 text-gray-700">
              Ready to make your appointment? Download the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={appt.patient.publicURL}
              >
                new patient form{" "}
              </a>
              and bring it with you. You can call us at{" "}
              <a href={`tel:${settings.phone}`}>{formatPhone(settings.phone)}</a> or book an appointment
              online below.
            </p>
            <a href={appt.book} target="_blank" rel="noopener noreferrer">
              <button className="bg-ta-blue hover:bg-ta-200 text-white text-lg font-bold py-4 px-6 rounded uppercase tracking-wider">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-ta-blue">
      <div className="container mx-auto text-white p-24">
        <h3 className="text-3xl tracking-widest font-semibold text-center pb-12">
          Insurances Accepted
        </h3>
        <div className="flex flex-wrap justify-center -mx-16">
          {insurance.images.map(img => (
            <div className="bg-white rounded-lg p-6 w-1/5 mx-4 mb-8 shadow-md flex items-center" key={img.id}>
              <img className="w-full h-auto" src={img.publicURL} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-100">
      <div className="container mx-auto py-32 flex">
        <div className="w-1/2 z-10 shadow-lg">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3351669291683!2d-97.13281078436765!3d32.677131781002295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62dbf6034d49%3A0x190f5b44c0395508!2sTa+Eye+Associates!5e0!3m2!1sen!2sus!4v1554481592234!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
          />
        </div>
        <div className="w-1/2 bg-white shadow-lg rounded-r-lg text-gray-800 flex flex-col justify-center content-center">
          <div className="z-0 px-8 pt-12 pb-16">
            <h3 className="text-4xl tracking-widest font-semibold font-optical uppercase pb-8 text-center text-black">
              Ta Eye Associates
            </h3>
            <div className="flex justify-center content-center">
              <div className="w-1/2 pl-4">
                <h3 className="font-semibold text-black pb-2">Location</h3>
                <ul className="pb-4">
                  <li className="flex content-center items-center mb-3">
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
                    <a href={`tel:${settings.phone}`}>{formatPhone(settings.phone)}</a>
                  </li>
                  <li className="flex content-center items-center mb-3">
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
                    <a href={`tel:${settings.fax}`}>{formatPhone(settings.fax)}</a>
                  </li>
                  <li className="flex content-center items-center mb-3">
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
                <p dangerouslySetInnerHTML={createMarkup(settings.address)}></p>
              </div>

              <div className="w-1/2">
                <h3 className="font-semibold text-black text-center pb-2">
                  Hours
                </h3>
                <Hours classes="mx-auto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-24 pb-16">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8">
          Our Team
        </h3>
          {staff.doctors.map(doc => (
            <div className="flex items-center pb-16">
              <div
                className="flex-none img-circle rounded-full h-64 w-64 overflow-hidden shadow-inner"
                style={{
                  backgroundImage: `url(${doc.image.publicURL})`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`
                }}
              />
              <div className="flex-shrink text-left pl-16">
                <div className="">
                  <h4 className="text-2xl font-bold border-b-4 border-ta-100 inline-block mb-4">
                    {doc.name} <span className="text-base font-normal">{doc.title}</span>
                  </h4>
                  <p className="text-gray-700 pb-2" dangerouslySetInnerHTML={createMarkup(doc.bio)}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    <section className="bg-ta-200 text-blue-100 py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center content-center">
          <div className="flex items-center px-8">
            <div
              className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner"
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`
              }}
            />
            <div className="flex-shrink text-left pl-8">
              <div className="">
                <h4 className="text-xl font-bold">Tiffany Hong</h4>
                <p>Optometric Technician</p>
              </div>
            </div>
          </div>

          <div className="flex items-center p-8">
            <div
              className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner"
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`
              }}
            />
            <div className="flex-shrink text-left pl-8">
              <div className="">
                <h4 className="text-xl font-bold">Tiffany Hong</h4>
                <p>Optometric Technician</p>
              </div>
            </div>
          </div>

          <div className="flex items-center p-8">
            <div
              className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner"
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`
              }}
            />
            <div className="flex-shrink text-left pl-8">
              <div className="">
                <h4 className="text-xl font-bold">Tiffany Hong</h4>
                <p>Optometric Technician</p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-8">
            <div
              className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner"
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`
              }}
            />
            <div className="flex-shrink text-left pl-8">
              <div className="">
                <h4 className="text-xl font-bold">Tiffany Hong</h4>
                <p>Optometric Technician</p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-8">
            <div
              className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner"
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`
              }}
            />
            <div className="flex-shrink text-left pl-8">
              <div className="">
                <h4 className="text-xl font-bold">Tiffany Hong</h4>
                <p>Optometric Technician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 pt-24">
      <Form />
      <Img fluid={image2.childImageSharp.fluid} className="z-0" />
    </section>
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
      }
    }
  }
`;
