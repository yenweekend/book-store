import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const BrowseBook = () => {
  return (
    <section id="best-selling-items" className="position-relative padding-large">
    <div className="container">
      <div
        className="section-title d-md-flex justify-content-between align-items-center mb-4"
      >
        <h3 className="d-flex align-items-center">Category Name</h3>
        {/* <a href="/" className="btn">View All</a> */}
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
  )
}

export default BrowseBook
