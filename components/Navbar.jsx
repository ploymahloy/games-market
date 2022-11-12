import Link from 'next/link';

export default function Navbar() {
	return (
		<div>
			<div className="relative px-4 py-6 sm:px-6 lg:px-8">
				<nav
					className="relative flex items-center justify-between sm:h-10"
					aria-label="Global"
				>
					<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
						<div className="flex w-full items-center justify-between md:w-auto">
							<Link href="/" className="text-4xl font-semibold">
								<span className="sr-only">Your Company</span>
                Game{`'`}s Farmers Market
							</Link>
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
					<div className="hidden md:ml-10 md:block md:space-x-8">
						<Link
							href="/about"
							className="font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 border-neutral-400"
						>
							About
						</Link>
						<Link
							href="/hours"
							className="font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 border-neutral-400"
						>
							Hours
						</Link>
					</div>
				</nav>
			</div>
			<div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
				<div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
					<div className="flex items-center justify-between px-5 pt-4">
            <div className="text-xl font-medium">Game{`'`}s Farmers Market</div>
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
						<Link
							href="/about"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
						>
							About
						</Link>
						<Link
							href="/hours"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
						>
							Hours
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
