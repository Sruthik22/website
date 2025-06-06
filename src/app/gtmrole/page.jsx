"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ReactMarkdown from 'react-markdown';
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    linkedin: '',
    github: '',
    portfolio: '',
    experience: '',
    message: '',
    cv: null,
    remote: 'yes',
    gender: '',
    ethnicity: '',
    veteranStatus: '',
    disability: '',
    role: 'Founding GTM Role',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name !== 'role') {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    alert('Trying to submit application...');

    // Submit form data to an API route
    const res = await fetch('/api/send-application', {
      method: 'POST',
      body: formDataToSend,
    });

    if (res.ok) {
      alert('Application submitted successfully!');
    } else {
      alert('Failed to submit application.');
    }
  };

  const markdownContent = `
### Company Overview

At Oncare, we are building an AI clinical operations platform for oncology. Our mission is to use technology to help improve cancer patient's access to care and reduce the administrative burden that nurses face when navigating patients through their care journey.

## Position Overview

Oncare is seeking a **Founding GTM (Growth & BD)** to join our team. As a foundational member of our team, you will work directly with the CEO to scale our existing outbound GTM strategy and build new channels, including inbound, partnerships, conferences. You will play a key leadership role in setting our commercial direction, defining our sales culture, and scaling the team as we grow and will be compensated with a substantial equity stake in a fast-growing company.

## Responsibilities

The nature of this work will change in a fast-moving environment but typically involves a combination:

-   📈 **Outbound Management**: Prospecting and lead generation, lead qualification and nurturing, Multi-channel sales outreach and follow-up, CRM management
-   🧪 **Experimentation & Optimization:** A/B testing and experimentation to optimize outbound campaigns, and other sales channels.
-   📊 **Creating metrics and KPIs to measure channel performance**: Build a data-driven understanding of each step in the pipeline, as well as at the outbound sequence level to inform improvement.
-   🧭 **BD & Market Analysis**: Customer segmentation and analytics to assess opportunities, inform outreach, and GTM strategy.
-   🎨 **As we expand, opportunity to** recruit **and manage sales team / grow into a Chief of Staff Role:** Once we establish a scalable GTM channel, you will be responsible for leading an in-house team to ramp up sales or managing external contractors.

## Qualifications

-   Self-motivated and ability to take ownership and work through ambiguity to independently drive projects to completion
-   Willingness to embrace new and widely varying challenges in a dynamic startup setting
-   Strong problem-solving skills and a proactive approach to challenges
-   Excellent communication skills and ability to work collaboratively with a growing team
-   Passion for healthcare, especially working with providers & health systems

## Benefits

In addition to a competitive salary and equity package, we offer:

-   Free Lunch
-   Free Gym

## Location

Philadelphia / Remote

## Culture & Values

-   🔎 **Intellectual Curiosity:** We're all about asking the tough questions and diving deep to figure things out. If you're someone who's always learning and eager to explore, you'll thrive here.
-   **💪 Persistence**: We value determination and the ability to push through obstacles. If you have the tenacity to keep driving towards a solution despite setbacks, you'll be a strong fit for our team.
-   🎯 **Attention to Detail**: The work we do directly impacts oncology care, where precision can make all the difference. If you're committed to delivering work that reflects the importance of our mission, your attention to detail will help us create real change for patients and providers.
-   🤝🏽 **Teamwork:** We're in this together. Collaboration and supporting each other are in our DNA. If you're someone who enjoys rolling up your sleeves and working as part of a tight-knit team, you'll feel at home.
-   🛠️ **Creativity:** We love bold ideas and out-of-the-box thinking. As one of the founding team members, you will ideate and map out the products you help build. If you enjoy experimenting and finding unconventional solutions, you'll fit right in!
-   🚀 **Passion for Healthcare:** We are driven by a shared vision: to transform the care experience for oncology patients and their provider teams. We have witnessed firsthand the distress and anxiety that cancer patients endure due to disjointed, uncoordinated care. Recognizing these systemic inefficiencies, we believe there is an urgent need for transformation—not just for patients but also for the nurses and physicians who face unprecedented burnout due to these overwhelming challenges. We are looking for teammates who are as passionate about solving these challenges as we are!

## Why Join Us?

-   🏥 **Impact:** Be a key player in transforming cancer care and making a tangible difference in oncology patient's and provider's experience.
-   🧑🏽‍💼 **Ownership and Equity:** Take full ownership of commercial decisions and shape the future of our roadmap, sales strategy, and team. Own significant equity and call shots in a rapidly scaling startup.
-   📈 **Growth:** Join a rapidly growing company where you will have the opportunity to gain experience in areas like building strategic partnerships, driving revenue, scaling go-to-market initiatives, and deeply understanding the healthcare ecosystem.
`;

return (
  <div className="min-h-screen bg-[#F3F8FF] text-foreground font-sans">
<Navbar />
<div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  {/* Markdown Content */}
  <ReactMarkdown className="prose prose-lg dark:prose-dark text-black mx-auto">
    {markdownContent}
  </ReactMarkdown>

  {/* Form Container */}
  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mt-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Submit your application</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Full Name */}
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                      +1
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="1234567890"
                      className="block w-full rounded-none rounded-r-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.phone.replace(/^\+1/, '')} 
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, '');
                        setFormData((prev) => ({ ...prev, phone: `+1${digits}` }));
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Current Company */}
              <div className="sm:col-span-3">
                <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                  Current Company
                </label>
                <div className="mt-2">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Resume */}
              <div className="sm:col-span-6">
                <label htmlFor="cv" className="block text-sm font-medium leading-6 text-gray-900">
                  Resume/CV <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                  <div className="text-center">
                    {/* If no file uploaded, show the upload button */}
                    {!formData.cv ? (
                      <>
                        <AiOutlineCloudUpload className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="cv"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2"
                          >
                            <span>Upload a file</span>
                            <input
                              id="cv"
                              name="cv"
                              type="file"
                              className="sr-only"
                              accept=".pdf"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  setFormData((prev) => ({ ...prev, cv: file }));
                                }
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF files up to 10MB</p>
                      </>
                    ) : (
                      // If a file is uploaded, show the file name and remove option
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-3 flex-1 mr-4">
                          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p className="text-sm font-medium text-gray-900">{formData.cv.name}</p>
                        </div>
                        <div>
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, cv: null }))}
                          className="inline-flex items-center justify-center rounded-full h-8 w-8 transition-colors duration-150 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 group"
                        >
                          <svg className="h-4 w-4 text-gray-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Personal Summary */}
              <div className="col-span-full">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Personal Summary
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* LinkedIn URL */}
              <div className="sm:col-span-3">
                <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">
                  LinkedIn URL
                </label>
                <div className="mt-2">
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/johndoe"
                  />
                </div>
              </div>

              {/* Github URL */}
              <div className="sm:col-span-3">
                <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
                  Github URL
                </label>
                <div className="mt-2">
                  <input
                    id="github"
                    name="github"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/johndoe"
                  />
                </div>
              </div>

              {/* Portfolio URL */}
              <div className="sm:col-span-3">
                <label htmlFor="portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                  Portfolio URL
                </label>
                <div className="mt-2">
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.portfolio}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Voluntary Self-Identification */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Voluntary Self-Identification</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Gender */}
              <div className="sm:col-span-3">
                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option>Gender</option>
                    <option>Man</option>
                    <option>Woman</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Ethnicity */}
              <div className="sm:col-span-3">
                <label htmlFor="ethnicity" className="block text-sm font-medium leading-6 text-gray-900">
                  Ethnicity &amp; Race
                </label>
                <div className="mt-2">
                  <select
                    id="ethnicity"
                    name="ethnicity"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.ethnicity}
                    onChange={handleChange}
                  >
                    <option>Ethinicity</option>
                    <option>White</option>
                    <option>African American</option>
                    <option>Asian (East)</option>
                    <option>Asian (South)</option>
                    <option>Hispanic or Latino</option>
                    <option>Native American</option>
                    <option>Pacific Islander</option>
                    <option>I decline to identify</option>
                  </select>
                </div>
              </div>

              {/* Veteran Status */}
              <div className="sm:col-span-3">
                <label htmlFor="veteranStatus" className="block text-sm font-medium leading-6 text-gray-900">
                  Protected Veteran Status
                </label>
                <div className="mt-2">
                  <select
                    id="veteranStatus"
                    name="veteranStatus"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.veteranStatus}
                    onChange={handleChange}
                  >
                    <option>Veteran Status</option>
                    <option>I am a protected veteran</option>
                    <option>I am not a protected veteran</option>
                    <option>I decline to self-identify</option>
                  </select>
                </div>
              </div>

              {/* Disability */}
              <div className="sm:col-span-3">
                <label htmlFor="disability" className="block text-sm font-medium leading-6 text-gray-900">
                  Disability Status
                </label>
                <div className="mt-2">
                  <select
                    id="disability"
                    name="disability"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.disability}
                    onChange={handleChange}
                  >
                    <option>Disability Status</option>
                    <option>I identify as disabled</option>
                    <option>I do not identify as disabled</option>
                    <option>I decline to disclose</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit application
            </button>
          </div>
        </div>
      </form>
    </div>

</div>
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
            <a href="mailto:abhinav@useoncare.com" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-darker transition mx-auto md:mx-0">
              Get Started
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center text-center md:text-left md:justify-items-start md:mr-10 px-[2vw]">
            <div>
              <h4 className="text-lg font-semibold text-button mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-900 hover:underline">Why Oncare?</a></li>
                <li><a href="#use-cases" className="text-gray-900 hover:underline">Use Cases</a></li>
                <li><a href="#" className="text-gray-900 hover:underline">How it works</a></li>
                <li><a href="https://trust.useoncare.com" target="_" className="text-gray-900 hover:underline">Security and Stability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-button mb-4">Use Cases</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-900 hover:underline">AI for Infusion Centers</a></li>
                <li><a href="#" className="text-gray-900 hover:underline">AI for Outpatient Clinics</a></li>
                <li><a href="#" className="text-gray-900 hover:underline">AI for Pharmacies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-button mb-4">Who We Serve</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-900 hover:underline">Health Systems</a></li>
                <li><a href="#" className="text-gray-900 hover:underline">Ambulatory Infusion Centers</a></li>
                <li><a href="#" className="text-gray-900 hover:underline">Community Oncology Clinics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-button mb-4">About Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-900 hover:underline">Our Company</a></li>
                <li><a href="/careers" className="text-gray-900 hover:underline">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
</div>

);
}

