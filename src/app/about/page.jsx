"use client"
import Navbar from "../components/Navbar"
import AdvisorsGrid from "../../components/AdvisorsGrid"

import { useState, useEffect } from "react"

export default function AboutPage() {
	const [viewportWidth, setViewportWidth] = useState(null)

	useEffect(() => {
		// Set viewportWidth when the component mounts
		if (typeof window !== "undefined") {
			setViewportWidth(window.innerWidth)

			function handleResize() {
				setViewportWidth(window.innerWidth)
			}

			window.addEventListener("resize", handleResize)
			return () => window.removeEventListener("resize", handleResize)
		}
	}, [])

	// If viewportWidth is not set yet, don't render the diagram
	if (viewportWidth === null) {
		return null // Or you can return a loader/spinner if you prefer
	}

	const circleSize = Math.min(0.4 * viewportWidth, 500)
	const distanceRatio = 0.18 // Adjust this value between 0 and 1 to change overlap
	const distanceBetweenCenters = circleSize * distanceRatio

	const leftCircleLeft = viewportWidth / 2 - distanceBetweenCenters / 2
	const rightCircleLeft = viewportWidth / 2 + distanceBetweenCenters / 2 - circleSize

	return (
		<>
			<div className="min-h-screen bg-white">
				<Navbar />

				{/* Hero Section */}
				<section className="text-center py-32 bg-gradient-to-b from-white to-[#f5f6fc]">
					<h1 className="text-5xl font-bold text-black mb-8 flex items-center justify-center">
						About
						<img src="oncare.png" alt="Oncare Logo" className="w-10 h-10 mx-4" />
						Oncare
					</h1>
					<p className="text-2xl text-[#000000] max-w-3xl mx-auto">
						At Oncare, we are dedicated to transforming the care experience for oncology
						patients and providers through enabling better access and revamping how care
						coordination is tackled.
					</p>
				</section>

				{/* Why Section */}
				<section className="py-20 bg-white">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-semibold text-black">Why Oncare?</h2>
					</div>
					<div
						className="relative flex justify-center items-center"
						style={{ height: circleSize + 100 }}
					>
						{/* Left Circle */}
						<div
							className="absolute bg-[#0051FF1A] border-4 border-white rounded-full flex items-center justify-center shadow-2xl"
							style={{
								width: circleSize,
								height: circleSize,
								left: leftCircleLeft
							}}
						>
							<div className="text-center px-10 lg:px-16 max-w-[100px] lg:max-w-[400px]">
								<p className="text-black text-xl font-semibold">
									We aspire to a future where oncology providers can truly focus
									on{" "}
									<span className="font-bold text-[#525AFF]">
										patient-centric care delivery
									</span>{" "}
									rather than constantly fighting an uphill battle against care
									logistics.
								</p>
							</div>
						</div>

						{/* Right Circle */}
						<div
							className="absolute bg-[#9E58FF1A] border-4 border-white rounded-full flex items-center justify-center shadow-2xl"
							style={{
								width: circleSize,
								height: circleSize,
								left: rightCircleLeft
							}}
						>
							<div className="text-center px-10 lg:px-16 max-w-[100px] lg:max-w-[400px]">
								<p className="text-black text-xl">
									Cancer patients often face distress & anxiety due to{" "}
									<span className="font-bold">
										disjointed, uncoordinated care
									</span>
									.
								</p>
								<p className="text-black text-xl mt-4">
									Recognizing these systemic inefficiencies, we believe there is
									an <span className="font-bold">urgent need for change</span> —
									not just for patients but also for the nurses and physicians who
									face unprecedented burnout due to these overwhelming challenges.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Founders Section */}
				<section className="py-16 bg-lighterBackgroundDiv">
					<div className="max-w-6xl mx-auto px-6">
						<h2 className="text-4xl font-bold text-black mb-12 text-center">Founders</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							{/* Abhi Kurada */}
							<div className="flex items-center gap-5 py-4">
								<img
									src="/founders/abhi-kurada.png"
									alt="Abhi Kurada"
									className="h-32 w-32 rounded-full object-cover ring-2 ring-zinc-200"
									loading="lazy"
								/>
								<div className="min-w-0">
									<div className="text-3xl font-semibold leading-tight tracking-tight text-zinc-900">Abhi Kurada</div>
									<div className="mt-1 text-2xl leading-snug text-zinc-600">
										<span className="italic">Founder and CEO</span>
									</div>
								</div>
							</div>

							{/* Sruthi Kurada */}
							<div className="flex items-center gap-5 py-4">
								<img
									src="/founders/sruthi-kurada.png"
									alt="Sruthi Kurada"
									className="h-32 w-32 rounded-full object-cover ring-2 ring-zinc-200"
									loading="lazy"
								/>
								<div className="min-w-0">
									<div className="text-3xl font-semibold leading-tight tracking-tight text-zinc-900">Sruthi Kurada</div>
									<div className="mt-1 text-2xl leading-snug text-zinc-600">
										<span className="italic">Founder and CTO</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Our Advisors Section */}
				<section className="py-16 bg-[#F3F8FF]">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-4xl font-bold text-black mb-12 text-center">Advisors</h2>
						<AdvisorsGrid />
					</div>
				</section>

				<section className="bg-lighterBackgroundDiv py-16 text-center">
					<div className="max-w-4xl mx-auto mb-12">
						<h2 className="text-4xl mb-8 font-bold text-[#000000]">Our Values</h2>
					</div>

					{/* Card Grid */}
					<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
						{/* First Row */}
						<div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
							{/* Placeholder Image with Increased Height */}
							<div className="h-56 mb-4 rounded-3xl">
								<img
									src="fire.png"
									alt="Passion"
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<h3 className="text-2xl font-semibold text-[#000000] mb-2">Passion</h3>
							<p className="text-[#000000] text-lg px-4 py-4 text-left">
								We aim to revolutionize care for oncology patients and their
								providers by addressing the problem of disjointed, uncoordinated
								care.{" "}
								<span className="font-bold">
									Our goal is to enable oncology providers to focus on patient
									care
								</span>{" "}
								rather than struggling with logistics.
							</p>
						</div>

						<div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
							{/* Placeholder Image with Increased Height */}
							<div className="h-56 mb-4 rounded-3xl">
								<img
									src="team.png"
									alt="Teamwork"
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<h3 className="text-2xl font-semibold text-[#000000] mb-2">Teamwork</h3>
							<p className="text-[#000000] text-lg px-4 py-4 text-left">
								We are in this together.{" "}
								<span className="font-bold">
									Collaboration and supporting each other are in our DNA.
								</span>{" "}
								If you are someone who enjoys rolling up your sleeves and working as
								part of a tight-knit team, you will feel at home.
							</p>
						</div>

						<div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
							{/* Placeholder Image with Increased Height */}
							<div className="h-56 mb-4 rounded-3xl">
								<img
									src="world.png"
									alt="Diversity"
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<h3 className="text-2xl font-semibold text-[#000000] mb-2">
								Diversity
							</h3>
							<p className="text-[#000000] text-lg px-4 py-4 text-left">
								We believe that solving complex healthcare challenges requires
								bringing together a wide range of clinical, engineering, and
								operational perspectives.
							</p>
						</div>

						{/* Second Row */}
						<div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
							{/* Placeholder Image with Increased Height */}
							<div className="h-56 mb-4 rounded-3xl">
								<img
									src="canvas.png"
									alt="Creativity"
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<h3 className="text-2xl font-semibold text-[#000000] mb-2">
								Creativity
							</h3>
							<p className="text-[#000000] text-lg px-4 py-4 text-left">
								We love{" "}
								<span className="font-bold">
									bold ideas and out-of-the-box thinking
								</span>
								. If you enjoy experimenting and finding unconventional solutions,
								you will fit right in!
							</p>
						</div>

						<div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
							{/* Placeholder Image with Increased Height */}
							<div className="h-56 mb-4 rounded-3xl">
								<img
									src="bulb.png"
									alt="Intellectual Curiosity"
									className="w-full h-full object-cover rounded-3xl"
								/>
							</div>
							<h3 className="text-2xl font-semibold text-[#000000] mb-2">
								Intellectual Curiosity
							</h3>
							<p className="text-[#000000] text-lg px-4 py-4 text-left">
								We&apos;re all about asking the{" "}
								<span className="font-bold">
									tough questions and diving deep to figure things out
								</span>
								. If you&apos;re someone who&apos;s always{" "}
								<span className="font-bold">learning and eager to explore</span>,
								you&apos;ll thrive here.
							</p>
						</div>
					</div>
				</section>

				{/* Our Investors Section */}
				<section className="py-16 bg-white text-center">
					<h2 className="text-4xl font-bold text-black mb-8">Investors</h2>
					{/* Single Image with Logos */}
					<div className="flex justify-center">
						<img
							src="/investors.png"
							alt="Our Investors"
							className="max-w-full h-auto"
						/>
					</div>
				</section>

				{/* Revamp Oncology Care Delivery Section */}
				<section className="py-16 bg-[#F3F8FF]">
					<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
						{/* Left Column: Text and Button */}
						<div className="lg:w-1/2 mb-8 lg:mb-0">
							<h2 className="text-4xl font-bold text-black mb-4">
								Excited to Revamp Oncology Care Delivery?
							</h2>
							<p className="text-lg text-gray-700 mb-8">
								Improve patient access, increase nursing satisfaction, unlock care
								team efficiency, and reduce patient wait times with scalable
								AI-augmented workflows — all with a single platform.
							</p>
							<a
								href="#"
								className="bg-primary text-white font-medium py-3 px-6 rounded-full"
							>
								Book a Demo
							</a>
						</div>
						<div className="lg:w-1/2 flex justify-center lg:justify-end">
							<img
								src="/logo-effect.png"
								alt="Oncare Logo"
								className="w-full max-w-sm h-auto object-cover"
							/>
						</div>
					</div>
				</section>

				{/* Footer */}
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
										<a href="#" className="text-gray-900 hover:underline">
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
