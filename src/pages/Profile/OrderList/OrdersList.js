import React from 'react';

const OrdersList = () => {
  return (
    <>
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Review Products in Order
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {orderDetail && orderDetail.cartItems && (
                <>
                  {orderDetail.cartItems.map((item) => (
                    <div className="row my-3" key={item.product.id}>
                      <div className="col-4">
                        <img src={item.product.imageUrl} alt={item.product.name} className="img-fluid rounded" />
                      </div>
                      {review ? (
                        <div className="col-8">
                          <h4>{item.product.name}</h4>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`far fa-star ${i < review.rating ? 'text-warning' : ''}`}
                                style={{
                                  fontSize: '24px',
                                  cursor: 'pointer',
                                }}
                              ></i>
                            ))}
                          </div>
                          <div className="mt-3">
                            <textarea className="form-control" rows="5" value={review.comment} readOnly={true} />
                          </div>
                        </div>
                      ) : (
                        <div className="col-8">
                          <h4>{item.product.name}</h4>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`far fa-star ${i < ratings[item.product.id] ? 'text-warning' : ''}`}
                                style={{
                                  fontSize: '24px',
                                  cursor: 'pointer',
                                }}
                                onClick={() => handleRatingChange(i + 1, item.product.id)}
                              ></i>
                            ))}
                          </div>
                          <div className="mt-3">
                            <textarea
                              className="form-control"
                              rows="5"
                              placeholder="Write your review here..."
                              value={comments[item.product.id] || ''}
                              onChange={(e) => handleCommentChange(e, item.product.id)}
                            />
                          </div>
                        </div>
                      )}

                      <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit(item.product.id, orderDetail.orderId)}
                      >
                        Submit Review
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-9 ">
        <div className="table-responsive w-100 p-4 bg-body rounded-4  shadow ">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="alert alert-success">
                <td>
                  <a href={`/`} className="link">
                    1
                  </a>
                </td>
                <td>Paid</td>
                <td>Dec 12 2021</td>
                <td>$234</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // onClick={() => getOrderDetail(order.id)}
                  >
                    Review
                  </button>
                </td>
              </tr>
              {/* Cancelled */}
              <tr className=" alert alert-danger">
                <td>
                  <a href={`/`} className="link">
                    2
                  </a>
                </td>
                <td>Not Paid</td>
                <td>Dec 12 2021</td>
                <td>$34</td>
                <td>
                  {/* {order.paidAt !== null ? ( */}
                  <button
                    type="button"
                    className="btn btn-primary mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // onClick={() => getOrderDetail(order.id)}
                  >
                    Review
                  </button>
                  {/* ) : (
                  ''
                )} */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
