import { faTrashCan, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Address = () => {
  return (
    <>
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Địa chỉ mới
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Họ và tên
                  </label>
                  <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Số điện thoại
                  </label>
                  <input type="tel" className="form-control" id="inputTel" />
                </div>
                <div className="mb-3">
                  <label for="inputLevl1" className="form-label">
                    Phường
                  </label>
                  <input type="text" className="form-control" id="inputLevel1" />
                </div>
                <div className="mb-3">
                  <label for="inputLevel2" className="form-label">
                    Quận
                  </label>
                  <input type="text" className="form-control" id="inputLevel2" />
                </div>
                <div className="mb-3">
                  <label for="inputLevel3" className="form-label">
                    Tỉnh
                  </label>
                  <input type="Text" className="form-control" id="inputLevel3" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="checkAddress" />
                  <label className="form-check-label" for="checkAddress">
                    Tôi chắc chắn
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn round-black-btn ">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-9">
        <div className="w-100 bg-body rounded-4 p-4 shadow  d-flex justify-content-center  flex-column">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center border-bottom border-3 p-3">
              <span className="fs-2 fw-medium">Địa chỉ của tôi</span>
              <button
                className="address-add round-black-btn w-25 m-0"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Thêm địa chỉ mới
              </button>
            </div>
            <div className="col-12 d-flex justify-content-between align-items-center ">
              <span>
                <p>Trần Trọng Danh | 0913423421 </p>
                <p>142 Tô Ký</p>
                <p>Xã Thới Tam Thôn, huyện Hóc Môn, Tp. HCM</p>
              </span>
              <div className="option d-flex  flex-column">
                <button className="address-update " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FontAwesomeIcon icon={faWrench} className="me-3" />
                  Cập nhật
                </button>
                <button className="address-update " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FontAwesomeIcon icon={faTrashCan} className="me-3" />
                  Cập nhật
                </button>
                <button className="address-default">Thiết lập mặc định</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
