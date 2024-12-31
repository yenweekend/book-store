import React, { useCallback, useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({email: "", password:"", firstName:"", lastName:"", userName:"", });
  const handleChange = useCallback((e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  },[formData]);
  const handleRegister = useCallback((e) => {
    e.preventDefault();
    console.log(formData)
  },[formData]);
  return (
    <>
         <header id="header" className="site-header">

<div className="top-info border-bottom d-none d-md-block ">
    <div className="container-fluid">
        <div className="row g-0">
            <div className="col-md-4">
                <p className="fs-6 my-2 text-center">Need any help? Call us <a href="#">112233344455</a></p>
            </div>
            <div className="col-md-4 border-start border-end">
                <p className="fs-6 my-2 text-center">Summer sale discount off 60% off! <a
                        className="text-decoration-underline" href="index.html">Shop Now</a></p>
            </div>
            <div className="col-md-4">
                <p className="fs-6 my-2 text-center">2-3 business days delivery &amp; free returns</p>
            </div>
        </div>
    </div>
</div>



        </header>
       
        <section className="h-100 h-custom">
        <div className="container h-100 py-5" id="login-form">
            <section className="vh-70">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius:'25px'}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                                                        <input  type="text"  className="form-control"
                                                            placeholder="First Name" id="registerFirstName" name='firstName' onChange={handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                                                        <input  type="text"  className="form-control"
                                                            placeholder="Last Name" id="registerLastName" name='lastName' onChange={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                                                        <input  type="text"  className="form-control"
                                                            placeholder="Username" id="registerUsername" name='userName' onChange={handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                                                        <input  type="email"  className="form-control"
                                                            placeholder="Email" id="registerEmail" name='email' onChange={handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                                                        <input  type="password"  className="form-control"
                                                            placeholder="Password" id="registerPassword" name='password' onChange={handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                                                        <input  type="password"  className="form-control"
                                                            placeholder="Repeated Password"
                                                            id="registerRepeatedPassword"/>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value=""
                                                        id="form2Example3c"/>
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" data-mdb-button-init=""
                                                        data-mdb-ripple-init=""
                                                        className="btn btn-primary btn-lg" onClick={handleRegister}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div
                                            className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image"/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
        <section id="instagram" className="padding-large">
      <div className="container">
        <div className="text-center mb-4">
          <h3>Instagram</h3>
        </div>
        <div className="row">
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item1.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item2.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item3.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item4.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item5.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item6.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
        </section>

    <footer id="footer" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="footer-top-area">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                <img src={'/src/assets/images/main-logo.png'} alt="Main Logo" className="logo img-fluid mb-2" />
                  <p>
                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                    hendrerit. Gravida massa volutpat aenean odio erat nullam
                    fringilla.
                  </p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <svg className="facebook">
                            <use xlinkHref="#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="instagram">
                            <use xlinkHref="#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="twitter">
                            <use xlinkHref="#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="linkedin">
                            <use xlinkHref="#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="youtube">
                            <use xlinkHref="#youtube"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-capitalize">
                    <li className="menu-item mb-1">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Categories</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#"></a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Help &amp; Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item mb-1">
                      <a href="#">View Order History</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Returns Policies</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Shipping + Delivery</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-capitalize pb-2">Contact Us</h5>
                  <p>
                    Do you have any queries or suggestions?
                    <a href="mailto:" className="text-decoration-underline"
                      >yourinfo@gmail.com</a
                    >
                  </p>
                  <p>
                    If you need support? Just give us a call.
                    <a href="#" className="text-decoration-underline"
                      >+55 111 222 333 44</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <hr />
    <div id="footer-bottom" className="mb-2">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="ship-and-payment d-flex gap-md-5 flex-wrap">
            <div className="shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src="/src/assets/images/dhl.png" alt="visa" />
                <img src="/src/assets/images/shippingcard.png" alt="mastercard" />
              </div>
            </div>
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src="/src/assets/images/visa.jpg" alt="visa" />
                <img src="/src/assets/images/mastercard.jpg" alt="mastercard" />
                <img src="/src/assets/images/paypal.jpg" alt="paypal" />
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              © Copyright 2024 Bookly. HTML Template by
              <a href="https://templatesjungle.com/" target="_blank"
                >TemplatesJungle</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
