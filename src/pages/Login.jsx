import React, { useCallback, useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({email: "", password:""});
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
            <section className="vh-80">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">

                            <div className="px-5 ms-xl-4">
                                <img src="/src/assets/images/main-logo.png" className="logo"/>
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                <form style={{width:'32rem'}}>

                                    <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

                                    <div data-mdb-input-init="" className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example18">Email address</label>
                                        <input type="email" id="form2Example18" className="form-control form-control-lg" name='email' onChange={handleChange}/>
                                    </div>

                                    <div data-mdb-input-init="" className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example28">Password</label>
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" name='password' onChange={handleChange}/>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button data-mdb-button-init="" data-mdb-ripple-init=""
                                            className="btn btn-info btn-lg btn-block" type="button" onClick={handleRegister}>Login</button>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a>
                                    </p>
                                    <p>Don't have an account? <a href="/login" className="link-info">Register here</a></p>

                                </form>

                            </div>

                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                alt="Login image" className="w-100 vh-100"
                                style={{objectFit:'cover', objectPosition: 'left'}}
                                />
                                
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

export default Login
