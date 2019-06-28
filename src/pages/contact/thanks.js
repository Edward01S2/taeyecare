import React from 'react'
import { Link, graphql } from "gatsby";
import TaLogo from "../../img/taeye_logo.svg"

const ThanksPage = ({ data }) => {
  const contact = data.prismicContactSubmission.data;

  return (
    <section className="bg-gray-100 h-full">
    <div className="flex justify-center items-center lg:h-screen">
      <div className="container py-16">
        <Link to="/">
          <TaLogo className={`h-16 w-auto mx-auto`}/>
        </Link> 
          <div className="flex flex-col p-8 md:items-center lg:flex-row lg:items-center">
            <div className="md:w-3/4 md:pt-0 lg:w-1/2 lg:p-8">
              <img className="h-full w-full" src={contact.image.url} />
            </div>
            <div className="pt-16 md:pt-0 lg:w-1/2">
              <div className="text-center">
                <h3 className="text-2xl md:text-4xl tracking-widest font-semibold text-center uppercase pb-8 md:mt-8 lg:text-3xl">
                  {contact.title.text} 
                </h3>
                <p className="pb-8 text-lg leading-relaxed text-gray-700">
                  We will contact you about your message shortly. If you would like to speak to someone immediately, please call us at{" "}
                  <a href={`tel:8174684461`}>
                    (817) 468-4461
                  </a>
                  .
                </p>

                <Link to="/" >
                  <button className="bg-ta-100 hover:bg-ta-200 text-white text-lg font-bold py-4 px-6 rounded uppercase tracking-wider shadow-lg">
                    Return Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
)
  }


export default ThanksPage;

export const thanksPageQuery = graphql`
  query ServicePage {
    prismicContactSubmission {
      data {
        image {
          url
        }
        message {
          html
        }
        title {
          text
        }
      }
    }
  }
`;
