import Head from 'next/head';

export default function Navbar() {
  return (
    <>
      <Head>
				<script src="https://cdn.tailwindcss.com"></script>
      </Head>
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
								className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
    </>
	);
}
