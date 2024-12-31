import React , {useEffect}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Carousel, Rate } from 'antd';
import { Link } from 'react-router-dom';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  return (
    <>

    <section id="best-selling-items" className="position-relative padding-large">
      <div className="container">
        <div
          className="section-title d-md-flex justify-content-between align-items-center mb-4"
        >
          <h3 className="d-flex align-items-center">Best selling items</h3>
          <a href="/" className="btn">View All</a>
        </div>
        <div
          className="swiper product-swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
        >
              <Swiper
      slidesPerView={5}
      direction={'horizontal'}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
      style={{
        maxWidth: "1200px",
        
      }}
    >

            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide swiper-slide-active"
           
            >
              <div className="card position-relative p-4 border rounded-3">
                <div className="position-absolute">
                  <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                    10% off
                  </p>
                </div>
                <img
                  src="/src/assets/images/product-item1.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">House of Sky Breath</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>
                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide swiper-slide-next"
              role="group"
              style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item2.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">Heartland Stars</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item3.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">Heavenly Bodies</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <div className="position-absolute">
                  <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                    10% off
                  </p>
                </div>
                <img
                  src="/src/assets/images/product-item4.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">His Saving Grace</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item5.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">My Dearest Darkest</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div
                    className="rating text-warning d-flex align-items-center d-flex align-items-center"
                  >
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
              aria-label="6 / 6"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item6.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">The Story of Success</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
            </SwiperSlide>
              </Swiper>
          <div
            className="position-absolute top-50  swiper-button-next"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-4410d1e4630347463"
            aria-disabled="false"
          >
            <svg
              className="chevron-forward-circle d-flex justify-content-center align-items-center p-2"
              width="80"
              height="80"
            >
              <use xlinkHref="#alt-arrow-right-outline"></use>
            </svg>
          </div>
          <div
            className="position-absolute top-50  swiper-button-prev"
            tabIndex="-1"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-4410d1e4630347463"
            aria-disabled="true"
          >
            <svg
              className="chevron-back-circle d-flex justify-content-center align-items-center p-2"
              width="80"
              height="80"
            >
              <use xlinkHref="#alt-arrow-left-outline"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="cart-outline">
                  <use xlinkHref="#cart-outline"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  Free delivery
                </h4>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="quality">
                  <use xlinkHref="#quality"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  Quality guarantee
                </h4>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="price-tag">
                  <use xlinkHref="#price-tag"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  Daily offers
                </h4>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="shield-plus">
                  <use xlinkHref="#shield-plus"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  100% secure payment
                </h4>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="limited-offer"
      className="padding-large"
      style={{
        backgroundImage: "url('/src/assets/images/banner-image-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "800px",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 text-center">
            <div className="image-holder">
              <img
                src="/src/assets/images/banner-image3.png"
                className="img-fluid"
                alt="banner"
              />
            </div>
          </div>
          <div
            className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start"
          >
            <h2>30% Discount on all items. Hurry Up !!!</h2>
            <div
              id="countdown-clock"
              className="text-dark d-flex align-items-center my-3"
            >
              <div className="time d-grid pe-3">
                <span className="days fs-1 fw-normal">27</span>
                <small>Days</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid pe-3 ps-3">
                <span className="hours fs-1 fw-normal">23</span>
                <small>Hrs</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid pe-3 ps-3">
                <span className="minutes fs-1 fw-normal">58</span>
                <small>Min</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid ps-3">
                <span className="seconds fs-1 fw-normal">14</span>
                <small>Sec</small>
              </div>
            </div>
            <a href="/" className="btn mt-3">Shop Collection</a>
          </div>
        </div>
      </div>
    </section>

    <section id="categories" className="padding-large">
      <div className="container">
        <div className="section-title overflow-hidden mb-4">
          <h3 className="d-flex align-items-center">Categories</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 border-0 rounded-3 position-relative">
              <a href="/">
                <img
                  src="/src/assets/images/category1.jpg"
                  className="img-fluid rounded-3"
                  alt="cart item"
                />
              </a>
              <h6
                className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"
              >
                <a href="/"></a
                ><a href="/" className="text-white">Romance</a>
              </h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-4 border-0 rounded-3">
              <a href="/">
                <img
                  src="/src/assets/images/category2.jpg"
                  className="img-fluid rounded-3"
                  alt="cart item"
                />
              </a>
              <h6
                className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"
              >
                <a href="/"></a
                ><a href="/" className="text-white">Lifestyle</a>
              </h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-4 border-0 rounded-3">
              <a href="/">
                <img
                  src="/src/assets/images/category3.jpg"
                  className="img-fluid rounded-3"
                  alt="cart item"
                />
              </a>
              <h6
                className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"
              >
                <a href="/"></a
                ><a href="/" className="text-white">Recipe</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="customers-reviews"
      className="position-relative padding-large"
      style={{
        backgroundImage: "url('/src/assets/images/banner-image-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "600px",
      }}
    >
      <div className="container offset-md-3 col-md-6 ">
      
        <div className="section-title mb-4 text-center">
          <h3 className="mb-4">Customers reviews</h3>
        </div>
        <Carousel arrows infinite={false}>
              <div
                className="card position-relative text-left p-5 border rounded-3"
              >
                <blockquote>
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <Rate allowHalf defaultValue={2.5} />
                <h5 className="mt-1 fw-normal">Roman</h5>
              </div>
              <div
                className="card position-relative text-left p-5 border rounded-3"
              >
                <blockquote>
                  "I ordered a few books online from this store, and I was
                  impressed by the quick delivery and careful packaging. It's
                  clear that they prioritize customer satisfaction, and I'll
                  definitely be shopping here again!"
                </blockquote>
                <Rate allowHalf defaultValue={2.5} />
                <h5 className="mt-1 fw-normal">Kevin Bryan</h5>
              </div>
        </Carousel>
      </div>
    </section>

    </>
  )
}

export default Home
