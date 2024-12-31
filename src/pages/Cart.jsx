import React from 'react'

const Cart = () => {
  return (
    <section className="h-100 h-custom">
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="h5">My Cart</th>
                  <th scope="col">Format</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="/src/assets/images/product-item2.png"
                        className="img-fluid rounded-3"
                        style={{
                            width:'120px'
                        }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Thinking, Fast and Slow</p>
                        <p className="mb-0">Daniel Kahneman</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0"  style={{
                        fontWeight: 500,
                    }}>Digital</p>
                  </td>
                  <td className="align-middle">
                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      value="2"
                      type="number"
                      className="form-control form-control-sm"
                      style={{
                        width: '70px',
                    }}
                    />
                  </td>
                  <td className="align-middle">
                    <p className="mb-0"  style={{
                        fontWeight: 500,
                    }}>$9.99</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-bottom-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="/src/assets/images/product-item2.png"
                        className="img-fluid rounded-3"
                        style={{
                            width: '120px',
                        }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                          Homo Deus: A Brief History of Tomorrow
                        </p>
                        <p className="mb-0">Yuval Noah Harari</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle border-bottom-0">
                    <p className="mb-0"  style={{
                        fontWeight: 500,
                    }}>Paperback</p>
                  </td>
                  <td className="align-middle border-bottom-0">
                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      value="2"
                      type="number"
                      className="form-control form-control-sm"
                      style={{
                        width: '70px',
                    }}
                    />
                  </td>
                  <td className="align-middle border-bottom-0">
                    <p className="mb-0"  style={{
                        fontWeight: 500,
                    }}>$13.50</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="card shadow-2-strong mb-5 mb-lg-0"
            style={{borderRadius: '16px'}}
          >
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1v"
                          value=""
                          aria-label="..."
                          checked=""
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <i
                            className="fab fa-cc-mastercard fa-2x text-body pe-2"
                          ></i
                          >Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel2v"
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <i
                            className="fab fa-cc-visa fa-2x fa-lg text-body pe-2"
                          ></i
                          >Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="d-flex align-items-center pe-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel3v"
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <i
                            className="fab fa-cc-paypal fa-2x fa-lg text-body pe-2"
                          ></i
                          >PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-6">
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <div
                        data-mdb-input-init=""
                        className="form-outline mb-4 mb-xl-5"
                      >
                        <input
                          type="text"
                          id="typeName"
                          className="form-control form-control-lg"
                          siez="17"
                          placeholder="John Smith"
                        />
                        <label className="form-label" htmlFor="typeName"
                          >Name on card</label
                        >
                      </div>

                      <div
                        data-mdb-input-init=""
                        className="form-outline mb-4 mb-xl-5"
                      >
                        <input
                          type="text"
                          id="typeExp"
                          className="form-control form-control-lg"
                          placeholder="MM/YY"
                          size="7"
                          minLength="7"
                          maxLength="7"
                        />
                        <label className="form-label" htmlFor="typeExp"
                          >Expiration</label
                        >
                      </div>
                    </div>
                    <div className="col-12 col-xl-6">
                      <div
                        data-mdb-input-init=""
                        className="form-outline mb-4 mb-xl-5"
                      >
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg"
                          siez="17"
                          placeholder="1111 2222 3333 4444"
                          minLength="19"
                          maxLength="19"
                        />
                        <label className="form-label" htmlFor="typeText"
                          >Card Number</label
                        >
                      </div>

                      <div
                        data-mdb-input-init=""
                        className="form-outline mb-4 mb-xl-5"
                      >
                        <input
                          type="password"
                          id="typeText"
                          className="form-control form-control-lg"
                          placeholder="●●●"
                          size="1"
                          minLength="3"
                          maxLength="3"
                        />
                        <label className="form-label" htmlFor="typeText">Cvv</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div
                    className="d-flex justify-content-between"
                     style={{
                        fontWeight: 500,
                    }}
                  >
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">$23.49</p>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{
                        fontWeight: 500,
                    }}                  >
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$2.99</p>
                  </div>

                  <hr className="my-4" />

                  <div
                    className="d-flex justify-content-between mb-4"
                    style={{
                        fontWeight: 500,
                    }}
                  >
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">$26.48</p>
                  </div>

                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-block btn-lg"
                  >
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>

                      <span>$26.48</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Cart
