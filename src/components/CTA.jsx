import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src={cta} alt="dashboard image" />
        <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Innovative and Powerful Solutions for a Digital World.</h2>
            <p className="mb-6  text-black md:text-lg dark:text-gray-400">Our team of experts leverages cutting-edge technologies such as React.js, Node.js, MongoDB, Express, and WordPress to ensure that every project is completed on-time and to the highest standards. With a focus on meeting and exceeding client expectations, we work tirelessly to deliver solutions that meet the unique needs of each business we work with.</p>
            <a href="mailto:krushnamk1009@gmail.com" className="inline-flex items-center text-white bg-orange-700 hover:bg-orange-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Connect With Team
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
  )
}

export default CTA