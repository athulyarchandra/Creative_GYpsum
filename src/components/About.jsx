import React from 'react'
import logo from '../assets/work1.png'
const About = () => {
    return (
        <>
            <div class="mx-auto mt-5 max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
                <p class="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">Welcome to
                    <span class="border-b border-dotted pl-2 border-slate-300">Creative Gypsum</span>
                </p>

                <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                    <span class="inline-block">Your
                        <span class="relative whitespace-nowrap text-red-900">
                            <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-red-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <span class="pl-1 relative">Personal</span></span>
                    </span>
                    <span class="pl-1 inline-block">Design Studio</span>
                </h1>

                <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                    <span class="inline-block">Interiors crafted with intention, clarity, and style.</span>
                    <span class="inline-block pl-1"> where style meets comfort.</span>
                </p>
            </div>
            <section class=" px-4 md:px-12 lg:px-24">
                <div class="max-w-7xl mx-auto">
                    <div class="bg-white rounded-none shadow-sm p-12 mb-12">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 class="text-2xl font-semibold text-black mb-6">Who We Are</h3>
                                <div class="space-y-4 text-gray-600 leading-relaxed">
                                    <p class="text-lg">
                                        Founded in 2015, we have been at the forefront of digital innovation, helping businesses transform their
                                        ideas into successful digital products. Our team of experts brings together years of experience in web
                                        development, design, and digital strategy.
                                    </p>
                                    <p class="text-lg">
                                        We believe in creating solutions that not only look beautiful but also deliver measurable results. Our
                                        client-focused approach ensures that every project is tailored to meet specific business objectives and
                                        user needs.
                                    </p>
                                </div>

                                <div class="grid grid-cols-2 gap-6 mt-8">
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-black mb-2">25+</div>
                                        <div class="text-gray-500">Projects Completed</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-black mb-2">50+</div>
                                        <div class="text-gray-500">Happy Clients</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-black mb-2">3+</div>
                                        <div class="text-gray-500">Years Experience</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-3xl font-bold text-black mb-2">15+</div>
                                        <div class="text-gray-500">Team Members</div>
                                    </div>
                                </div>
                            </div>

                            <div class="hidden bg-red-900 rounded-full h-96 lg:flex items-center justify-center">
                                <div class="text-center">
                                    <span class="text-gray-500 text-lg"><img src={logo} alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article> */}
        </>
    )
}

export default About