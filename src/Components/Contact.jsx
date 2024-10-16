// import React from 'react'

const Contact = () => {
  return (
    <div>
                <section className="lhhpGw fZhawX scrolled" data-aos="fade-up" data-section="cinq" tabIndex="-1" aria-hidden="false">
            <div className="inner-content">
                <article className="envobU cavalier" data-theme="electric">
                    <div className="cavalier-content">
                        <h1>Send me a message!</h1>
                        <p>Got a question or proposal, or just want <br/> to say hello? Go ahead.</p>
                    </div>
                </article>
                <form className="contact-form hYlwmr" method="POST" target="_blank" action="" id="home-contact">
                <input type="hidden" name="_subject" value="Message from Davais\d.dev!"/>
                <div className="form-row">
                    <div className="cWhpWP input-group" data-id="full-name">
                        <label htmlFor="full-name"> Your Name</label>
                        <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required"/>
                    </div>
                    <div className="cWhpWP input-group" data-id="email">
                        <label htmlFor="email"> Email Address</label>
                        <input id="email" placeholder="Enter your email address" type="email" name="_replyto" required="required"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="cWhpWP input-group" data-id="message">
                        <label htmlFor="message"> Your Message</label>
                        <textarea placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?" id="message" name="message" required="required" rows="6" minLength="30"></textarea>
                    </div>
                </div>
                <button className="sauce-button hKeZLG py-5" type="submit" id="submit-button">
                <div className="sauce-button__content">
                    Shoot
                    <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow"><path fill="none" stroke="#4831d4" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                </div>
            </button>
            </form>
            </div>
        </section>
    </div>
  )
}

export default Contact