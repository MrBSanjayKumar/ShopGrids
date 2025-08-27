import Image from "../images/logo/career.jpg"

const contact = () => {
  return (
    <section className='container py-5'>

      <div class="row">
        <div className="col-12 col-md-12 col-lg-6">
          <h5>Quick Connect</h5>
          <form className='form-control1'>
            <label for='name' className='py-3' >Name</label> <br />
            <input type='text' id='name' required className='input_from' />
            <label for='phone' className='py-3'>Phone</label> <br />
            <input type='tel' id='phone' required className='input_from' />
            <label for='email' className='py-3'>Email</label> <br />
            <input type='email' id='email' required className='input_from' />
            <label for='Issue' className='py-3'>Issue</label> <br />
            <input id='Issue' className='input_from' required />
            <label for='message' className='py-3'>Your Message (Max 200 Characters)</label> <br />
            <textarea className='input_fromtext' maxLength="200" id='message' rows='4' placeholder='Enter your message (max 200 characters)' required></textarea>
            <button type='cancel' style={{ padding: '15px 40px', borderRadius: '50px', border: "1px solid black" }} className='btn btn-light mt-3 mx-3'>CANCEL</button>
            <button type='submit' style={{ padding: '15px 40px', borderRadius: '50px', border: "1px solid black" }} className='btn btn-primary mt-3'>SUBMIT</button>
          </form>
        </div>
        <div class="card col-12 col-md-6 col-lg-6">
          <h4 className='mx-5 py-3'>Customer Care</h4>
          <div className='card-body'>
            <h6 className=''><i className="bi bi-envelope-paper-heart-fill"></i><a style={{ textDecoration: 'none', color: 'black' }} href="mailto:sanjaysk1683@gmail.com"> sanjaysk1683@gmail.com</a></h6>
            <h6 className=''><i className="bi bi-headset"></i> 1800-103-7527 (10am - 10pm)</h6>
            <h6 className=''><i className="bi bi-gift"> Offers and T&C</i></h6>
            <p className='inner_line'></p>
            <h3 className=''>Our Corproate Office</h3>
            <p>
              5/12-36,VIVEKANANDA AVENUE 1 CROSS STREET, VALLUVAR COLONY 2 STREET, Madurai <br /> Pin code-625017
            </p>
            <p className='inner_line'></p>
            <img style={{ position: 'relative', display: 'inline-block' }} width='100%' height='200px' src={Image} alt="" />
            <h4 style={{ position: 'absolute', color: 'rgba(49, 44, 44, 1)', bottom: '250px', left: '100px', fontSize: '30px' }}>Careers</h4>
            <a style={{ textDecoration: 'none', position: 'absolute', color: 'black', bottom: '190px', left: '120px' }} href="mailto:sanjaysk1683@gmail.com"> careershopgrids@gmail.com</a>
          </div>
        </div>
        <div className="map_location mx-auto col-12 col-md-6 col-lg-6 py-5">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.719690047835!2d78.12433847499474!3d9.957263890145969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5e1de30175d%3A0x8e17cb750fac525c!2sValluvar%20Colony%2C%20Cs%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625014!5e0!3m2!1sen!2sin!4v1753756991738!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Valluvar Colony"
      ></iframe>
        </div>
      </div>

    </section>
  )
}

export default contact
