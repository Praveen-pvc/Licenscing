const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <p className="section-subtitle">Join hundreds of satisfied businesses who've recovered value with SoftSell</p>

      <div className="testimonials-container">
        <div className="testimonial">
          <div className="quote">
            "SoftSell helped us recover over $50,000 from unused enterprise licenses after our company downsized. The
            process was incredibly smooth and their valuation exceeded our expectations."
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">
              <div className="avatar-placeholder">JD</div>
            </div>
            <div className="author-info">
              <h4>Jennifer Davis</h4>
              <p>CTO, TechGrowth Solutions</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="quote">
            "As a CFO, I'm always looking for ways to optimize our software spend. SoftSell not only helped us sell
            unused licenses but also provided valuable insights for our future software procurement strategy."
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">
              <div className="avatar-placeholder">MR</div>
            </div>
            <div className="author-info">
              <h4>Michael Rodriguez</h4>
              <p>CFO, Innovate Financial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
