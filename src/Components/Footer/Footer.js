import React from 'react';
import { CgBee } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <Link to="/" className="btn btn-ghost normal-case text-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-purple-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                        <span class="ml-2 text-xl font-bold tracking-wide text-purple-600 uppercase">
                            DevLearn
                        </span></Link>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm  text-violet-600">
                            Learn Code
                        </p>
                        <p className="mt-4 text-sm text-violet-600">
                            And Build Your Life
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-semibold tracking-wide text-violet-600">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    News
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    World
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Games
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    References
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-violet-600">
                            Business
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Web
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    eCommerce
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Business
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Entertainment
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-violet-600">Apples</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Media
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Brochure
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Nonprofit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Educational
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-violet-600">Cherry</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Infopreneur
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Personal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Wiki
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Forum
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                <p className="text-sm text-gray-600 text-violet-600">
                    © Copyright 2020 DevLearn Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;