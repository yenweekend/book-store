import React from 'react'

const OrderHistory = () => {
  return (
    <div className="order-history-section container mt-5">
    <h3 className="mb-4">Order History</h3>

    <div className="order-card card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Order #12345</h5>
          <span className="text-muted">Date: 2024-12-19</span>
        </div>

        <ul className="list-unstyled mt-3">
          <li className="d-flex justify-content-between">
            <span>House of Sky Breath</span>
            <span>$25.99</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Heartland Stars</span>
            <span>$19.99</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Heavenly Bodies</span>
            <span>$22.50</span>
          </li>
        </ul>

        <div className="d-flex justify-content-between mt-3">
          <strong>Total: $68.48</strong>
          <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
        </div>
      </div>
    </div>

    <div className="order-card card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Order #12346</h5>
          <span className="text-muted">Date: 2024-12-18</span>
        </div>

        <ul className="list-unstyled mt-3">
          <li className="d-flex justify-content-between">
            <span>The Story of Success</span>
            <span>$15.99</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>His Saving Grace</span>
            <span>$18.75</span>
          </li>
        </ul>

        <div className="d-flex justify-content-between mt-3">
          <strong>Total: $34.74</strong>
          <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
        </div>
      </div>
    </div>

    <div className="order-card card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Order #12347</h5>
          <span className="text-muted">Date: 2024-12-17</span>
        </div>

        <ul className="list-unstyled mt-3">
          <li className="d-flex justify-content-between">
            <span>My Dearest Darkest</span>
            <span>$20.99</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Heartland Stars</span>
            <span>$19.99</span>
          </li>
        </ul>

        <div className="d-flex justify-content-between mt-3">
          <strong>Total: $40.98</strong>
          <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
        </div>
      </div>
    </div>
  </div>

  );
}

export default OrderHistory
