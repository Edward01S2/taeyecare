import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(160, 174, 192, 0.75)",
    zIndex: "1000",
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
  }
};

Modal.setAppElement('#___gatsby');

export const IndexPageTemplate = ({
  hero,
  services,
  appt,
  insurance,
  settings,
  staff,
  image2
}) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [bannerOpen, setBannerOpen] = useState(false);

  function closeModal(){
    setModalOpen(false);
    setBannerOpen(true);
  }

  function openModal() {
    setModalOpen(true);
  }

return (
  <div>

    {/* COVID19 STUFF */}
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Modal"
    >
      <div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div>
          <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
            <svg class="h-16 w-16 text-red-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-2xl leading-6 font-bold tracking-wider text-gray-900">
              COVID-19 UPDATES
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-7 text-gray-700 lg:text-base">
                In light of COVID-19, we are in a reduced schedule at this time.
              </p>
              <p class="bg-gray-200 py-2 mt-2 font-bold rounded">
                Starting May 4th, 2020<br/>Mon - Sat: 11AM - 5PM<br/>Sun: Closed
              </p>
              <p class="text-sm leading-7 text-gray-700 mt-2">
                In order to adhere to social distancing, we ask that patients please come to their appointment unaccompanied (unless the patient is a minor or requires mobility assistance). If you are experiencing fever, cough, trouble breathing or have been in contact with someone that has been diagnosed with COVID-19, we kindly ask that you reschedule your appointment for another time.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <span class="flex w-full rounded-md shadow-sm">
            <button onClick={e => {
              e.preventDefault();
              closeModal();
            }} type="button" class="inline-flex uppercase tracking-wider justify-center w-full rounded-md border border-transparent px-4 py-2 bg-ta-200 text-lg leading-6 font-medium text-white shadow-sm hover:bg-ta-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              Close
            </button>
          </span>
        </div>
      </div>
    </Modal>

    {bannerOpen &&
    <div class="fixed bottom-0 inset-x-0 pb-2 z-50 sm:pb-5">
      <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="p-2 rounded-lg bg-blue-900 shadow-lg sm:p-3">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-ta-200">
                <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                </svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden">
                  COVID-19 Updates!
                </span>
                <span class="hidden md:inline">
                Coronavirus (COVID-19): Important information and updates
                </span>
              </p>
            </div>
            <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <div class="rounded-md shadow-sm">
                <a href="#" onClick={e => {
                  e.preventDefault();
                  openModal();
                }}
            class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-ta-300 bg-white hover:text-ta-200 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  Learn more
                </a>
              </div>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button onClick={() => setBannerOpen(!bannerOpen)} type="button" class="-mr-1 flex p-2 rounded-md hover:bg-ta-300 focus:outline-none focus:bg-ta-300 transition ease-in-out duration-150" aria-label="Dismiss">
                <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    }

  {/* END COVID19-STUFF */}

    <div
      className="w-screen h-screen flex content-center justify-center lg:bg-fixed"
      style={{
        backgroundImage: `url(${hero.image.publicURL})`,
        //backgroundPosition: `top left`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        //backgroundAttachment: `fixed`
      }}
    >
      <div className="v-center p-4">
        <h2
          className="text-6xl text-center font-optical tracking-widest text-white leading-none text-shadow-md md:text-8xl lg:text-10xl xl:max-w-6xl xl:text-12xl"
          dangerouslySetInnerHTML={createMarkup(hero.title)}
        />
      </div>
    </div>

    <Element name="services">
      <section className="text-center md:mx-8 xl:bg-transparent">
        <div className="container mx-auto md:-mt-24 bg-white rounded-lg md:shadow-md md:shadow-lg xl:bg-white xl:-mt-32">
          <div className="flex px-8 py-8 md:py-8 lg:p-8 xl:px-16 xl:py-10">
            <div className="lg:w-1/2 flex flex-col lg:pr-16">
              <h3 className="text-4xl tracking-widest font-semibold text-center uppercase md:pb-0 xl:pb-4">
                Services
              </h3>

              <div className="py-4 border-b-2 border-gray-200 lg:py-4">
                <div className="flex content-center items-center mb-4 lg:mb-4">
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

                <p className="text-gray-700 text-left leading-relaxed lg:text-sm xl:text-base">
                  {services.text1}
                </p>
              </div>
              <div className="py-8 border-b-2 border-gray-200">
                <div className="flex content-center items-center mb-4">
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
                <p className="text-gray-700 text-left leading-relaxed lg:text-sm xl:text-base">
                  {services.text2}
                </p>
              </div>
              <div className="py-8">
                <div className="flex content-center items-center mb-4">
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
                <p className="text-gray-700 text-left leading-relaxed lg:text-sm xl:text-base">
                  {services.text3}
                </p>
              </div>
            </div>
            <div className="hidden lg:w-1/2 lg:block">
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
      <section className="bg-gray-100">
        <div className="container mx-auto md:mt-24">
          <div className="flex flex-col p-8 py-24 md:py-16 md:items-center lg:flex-row">
            <div className="md:w-1/2 md:p-8 md:pt-0">
              <img
                className="w-full h-full"
                src={appt.image.publicURL}
                alt=""
              />
            </div>
            <div className="pt-16 md:w-1/2 md:pt-0">
              <div className="text-center">
                <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8 md:mt-8">
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
                  <button className="bg-ta-100 hover:bg-ta-200 text-white text-lg font-bold py-4 px-6 rounded uppercase tracking-wider shadow-lg">
                    Book Appointment
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>

    <section className="bg-ta-200">
      <div className="container mx-auto text-white pt-16 pb-8 px-12 md:py-16 md:px-8">
        <h3 className="text-2xl tracking-widest font-semibold text-center pb-8">
          Insurances Accepted
        </h3>
        <div className="flex flex-wrap justify-center">
          {insurance.images.map(img => (
            <div
              className="bg-white rounded-lg py-6 px-8 w-full mb-8 shadow-md flex items-center md:w-1/3 md:mx-2 lg:w-1/4 xl:w-1/5"
              key={img.id}
            >
              <img className="w-full h-auto" src={img.publicURL} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <Element name="about">
      <section className="bg-gray-100">
        <div className="container mx-auto md:py-16 flex flex-col lg:px-8 xl:flex-row xl:px-0">
          <div className="mx-4 order-1 mb-24 z-10 md:mx-8 md:shadow-md md:shadow-lg md:mb-0 md:px-0 lg:mx-0 lg:px-0 xl:w-1/2">
            <div className="w-full h-64 lg:h-72 xl:h-80">
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3351669291683!2d-97.13281078436765!3d32.677131781002295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62dbf6034d49%3A0x190f5b44c0395508!2sTa+Eye+Associates!5e0!3m2!1sen!2sus!4v1554481592234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
          </div>
          <div className="mx-4 mt-16 order-0 rounded-t-lg bg-white shadow-lg text-gray-800 flex flex-col justify-center content-center md:mx-8 md:my-0 lg:mx-0 xl:w-1/2">
            <div className="z-0 p-8 pb-12 md:px-8 md:pt-12 md:pb-8">
              <h3 className="text-4xl tracking-widest font-semibold font-optical uppercase pb-8 text-center text-black">
                Ta Eye Associates
              </h3>
              <div className="flex flex-col justify-center content-center md:flex-row">
                <div className="pb-4 lg:w-1/3 xl:w-1/2">
                  <ul>
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
                  <p
                    className="leading-loose lg:hidden xl:block"
                    dangerouslySetInnerHTML={createMarkup(settings.address)}
                  />
                </div>

                <div className="pb-8 hidden md:hidden lg:block lg:w-1/3 xl:hidden">
                  <p
                    className="leading-loose"
                    dangerouslySetInnerHTML={createMarkup(settings.address)}
                  />
                </div>

                <div className="md:w-1/2 md:pl-12 lg:w-1/3 lg:p-0 xl:w-1/2">
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
        <div className="container mx-auto text-center xl:pb-8">
          <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-16 lg:pb-8">
            Our Team
          </h3>
          {staff.doctors.map(doc => (
            <div className="flex flex-col items-center pb-8 lg:flex-row lg:pl-8">
              <div
                className="flex-none img-circle rounded-full h-64 w-64 overflow-hidden shadow-inner"
                style={{
                  backgroundImage: `url(${doc.image.publicURL})`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`
                }}
              />
              <div className="flex-shrink text-left p-8 md:px-16">
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
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:content-center md:px-16">
          {staff.staff.map(usr => (
            <div className="flex items-center pl-8 pb-8 md:w-1/2 md:px-2 xl:w-1/3">
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
              };

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
            publicURL
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
