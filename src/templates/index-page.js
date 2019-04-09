import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Doctor from "../img/medicine.svg";
import Appt from "../img/appt.svg";
import BlueCross from "../img/bcbs.svg";
import Phone from "../img/phone-call.svg";
import Fax from "../img/file-text.svg";
import Email from "../img/mail.svg";
import Eye from "../img/eye.svg";
import Clip from "../img/clipboard.svg";
import Check from "../img/user-check.svg";

import Layout from "../components/Layout";
import Form from "../components/Form";
//import Features from '../components/Features'
//import BlogRoll from '../components/BlogRoll'

function createMarkup(cms) {
  return { __html: cms };
}

export const IndexPageTemplate = ({
  hero,
  image2,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <div
      className="w-screen h-screen flex content-center justify-center"
      style={{
        backgroundImage: `url(${
          !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
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
                <svg className="z-0 fill-current text-ta-100 h-10 w-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50"/>
                </svg>
                <Check className="absolute absolute-center z-10 h-5 w-5 text-white stroke-current" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                Eye Checkups
              </h3>
            </div>

              <p className="text-gray-700 text-md">
                Regardless of your age, a comprehensive eye evaluation is
                important. We will not only determine your prescription but also
                examine your eyes for common conditions which can clue us in on
                the health of your eyes as well as your body.
              </p>
            </div>
            <div className="pb-8">
            <div className="flex content-center items-center mb-3">
              <div className="relative mr-4">
                <svg className="z-0 fill-current text-ta-100 h-10 w-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50"/>
                </svg>
                <Eye className="absolute absolute-center z-10 h-5 w-5 text-white stroke-current" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                Contact Fittings
              </h3>
            </div>
              <p className="text-gray-700">
                Regardless of your age, a comprehensive eye evaluation is
                important. We will not only determine your prescription but also
                examine your eyes for common conditions which can clue us in on
                the health of your eyes as well as your body.
              </p>
            </div>
            <div className="">
            <div className="flex content-center items-center mb-3">
              <div className="relative mr-4">
                <svg className="z-0 fill-current text-ta-100 h-10 w-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50"/>
                </svg>
                <Clip className="absolute absolute-center z-10 h-5 w-5 text-white stroke-current" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                Other Services
              </h3>
            </div>
              <p className="text-gray-700">
                Regardless of your age, a comprehensive eye evaluation is
                important.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <Doctor className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto mb-24">
      <div className="flex">
        <div className="w-1/2">
          <Appt className="w-full h-full" />
        </div>
        <div className="w-1/2">
          <div className="p-16 text-center">
            <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8">
              Appointments
            </h3>
            <p className="pb-8 text-gray-700">
              Ready to make your appointment? Download the{" "}
              <a
                className="text-blue-500 hover:underline hover:pointer"
                href="/"
              >
                new patient form
              </a>{" "}
              and bring it with you. You can call us at 888-888-8888 or book an
              appointment online below.
            </p>
            <button className="bg-ta-blue hover:bg-ta-300 text-white font-bold py-4 px-6 rounded">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-ta-blue">
      <div className="container mx-auto text-white p-16">
        <h3 className="text-3xl tracking-widest font-semibold text-center pb-8">
          Insurances Accepted
        </h3>
        <div className="flex flex-wrap justify-center -mx-16">
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-8 w-1/5 mx-4 mb-8 shadow-md">
            <BlueCross className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-100">
      <div className="container mx-auto py-24 flex">
        <div className="w-1/2 z-10 shadow-lg">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3351669291683!2d-97.13281078436765!3d32.677131781002295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62dbf6034d49%3A0x190f5b44c0395508!2sTa+Eye+Associates!5e0!3m2!1sen!2sus!4v1554481592234!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          />
        </div>
        <div className="w-1/2 bg-white shadow-lg rounded-r-lg text-gray-800 flex flex-col justify-center content-center">
          <div className="z-0 p-4">
            <h3 className="text-4xl tracking-widest font-semibold font-optical uppercase pb-8 text-center text-black">
              Ta Eye Associates
            </h3>
            <div className="flex justify-center content-center">
              <div className="w-1/2 pl-4">

                  <h3 className="font-semibold text-black pb-2">Location</h3>
                  <ul className="pb-4">
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Phone className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <p>(888) 888-8888</p>
                    </li>
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Fax className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <p>(888) 888-8888</p>
                    </li>
                    <li className="flex content-center items-center mb-3">
                      <div className="relative mr-2">
                        <svg className="z-0 fill-current text-ta-100 h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <Email className="absolute absolute-center z-10 h-4 w-4 text-white stroke-current" />
                      </div>
                      <p>office@taeyecare.com</p>
                    </li>
                  </ul>
                  <p>
                    <span className="font-medium">
                      The Parks Mall at Arlington
                    </span>
                    <br />
                    (Btwn Sears and Barnes & Nobles)
                    <br />
                    3811 S. Cooper St. Suite #2004
                    <br />
                    Arlington, TX 76015
                  </p>
                </div>

              <div className="w-1/2">
                <h3 className="font-semibold text-black text-center pb-2">Hours</h3>
                <table className="border-collapse text-sm mx-auto">
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-4">Wednesday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-24 pb-16">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl tracking-widest font-semibold text-center uppercase pb-8">Our Team</h3>
        <div className="flex items-center pb-16">
          <div className="flex-none img-circle rounded-full h-64 w-64 overflow-hidden shadow-inner" 
            style={{
              backgroundImage: `url(https://www.distinctiveeye.com/img/home-bio-diane.png)`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
            }}>
          </div>
          <div className="flex-shrink text-left pl-16">
            <div className="">
              <h4 className="text-2xl font-bold border-b-4 border-ta-100 inline-block mb-4">Dr. Diane Ta <span className="text-base font-normal">O.D.</span></h4>
              <p className="text-gray-700 pb-2">Dr. Diane Ta was born and raised in Myrtle Beach, South Carolina and received her Bachelor of Science in Biological Sciences with a minor in Renaissance Studies from the University of South Carolina. She then moved to Houston where she received her Doctor of Optometry degree from the University of Houston College of Optometry. She is currently licensed to practice therapeutic optometry and is certified as an Optometric Glaucoma Specialist. She is an active member of the Texas Optometric Association, the American Optometric Association as well as the local Tarrant County Optometric Association. Dr. Ta has special interest in fitting multifocal contact lenses, LASIK and cataract co-management and dry eye evaluation/management. In her free time she likes spending time with her family and friends, reading, running and traveling the world.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center pb-16">
          <div className="flex-none img-circle rounded-full h-64 w-64 overflow-hidden shadow-inner" 
            style={{
              backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
            }}>
          </div>
          <div className="flex-shrink text-left pl-16">
            <div className="">
            <h4 className="text-2xl font-bold border-b-4 border-ta-100 inline-block mb-4">Dr. Christiane Royal <span className="text-base font-normal">O.D.</span></h4>
              <p className="text-gray-700 pb-2">Dr. Diane Ta was born and raised in Myrtle Beach, South Carolina and received her Bachelor of Science in Biological Sciences with a minor in Renaissance Studies from the University of South Carolina. She then moved to Houston where she received her Doctor of Optometry degree from the University of Houston College of Optometry. She is currently licensed to practice therapeutic optometry and is certified as an Optometric Glaucoma Specialist. She is an active member of the Texas Optometric Association, the American Optometric Association as well as the local Tarrant County Optometric Association. Dr. Ta has special interest in fitting multifocal contact lenses, LASIK and cataract co-management and dry eye evaluation/management. In her free time she likes spending time with her family and friends, reading, running and traveling the world.</p>
            </div>
          </div>
        </div>
        </div>
        </section>

        <section className="bg-ta-200 text-blue-100 py-12">
        <div className="container mx-auto">
        <div className="flex flex-wrap justify-center content-center">
        <div className="flex items-center px-8">
          <div className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner" 
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
          }}>
          </div>
          <div className="flex-shrink text-left pl-8">
            <div className="">
              <h4 className="text-xl font-bold">Tiffany Hong</h4>
              <p>Optometric Technician</p>
            </div>
          </div>
        </div>
        
        
        <div className="flex items-center p-8">
          <div className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner" 
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
          }}>
          </div>
          <div className="flex-shrink text-left pl-8">
            <div className="">
              <h4 className="text-xl font-bold">Tiffany Hong</h4>
              <p>Optometric Technician</p>
            </div>
          </div>
        </div>

        <div className="flex items-center p-8">
          <div className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner" 
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
          }}>
          </div>
          <div className="flex-shrink text-left pl-8">
            <div className="">
              <h4 className="text-xl font-bold">Tiffany Hong</h4>
              <p>Optometric Technician</p>
            </div>
          </div>
        </div>
        <div className="flex items-center p-8">
          <div className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner" 
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
          }}>
          </div>
          <div className="flex-shrink text-left pl-8">
            <div className="">
              <h4 className="text-xl font-bold">Tiffany Hong</h4>
              <p>Optometric Technician</p>
            </div>
          </div>
        </div>
        <div className="flex items-center p-8">
          <div className="flex-none img-circle rounded-full h-24 w-24 overflow-hidden shadow-inner" 
              style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
          }}>
          </div>
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
          <Form/>
          <Img fluid={image2.childImageSharp.fluid} className="z-0"/>
        </section>


  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        image2={frontmatter.image2}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
