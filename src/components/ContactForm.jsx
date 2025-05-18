"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Oracle Database",
    "SAP",
    "Salesforce",
    "VMware",
    "Other",
  ]

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.company.trim()) newErrors.company = "Company is required"

    if (!formData.licenseType) newErrors.licenseType = "Please select a license type"

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid, would normally submit to server here
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact-form">
      <h2>Get Your License Valuation</h2>
      <p className="section-subtitle">Fill out the form below and our team will get back to you within 24 hours</p>

      {submitted ? (
        <div className="success-message">
          <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>Thank you for your submission!</h3>
          <p>We've received your information and will contact you shortly with a valuation.</p>
          <button className="primary-button" onClick={() => setSubmitted(false)}>
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name*</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={errors.company ? "error" : ""}
            />
            {errors.company && <span className="error-message">{errors.company}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="licenseType">License Type*</label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={errors.licenseType ? "error" : ""}
            >
              <option value="">Select License Type</option>
              {licenseTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && <span className="error-message">{errors.licenseType}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us more about your licenses (quantity, purchase date, etc.)"
            ></textarea>
          </div>

          <button type="submit" className="primary-button submit-button">
            Get a Valuation
          </button>
        </form>
      )}
    </section>
  )
}

export default ContactForm
