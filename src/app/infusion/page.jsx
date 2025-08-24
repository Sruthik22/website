import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Navbar from '../components/Navbar';
import FAQSection from './FAQSection';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar/>

        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center bg-gradient-to-b from-white to-[#f5f6fc] min-h-[80vh]">
          {/* Text section */}
          <div className="md:w-1/2 text-left p-8 md:pl-[6rem]">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              AI 
              <span className="inline-block my-2">
                <img src="/sparkle.svg" alt="Sparkle Image" className="inline-block w-6 h-6" style={{ verticalAlign: 'text-top' }} />
              </span> 
              for <span className="relative inline-block">
                <span className="bg-indigo-100 text-indigo-600 px-2 py-1 mt-2 rounded-md block">
                  Infusion Centers
                </span>
              </span>
            </h2>

            <p className="text-lg mb-8 max-w-md">
              Intuitive AI that enables infusion center teams to treat more patients, improve nursing satisfaction, and enhance patient experience.
            </p>
            <div className="flex space-x-4 justify-start">
              <a href="mailto:abhinav@useoncare.com" className="bg-[#6955EA] text-white px-6 py-3 rounded-full hover:bg-[#5648C2] transition">
                Schedule a Demo
              </a>
              <a href="https://platform.useoncare.com" target="_" className="border border-[#6955EA] text-[#6955EA] px-6 py-3 rounded-full hover:bg-[#6955EA] hover:text-white transition">
                Log In
              </a>
            </div>
          </div>

          {/* Image section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
            <div className="relative">
              <img src="/daily-calendar.png" alt="Daily Calendar Infusion Center Interface" className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl"/>
            </div>
          </div>
        </section>

        {/* New Section for Optimizing Variables */}
        <section id="optimizing-variables" className="bg-white py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">The Problem</h2>
            <p className="lg:text-2xl text-lg max-w-2xl mx-auto mb-8 px-[2vw] mt-8">
              Infusion Center Operations are extremely challenging, leading to <span className="font-bold">complex scheduling</span> and <span className="font-bold">staffing hurdles</span>.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/optimizing_variables.png" 
                alt="Optimizing Dozens of Variables" 
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[80%] h-auto"
              />
            </div>
          </div>
        </section>


        <section id="status-quo" className="bg-[#F9F9FA] py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">The Status Quo</h2>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/scheduling_problem.png" 
                alt="Optimizing Dozens of Variables" 
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[80%] h-auto mx-auto"
              />
            </div>
          </div>
        </section>

        {/* New Section for Optimizing Variables */}
        <section id="optimizing-variables" className="bg-white py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">The Solution</h2>
            <p className="lg:text-2xl text-lg max-w-5xl mx-auto mb-8 px-[2vw] mt-8">
              Oncare strengthens infusion center operations by <span className="font-bold">improving patient access, reducing nursing burden and overtime, &amp; enhancing care team efficiency</span>
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/capacity_management.png" 
                alt="AI-based capacity management for Infusion Centers: Increase Chair Time Utilization, Smooth Demand Peaks, Reduce Nursing Overtime, Decrease Patient Wait Times" 
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[80%] h-auto mx-auto"
              />
            </div>
          </div>

          <div className="text-center mb-2">
            <p className="lg:text-2xl text-lg max-w-5xl mx-auto mb-8 px-[2vw] mt-8">
            Oncare helps manage <span className="font-bold">both scheduling and staffing</span>, pairing this with AI that recommends <span className="font-bold">real-time adjustments</span> throughout the day.
            </p>
          </div>
        </section>

        <section id="learn-more" className="relative bg-darker py-16">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">Streamlined EHR Integration</h2>
            <p className="lg:text-2xl text-lg max-w-4xl mx-auto mb-8 px-[2vw] mt-8" style={{ lineHeight: '2' }}>
              Oncare integrates seamlessly with all leading EHRs and is <span className="font-bold text-[#A7DBFF] bg-[#5648C2] max-w-2xl mx-auto mb-8 px-1 py-1 rounded-lg">able to use</span> <span className="font-bold text-[#A7DBFF] bg-[#5648C2] max-w-2xl mx-auto mb-8 px-1 py-1 rounded-lg">several different methods</span>, 
              including FHIR, SFTP, HL7, &amp; EHR APIs.</p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/ehr_integration.png" 
                alt="Optimizing Dozens of Variables"
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[60%] h-auto mx-auto"
              />
            </div>
          </div>
          <div className="text-center text-white mt-8">
            <p className="lg:text-2xl text-lg max-w-4xl mx-auto mb-8 px-[2vw] mt-10 mb-8" style={{ lineHeight: '2' }}> {/* Custom line-height applied directly */}
              Oncare streamlines implementation by <span className="font-bold text-[#A7DBFF] bg-[#5648C2] max-w-2xl mx-auto mb-8 px-1 py-1 rounded-lg">
                only requiring read-only</span> integration via several options, including <span className="font-bold text-[#A7DBFF] bg-[#5648C2] max-w-2xl mx-auto mb-8 px-1 py-1 rounded-lg">
                flat files
              </span>.
            </p>
          </div>
        </section>

        <section id="about">
          <div className="text-center mt-12">
            <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
          </div>

          <div className="text-center mb-2">
            <p className="lg:text-2xl text-lg max-w-5xl mx-auto mb-8 px-[2vw] mt-8">
            Oncare’s AI boosts throughput by keeping schedules on track better than traditional tools and nudging teams to follow optimal recommendations throughout the day.
            </p>
          </div>

          <div className="py-12 space-y-12">
            {/* First section: Image on the left, text on the right */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-start">
              <img src="/nursing-assignments.png" alt="Nursing Assignments" className="object-cover w-full max-w-lg" />
              <div className="flex flex-col justify-center items-start lg:pl-8 mt-6 lg:mt-0 max-w-2xl p-8"> {/* Left-aligned text */}
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  AI-powered nursing assignments
                </h2>
                <p className="text-gray-700 text-lg">
                  Load balancing of patient volume across nursing team by optimizing against 20+ key inputs (e.g., acuity, infusion length, room and isolation status requirements, pharmacy lead times, etc.)
                </p>
              </div>
            </div>

            {/* Second section: Text on the left, image on the right */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-end">
              <img src="/smart-templates.png" alt="Smart Templates" className="object-cover w-full max-w-lg" />
              <div className="flex flex-col justify-center items-start lg:pr-8 mt-6 lg:mt-0 max-w-2xl lg:ml-auto p-8"> 
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 text-right w-full"> {/* Applied w-full and text-right */}
                  Smart scheduling templates
                </h2>
                <p className="text-gray-700 text-lg text-right w-full"> {/* Applied w-full and text-right */}
                  Load balancing of patient volume across nursing team by optimizing against 20+ key inputs (e.g., acuity, infusion length, room and isolation status requirements, pharmacy lead times, etc.)
                </p>
              </div>
            </div>


            {/* Third section: Image on the left, text on the right */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-start">
              <img src="/capacity-management.png" alt="Capacity Management" className="object-cover w-full max-w-lg" />
              <div className="flex flex-col justify-center items-start lg:pl-8 mt-6 lg:mt-0 max-w-2xl p-8"> {/* Left-aligned text */}
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  Real-time capacity management
                </h2>
                <p className="text-gray-700 text-lg">
                  Load balancing of patient volume across nursing team by optimizing against 20+ key inputs (e.g., acuity, infusion length, room and isolation status requirements, pharmacy lead times, etc.)
                </p>
              </div>
            </div>

            {/* Fourth section: Text on the left, image on the right */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-end">
              <img src="/dynamic-changes.png" alt="Dynamic Changes" className="object-cover w-full max-w-lg" />
              <div className="flex flex-col justify-center items-start lg:pr-8 mt-6 lg:mt-0 max-w-2xl lg:ml-auto p-8"> 
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 text-right w-full"> {/* Applied w-full and text-right */}
                  Dynamic Changes &amp; Exception Handling
                </h2>
                <p className="text-gray-700 text-lg text-right w-full"> {/* Applied w-full and text-right */}
                  Add-on scheduling recommendations &amp; conversational AI tools to optimally handle last-minute changes, and plan coverage to handle last-minute staffing changes.
                </p>
              </div>
            </div>


            {/* Fifth section: Image on the left, text on the right */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-start">
              <img src="/platform-configurability.png" alt="Platform Configurability" className="object-cover w-full max-w-lg" />
              <div className="flex flex-col justify-center items-start lg:pl-8 mt-6 lg:mt-0 max-w-2xl p-8"> {/* Left-aligned text */}
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  Platform Configurability
                </h2>
                <p className="text-gray-700 text-lg">
                  Oncare&apos;s AI engine is customizable across care settings based on dozens of advanced variables and staffing/scheduling inputs.
                </p>
              </div>
            </div>

            {/* Sixth section: Text on the left, image on the right */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-end">
              <img src="/smart-reporting.png" alt="Smart Reporting" className="object-cover w-full max-w-lg" />
              <div className="flex flex-col justify-center items-start lg:pr-8 mt-6 lg:mt-0 max-w-2xl lg:ml-auto p-8"> 
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 text-right w-full"> {/* Applied w-full and text-right */}
                  Smart Reporting
                </h2>
                <p className="text-gray-700 text-lg text-right w-full"> {/* Applied w-full and text-right */}
                  Improve capacity management with automated, intelligent reports that help staff monitor performance goals, make proactive decisions, and quickly spot operational issues that need attention.
                </p>
              </div>
            </div>

            {/* Final section with the plus icon and text */}
          <div className="flex justify-center items-center space-x-4 max-w-4xl mx-auto mt-12">
            {/* Plus Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-[#F5F7FF] rounded-lg shadow-md">
              <span className="text-[#5648C2] text-2xl font-bold">+</span>
            </div>

            {/* Text box */}
            <div className="flex items-center bg-[#F5F7FF] px-8 py-6 rounded-lg shadow-md">
              <p className="text-[#5648C2] font-semibold text-lg">
                Expanding to improve many more infusion center operational workflows
              </p>
            </div>
          </div>
        </div>
      </section>

        <section className="bg-gray-50 py-12">
          <div className="container max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-sm mx-auto md:ml-auto lg:ml-auto">
                <div className="text-left mb-6">
                  <img src="/quotation-marks.svg" alt="quotation marks" className="w-8 h-8 inline-block mr-2" />
                  <p className="text-gray-700 mt-2 text-left">
                    Our Oncology Providers Have More Available Infusion Appointments.
                  </p>
                </div>
                <p className="mt-4 italic font-bold text-left text-gray-900">VP of Oncology Services</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-sm mx-auto">
                <div className="text-left mb-6">
                  <img src="/quotation-marks.svg" alt="quotation marks" className="w-8 h-8 inline-block mr-2" />
                  <p className="text-gray-700 mt-2 text-left">
                    With Oncare, there are no more nursing peaks and valleys.
                  </p>
                </div>
                <p className="mt-4 italic font-bold text-left text-gray-900">VP of Director of Nursing, Oncology</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-sm mx-auto md:mr-auto lg:mr-auto">
                <div className="text-left mb-6">
                  <img src="/quotation-marks.svg" alt="quotation marks" className="w-8 h-8 inline-block mr-2" />
                  <p className="text-gray-700 mt-2 text-left">
                    Right now, our nurses sometimes don&apos;t get lunch breaks until 4 PM! Oncare solves this.
                  </p>
                </div>
                <p className="mt-4 italic font-bold text-left text-gray-900">Nursing Manager, Infusion Center</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection/>

        <section className="bg-[#2E266F] py-24 text-center"> {/* Increased top and bottom padding */}
          <div className="container mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-10"> {/* Added more margin at the bottom */}
              <img src="/logo-alternate.png" alt="Oncare Icon" className="w-12 h-12" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl mx-auto"> {/* Added max-width and margin */}
              Get the most out of your infusion center with Oncare
            </h2>

            {/* Contact Button */}
            <a href="mailto:info@useoncare.com" className="bg-[#5648C2] text-white px-8 py-4 rounded-full text-lg hover:bg-[#4537a8] transition"> {/* Increased padding for the button */}
              Contact us
            </a>
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
              <a href="mailto:abhinav@useoncare.com" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-darker transition mx-auto md:mx-0">
                Get Started
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center text-center md:text-left md:justify-items-start md:mr-10 px-[2vw]">
              <div>
                <h4 className="text-lg font-semibold text-button mb-4">
                  Platform
                </h4>
                <ul className="space-y-2">
                  <li><a href="/#about" className="text-gray-900 hover:underline">Why Oncare?</a></li>
                  <li><a href="/#use-cases" className="text-gray-900 hover:underline">Use Cases</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">How it works</a></li>
                  <li><a href="https://trust.useoncare.com" target="_" className="text-gray-900 hover:underline">Security and Stability</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-button mb-4">
                  Use Cases
                </h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 hover:underline">AI for Infusion Centers</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">AI for Outpatient Clinics</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">AI for Pharmacies</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-button mb-4">
                  Who We Serve
                </h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 hover:underline">Health Systems</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">Ambulatory Infusion Centers</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">Community Oncology Clinics</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-button mb-4">
                  About Us
                </h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 hover:underline">Our Company</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
