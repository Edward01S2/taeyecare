import React from 'react'
import { Link, graphql } from "gatsby";
import TaLogo from "../img/taeye_logo.svg"

const NotFound = ({ data }) => {
  return (
    <section className="h-full bg-gray-100">
    <div className="flex items-center justify-center lg:h-screen">
      <div className="container py-16">
        <Link to="/">
          <TaLogo className={`h-16 w-auto mx-auto`}/>
        </Link> 
          <div className="flex flex-col p-8 md:items-center lg:flex-row lg:items-center">
            <div className="pt-16 md:pt-0 lg:w-1/2">
              <div className="text-center">
                <h3 className="pb-8 text-2xl font-semibold tracking-widest text-center uppercase md:text-4xl md:mt-8 lg:text-3xl">
                  That page doesn't exist!
                </h3>
                <p className="pb-8 text-lg leading-relaxed text-gray-700">
                  Sorry there's nothing here.
                </p>

                <Link to="/" >
                  <button className="px-6 py-4 text-lg font-bold tracking-wider text-white uppercase rounded shadow-lg bg-ta-100 hover:bg-ta-200">
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


export default NotFound;

