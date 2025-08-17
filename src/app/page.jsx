import { IoIosArrowDown } from "react-icons/io"
import { IoMdMenu } from "react-icons/io"
import Navbar from "./components/Navbar"

export default function Home() {
	return (
		<>
			<div className="min-h-screen bg-white">
				<Navbar />

				{/* Hero Section */}
				<section
					id="hero"
					className="flex flex-col items-center text-center p-8 md:flex-row md:justify-between md:items-center px-16 bg-gradient-to-b from-white to-gradientEnd"
				>
					<div className="md:w-1/2 text-left">
						<h1 className="text-4xl font-[1000] text-gray-900 mb-4 leading-loose">
							Modernize your{" "}
							<span className="relative inline-block">
								<span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
									Oncology Clinical Operations
								</span>
							</span>{" "}
							with AI
							<span className="inline-block align-top">
								<img
									src="/sparkle.svg"
									alt="Sparkle Image"
									className="inline-block w-6 h-6 ml-1 align-top"
								/>
							</span>
						</h1>
						<p className="text-lg text-gray-600 mb-8">
							Oncare AI automates operational workflows to help treat more cancer
							patients while reducing administrative burden for providers.
						</p>
						<div className="flex space-x-4 justify-center md:justify-start">
							<a
								href="mailto:abhinav@useoncare.com"
								className="bg-button text-white px-6 py-3 rounded-full hover:bg-darker transition"
							>
								Schedule a Demo
							</a>
							<a
								href="https://platform.useoncare.com"
								target="_"
								className="border border-button text-button px-6 py-3 rounded-full hover:bg-button hover:text-white transition"
							>
								Log In
							</a>
						</div>
					</div>
					<div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
						{/* Image with Rounded Diamond Shape */}
						<div className="relative">
							<img src="/background-image.svg" alt="Background Image" />
						</div>
					</div>
				</section>

				<section id="built-by">
					<div className="relative z-10">
						<div className="relative mx-auto bg-white rounded-xl shadow-lg shadow-2xl py-8 px-6 text-center lg:-mt-20 max-w-7xl bg-secondary">
							<h2 className="text-xl font-bold text-gray-900 mb-6">
								Built with Experts from
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
								<img src="/penn_logo.png" alt="Penn" className="h-16 mx-auto" />
								<img src="/columbia.png" alt="Columbia" className="h-16 mx-auto" />
								<img src="/duke_logo.png" alt="Duke" className="h-16 mx-auto" />
								<img
									src="/stanford_logo.png"
									alt="Stanford"
									className="h-16 mx-auto"
								/>
								<img src="/united_logo.jpg" alt="United" className="h-16 mx-auto" />
								<img src="/gw_logo.png" alt="GW" className="h-16 mx-auto" />
							</div>
						</div>
					</div>
				</section>

				<section id="about">
					<div className="text-center mt-12">
						<h2 className="text-4xl font-bold text-gray-900">Why Oncare?</h2>
					</div>

					<div className="bg-white py-12">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div className="flex flex-col justify-center items-start space-y-4 lg:mx-[10vw] mx-[5vw]">
								<h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
									Improve Patient{" "}
									<span className="text-black underline decoration-primary decoration-4">
										Access
									</span>
								</h2>
								<p className="text-gray-700 text-lg">
									Oncare’s AI helps oncology teams increase throughput by smartly
									analyzing patient context to enable smarter scheduling and care
									coordination.
								</p>
							</div>
							<div className="relative flex justify-end">
								<img
									src="/patient_access.svg"
									alt="Patient Access"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
							<div className="relative flex justify-start">
								<img
									src="/nursing_satisfaction.svg"
									alt="Nursing Satisfaction"
									className="object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center items-start space-y-4 lg:mx-[10vw] mx-[5vw]">
								<h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
									Increase Nursing{" "}
									<span className="text-black underline decoration-primary decoration-4">
										Satisfaction
									</span>
								</h2>
								<p className="text-gray-700 text-lg">
									Better scheduling, staffing, and capacity management reduces
									nursing overtime and burnout, improves lunch break adherence,
									and alleviates demand crunches during shifts.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
							<div className="flex flex-col justify-center items-start space-y-4 lg:mx-[10vw] mx-[5vw]">
								<h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
									Unlock Care Team{" "}
									<span className="text-black underline decoration-primary decoration-4">
										Efficiency
									</span>
								</h2>
								<p className="text-gray-700 text-lg">
									Automate the logistics that care teams need to complete to
									effectively navigate and treat patients, saving hours for
									providers every day.
								</p>
							</div>
							<div className="relative flex justify-end">
								<img
									src="/care_efficiency.svg"
									alt="Care Efficiency"
									className="object-cover"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
							<div className="relative flex justify-start">
								<img
									src="/patient_wait.svg"
									alt="Patient Wait Times"
									className="object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center items-start space-y-4 lg:mx-[10vw] mx-[5vw]">
								<h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
									Reduce Patient{" "}
									<span className="text-black underline decoration-primary decoration-4">
										Wait Times
									</span>
								</h2>
								<p className="text-gray-700 text-lg">
									Improved coordination across care teams helps orchestrate
									last-minute changes and avoid care delays, ensuring a stronger
									experience for patients and their families.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="use-cases" className="bg-usecasesBackground py-12">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900">Use Cases</h2>
					</div>

					<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 mb-12">
						<div className="bg-white px-8 py-16 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
							<div className="flex justify-center mb-6">
								<img
									src="/clinic.png"
									alt="Outpatient Clinics Icon"
									className="h-16 w-16 text-purple-400"
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
								AI for <span className="font-bold">Outpatient Clinics</span>
							</h3>
							<div className="text-center">
								<a
									href="mailto:abhinav@useoncare.com"
									className="bg-tertiary text-primary px-4 py-2 rounded-full"
								>
									Contact Us
								</a>
							</div>
						</div>

						<div className="bg-white px-8 py-16 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
							<div className="flex justify-center mb-6">
								<img
									src="/infuse.png"
									alt="Infusion Centers Icon"
									className="h-16 w-16 text-purple-400"
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
								AI for <span className="font-bold">Infusion Centers</span>
							</h3>
							<div className="text-center">
								<a
									href="/infusion"
									className="bg-button text-white px-4 py-2 rounded-full hover:bg-darker"
								>
									Learn More
								</a>
							</div>
						</div>

						<div className="bg-white px-8 py-16 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
							<div className="flex justify-center mb-6">
								<img
									src="/medicine.png"
									alt="Pharmacies Icon"
									className="h-16 w-16 text-purple-400"
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
								AI for <span className="font-bold">Pharmacies</span>
							</h3>
							<div className="text-center">
								<a
									href="mailto:abhinav@useoncare.com"
									className="bg-tertiary text-primary px-4 py-2 rounded-full disabled"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="learn-more" className="relative bg-darker py-16">
					<div className="text-center text-white">
						<h2 className="text-4xl font-bold mb-4">How it Works</h2>
						<p className="text-lg max-w-2xl mx-auto mb-8 px-[2vw]">
							Intuitive AI that enables infusion center teams to treat more patients,
							improve nursing satisfaction, and enhance patient experience.
						</p>
						<a
							href="#"
							className="inline-block bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
						>
							Learn More
						</a>
					</div>

					<div className="relative flex justify-center">
						<img
							src="/product_screenshot.png"
							alt="Oncare AI Infusion Centers Product Screenshot"
							className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[80%] h-auto"
						/>
					</div>
				</section>

				<section id="integrations" className="py-16">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900">
							Oncare Integrates with{" "}
							<span className="underline decoration-primary decoration-4">
								Leading EHRs
							</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center max-w-5xl mx-auto">
						<img src="/epic_logo.png" alt="Epic" className="h-16" />
						<img src="/athena_logo.png" alt="Athena Health" className="h-16" />
						<img src="/oracle_logo.png" alt="Oracle Cerner" className="h-16" />
						<img src="/nextgen_logo.png" alt="Nextgen" className="h-16" />
						<img src="/oncoemr.png" alt="OncoEMR" className="h-16" />
						<img src="/meditech_logo.jpg" alt="Meditech" className="h-16" />
					</div>

					<div className="text-center mt-12 text-primary hover:text-darker hover:underline">
						<a
							href="mailto:abhinav@useoncare.com"
							className="font-medium flex justify-center items-center"
						>
							Schedule a demo <span className="ml-2">→</span>
						</a>
					</div>
				</section>

				<section id="security" className="relative bg-indigo-50 py-16 overflow-hidden">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-8">
							Security and Scalability
						</h2>
						<a
							href="https://trust.useoncare.com"
							target="_"
							className="inline-block bg-button text-white px-6 py-3 rounded-full hover:bg-darker transition"
						>
							Access Our Trust Center
						</a>
					</div>

					{/* Oncore logo as background */}
					<div className="absolute top-0 right-[-15%] h-full w-full max-w-2xl opacity-10 z-0 pointer-events-none hidden lg:block">
						<div className="relative h-full w-full flex items-center justify-center">
							<img
								src="/oncare.png"
								alt="Oncore Logo"
								className="object-contain max-h-[150%]"
							/>
						</div>
					</div>

					<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem] mx-auto">
							<h3 className="text-xl font-semibold text-gray-900">
								Single Sign On Ready
							</h3>
						</div>

						<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem] mx-auto">
							<h3 className="text-xl font-semibold text-gray-900">
								Streamlined EHR Integration
							</h3>
						</div>

						<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem] mx-auto">
							<h3 className="text-xl font-semibold text-gray-900">
								Custom Governance Controls
							</h3>
						</div>

						<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem] mx-auto">
							<h3 className="text-xl font-semibold text-gray-900">HIPAA-Compliant</h3>
						</div>
					</div>

					<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 mt-8">
						<div className="flex justify-center lg:justify-end">
							<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem]">
								<h3 className="text-xl font-semibold text-gray-900">
									Secure Cloud
								</h3>
							</div>
						</div>

						<div className="flex justify-center">
							<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem]">
								<h3 className="text-xl font-semibold text-gray-900">
									Encrypted Data
								</h3>
							</div>
						</div>

						<div className="flex justify-center lg:justify-start">
							<div className="bg-white p-10 rounded-3xl shadow-xl h-64 w-[18rem]">
								<h3 className="text-xl font-semibold text-gray-900">
									Smart Analytics and Reporting
								</h3>
							</div>
						</div>
					</div>
				</section>

				<footer className="bg-footer py-16">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-20">
							<div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
								<img src="/oncare.png" alt="Oncore AI Logo" className="h-10" />
								<span className="text-3xl font-bold text-black">Oncare</span>
								<img src="/ai.svg" alt="AI rectangle" className="h-8" />
							</div>
							<h3 className="text-4xl font-bold text-gray-900 mb-6">
								Get Started with Oncare Today.
							</h3>
							<a
								href="mailto:abhinav@useoncare.com"
								className="bg-primary text-white px-6 py-3 rounded-full hover:bg-darker transition mx-auto md:mx-0"
							>
								Get Started
							</a>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center text-center md:text-left md:justify-items-start md:mr-10 px-[2vw]">
							<div>
								<h4 className="text-lg font-semibold text-button mb-4">Platform</h4>
								<ul className="space-y-2">
									<li>
										<a href="#about" className="text-gray-900 hover:underline">
											Why Oncare?
										</a>
									</li>
									<li>
										<a
											href="#use-cases"
											className="text-gray-900 hover:underline"
										>
											Use Cases
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											How it works
										</a>
									</li>
									<li>
										<a
											href="https://trust.useoncare.com"
											target="_"
											className="text-gray-900 hover:underline"
										>
											Security and Stability
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-button mb-4">
									Use Cases
								</h4>
								<ul className="space-y-2">
									<li>
										<a
											href="/infusion"
											className="text-gray-900 hover:underline"
										>
											AI for Infusion Centers
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											AI for Outpatient Clinics
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											AI for Pharmacies
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-button mb-4">
									Who We Serve
								</h4>
								<ul className="space-y-2">
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											Health Systems
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											Ambulatory Infusion Centers
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											Community Oncology Clinics
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-button mb-4">About Us</h4>
								<ul className="space-y-2">
									<li>
										<a href="#" className="text-gray-900 hover:underline">
											Our Company
										</a>
									</li>
									<li>
										<a
											href="/careers"
											className="text-gray-900 hover:underline"
										>
											Careers
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}
