import Head from 'next/head';
import Image from 'next/image';

import amish from '../assets/amish.jpeg';
import header from '../assets/header.jpeg';
import meat from '../assets/meat.jpeg';
import produce from '../assets/produce.jpeg';

export default function Home() {
	return (
		<div className="font-sans">
			<Head>
				<title>Game's Farmers Market</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<script src="https://cdn.tailwindcss.com"></script>
			</Head>

			{/* Navigation */}
			<div className="relative overflow-hidden bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
						{/* Slant shape */}
						<svg
							className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>

						<div>
							<div className="relative px-4 pt-6 sm:px-6 lg:px-8">
								<nav
									className="relative flex items-center justify-between sm:h-10"
									aria-label="Global"
								>
									<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
										<div className="flex w-full items-center justify-between md:w-auto">
											<a href="/" className="text-4xl font-semibold">
												<span className="sr-only">Your Company</span>
												Game's Farmers Market
											</a>
											<div className="-mr-2 flex items-center md:hidden">
												<button
													type="button"
													className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
													aria-expanded="false"
												>
													<span className="sr-only">Open main menu</span>

													<svg
														className="h-6 w-6"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
										<a
											href="/about"
											className="font-medium text-gray-500 hover:text-gray-900"
										>
											About
										</a>
										<a
											href="/products"
											className="font-medium text-gray-500 hover:text-gray-900"
										>
											Products
										</a>
										<a
											href="/contact"
											className="font-medium text-gray-500 hover:text-gray-900"
										>
											Contact
										</a>
									</div>
								</nav>
							</div>
							<div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
								<div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
									<div className="flex items-center justify-between px-5 pt-4">
										<div className="text-xl font-medium">
											Game's Farmers Market
										</div>
										<div>
											<button
												type="button"
												className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
											>
												<span className="sr-only">Close main menu</span>

												<svg
													className="h-6 w-6"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
									</div>
									<div className="space-y-1 px-2 pt-2 pb-3">
										<a
											href="/about"
											className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
										>
											About
										</a>
										<a
											href="/products"
											className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
										>
											Products
										</a>
										<a
											href="/contact"
											className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
										>
											Contact
										</a>
									</div>
								</div>
							</div>
						</div>

						<section className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block xl:inline">Committed to serving</span>
									<span className="block mx-2 text-green-600 xl:inline">
										you.
									</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
									Serving the community since 1972, Game's Farmers Market
									provides some of the region's best locally sourced meat and
									produce at a fair price.
								</p>
							</div>
						</section>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
						src={header}
						alt="produce"
						height={1000}
						width={1000}
					/>
				</div>
			</div>

			<section className="p-8 bg-green-600 text-center">
				<div className="pb-4 mt-10 w-full lg:w-2/3 mx-auto">
					<h2 className="font-bold tracking-tight text-white text-5xl md:text-7xl">
						<div className="py-4">
							<span className="text-red-600">Steak</span> and{' '}
							<span className="text-teal-200">Seafood</span>
						</div>
					</h2>
					<div class="relative">
						<Image
							className="border-2 border-white"
							src={meat}
							alt="meat"
							height={1000}
							width={1000}
						/>
						<div class="opacity-0 hover:opacity-100 m-0.5 p-2 duration-300 absolute inset-0 z-10 flex justify-center items-center text-md sm:text-lg text-white bg-black bg-opacity-60">
							At games, we pride ourself on the quality of our meat products and
							the price in which they can be offered. We take special care in
							ensuring a consistent quality control for our loyal patrons.
						</div>
					</div>
				</div>
				<div className="pb-4 mt-10 w-full lg:w-2/3 mx-auto">
					<h2 className="font-bold tracking-tight text-white text-5xl md:text-7xl">
						<div className="py-4">
							<span className="text-orange-400">Fruits</span> and{' '}
							<span className="text-yellow-400">Veggies</span>
						</div>
					</h2>
					<div class="relative">
						<Image
							className="border-2 border-white"
							src={produce}
							alt="produce"
							height={1000}
							width={1000}
						/>
						<div class="opacity-0 hover:opacity-100 m-0.5 p-2 duration-300 absolute inset-0 z-10 flex justify-center items-center text-md sm:text-lg text-white bg-black bg-opacity-60">
							Much like our meat selection, our produce is procured from local
							farmers. Gauranteed to be organic, our fruits and vegetables are
							as fresh as they come.
						</div>
					</div>
				</div>
				<div className="pb-4 mt-10 w-full lg:w-2/3 mx-auto">
					<h2 className="font-bold tracking-tight text-white text-5xl md:text-7xl">
						<div className="py-4">
							Amish <span className="text-purple-800">Baked Goods</span>
						</div>
					</h2>
					<div class="relative">
						<Image
							className="border-2 border-white"
							src={amish}
							alt="produce"
							height={1000}
							width={1000}
						/>
						<div class="opacity-0 hover:opacity-100 m-0.5 p-2 duration-300 absolute inset-0 z-10 flex justify-center items-center text-md sm:text-lg text-white bg-black bg-opacity-60">
              As with our other offerings, our store partners with local Amish bakers to provided some of the community's richest baked goods.
						</div>
					</div>
				</div>
			</section>

			{/* Reviews */}
			<section className="block md:flex justify-around p-4 lg:p-8">
				<div className="p-12 md:w-1/2 text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="inline-block w-8 h-8 text-gray-400 md:mb-8"
						viewBox="0 0 975.036 975.036"
					>
						<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
					</svg>
					<p className="leading-relaxed text-lg">
						I love Farmers Market! Been going to this place since I was a young
						girl and it's still going strong. The meats are beautiful and fresh.
						You can even buy cases of meat. And the old fashion candy and
						cookies are amazing! If you haven't been, you should go!
					</p>
					<span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
					<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
						Jane Doe
					</h2>
					<p className="text-gray-500">Local Guide</p>
				</div>
				<div className="p-12 md:w-1/2 text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="inline-block w-8 h-8 text-gray-400 md:mb-8"
						viewBox="0 0 975.036 975.036"
					>
						<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
					</svg>
					<p className="leading-relaxed text-lg">
						Super cool, little family owned market place. They have the little
						known candies and snacks that are incredibly hard to find at most
						big chain box stores. The pricing of their meats is beyond
						reasonable. Great pricing of all of their other products.
					</p>
					<span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
					<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
						John Customer
					</h2>
					<p className="text-gray-500">Senior Product Designer</p>
				</div>
			</section>

			{/* Contact Form */}
			<section className="bg-gray-900">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-5xl font-extrabold text-center text-green-600">
						Contact Us
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-gray-400 sm:text-xl">
						Got a technical issue? Want to send feedback about a beta feature?
						Need details about our Business plan? Let us know.
					</p>
					<form action="#" className="space-y-8">
						<div>
							<label
								for="email"
								className="block mb-2 text-md font-medium text-gray-900 text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="name@flowbite.com"
								required
							/>
						</div>
						<div>
							<label
								for="subject"
								className="block mb-2 text-md font-medium text-gray-900 text-gray-300"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="Let us know how we can help you"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								for="message"
								className="block mb-2 text-sm font-medium text-gray-900 text-gray-400"
							>
								Your message
							</label>
							<textarea
								id="message"
								rows="6"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
								placeholder="Leave a comment..."
							></textarea>
						</div>
						<button
							type="submit"
							className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						>
							Send message
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
