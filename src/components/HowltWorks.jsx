const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <p className="section-subtitle">Three simple steps to turn your unused licenses into cash</p>

      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10" />
            </svg>
          </div>
          <h3>1. Upload License</h3>
          <p>Submit your license details through our secure portal for a quick evaluation.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3>2. Get Valuation</h3>
          <p>Receive a competitive market valuation within 24 hours based on current demand.</p>
        </div>

        <div className="step">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </div>
          <h3>3. Get Paid</h3>
          <p>Accept our offer and receive payment within 3 business days via your preferred method.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
