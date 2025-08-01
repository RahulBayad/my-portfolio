import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-base-200">
      <div className="text-center mb-8">
        <span className="text-center text-4xl font-bold text-primary border-b-2 pb-2">Contact</span>
      </div>
      <div className="flex justify-center">
        <form className="card w-full max-w-lg bg-base-100 shadow-xl p-8" onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" className="input input-bordered" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea name="message" className="textarea textarea-bordered" rows="4" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary btn-wide">Send Message</button>
          {submitted && <div className="mt-4 text-success">Thank you for reaching out!</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact; 