import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-600 uppercase rounded-full bg-teal-accent-400">
                            DEVLEARN
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-600 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        ultimate platform for building your coding knowledge
                    </h2>
                    <p className="text-base text-purple-600 md:text-lg">
                        See our famous blogs
                    </p>
                </div>
                <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">What is cors?</h6>
                        <p className="mb-3 text-m text-purple-600">
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS is an abbreviation for Cross-Origin Response Sharing. It is what allows the website on one URL to request data from a different URL, and it frustrates both the frontend and backend devs alike.
                        </p>

                    </div>
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-purple-600 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">Why are you using firebase? What other options do you have to implement authentication?
                        </h6>
                        <p className="mb-3 text-m text-purple-600">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            The other options are MongoDB, Oracle Database, Amazon Redshift etc.
                        </p>

                    </div>
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-purple-600 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">How does the private route work?
                        </h6>
                        <p className="mb-3 text-m text-purple-600">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>

                    </div>
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-purple-600 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">
                            What is Node? How does Node work?

                        </h6>
                        <p className="mb-3 text-sm text-purple-600">
                            Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;