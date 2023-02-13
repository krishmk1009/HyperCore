import React from 'react'

const Content = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Expertise, Dedication, and Passion</h2>
                    <p class="mb-4">Our team is a passionate and dedicated group of full stack developers, committed to delivering exceptional results for our clients. With a wealth of experience in the latest technologies and a deep understanding of web development, our team works together seamlessly to bring your vision to life. Driven by a shared passion for technology and a commitment to excellence, our developers are always pushing the boundaries of what's possible.</p>
                    <p>And with a strong sense of unity and collaboration, our team is able to tackle even the most complex projects with ease.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
            </div>
        </section>
    )
}

export default Content