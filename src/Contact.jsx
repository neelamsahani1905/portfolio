function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();  // prevent page reload
    alert("Sent Successfully!");
  };

  return (
    <div className="page">
      <h1 className="page-title">Contact Me</h1>
      <div className="divider"></div>

      <div className="card">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
