import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-900 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 ">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                Company
                            </h3>
                            <ul className=' p-0 space-y-4'>
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-white "
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 ">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                Support
                            </h3>
                            <ul className="p-0 space-y-4">
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 ">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul className="p-0 space-y-4">
                                <li className="list-none">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer