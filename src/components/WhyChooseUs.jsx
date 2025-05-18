const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <h2>Why Choose SoftSell</h2>
      <p className="section-subtitle">We make software license reselling simple, secure, and profitable</p>

      <div className="benefits-container">
        <div className="benefit">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3>Secure Transactions</h3>
          <p>
            Our platform ensures compliant license transfers with full legal documentation and secure payment
            processing.
          </p>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3>Maximum Value</h3>
          <p>Get up to 70% of the original license value, significantly higher than industry averages.</p>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3>Fast Process</h3>
          <p>Complete the entire process in as little as 5 business days, from valuation to payment.</p>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3>Expert Support</h3>
          <p>Our team of licensing specialists guides you through every step of the process.</p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
