import React from "react";
import { Rate, Carousel } from "antd";
const CustomerReview = () => {
  return (
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
          <div className="card position-relative text-left p-5 border rounded-3">
            <blockquote>
              “I stumbled upon this tech store while searching for a new laptop,
              and I couldn't be happier with my experience! The staff was
              incredibly knowledgeable and guided me through the process of
              choosing the perfect device for my needs. Highly recommended!”
            </blockquote>
            <Rate allowHalf defaultValue={2.5} />
            <h5 className="mt-1 fw-normal">Roman</h5>
          </div>
          <div className="card position-relative text-left p-5 border rounded-3">
            <blockquote>
              "I ordered a few books online from this store, and I was impressed
              by the quick delivery and careful packaging. It's clear that they
              prioritize customer satisfaction, and I'll definitely be shopping
              here again!"
            </blockquote>
            <Rate allowHalf defaultValue={2.5} />
            <h5 className="mt-1 fw-normal">Kevin Bryan</h5>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerReview;
