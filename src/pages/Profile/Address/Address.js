import { faTrashCan, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createAddresses, deleteAddresses, getAddresses, putAddresses } from '~/features/address/addressSlice';
import { getDistrict, getProvince, getWard } from '~/features/GHN/ghnSlice';

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses?.addresses)
  const provinces = useSelector((state) => state.ghn?.province)
  const districts = useSelector((state) => state.ghn?.district)
  const wards = useSelector((state) => state.ghn?.ward)

  const [selectedProvinceID, setSelectedProvinceID] = useState(null);
  const [selectedDistrictID, setSelectedDistrictID] = useState(null)
  const [selectedWardID, setSelectedWardID] = useState(null)
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const [selectedWard, setSelectedWard] = useState(null)
  const [addressDetail, setAddressDetail] = useState("")
  const x = 1;
  const s = x + 1;
  console.log('hello2', s)

  const [selecteAddress, setSelecteAddress] = useState(null)

  const handleProvinceChange = (event) => {
    setSelectedProvinceID(event.target.value);
    setSelectedDistrictID(null); // Xóa giá trị của selectedDistrict khi chọn tỉnh mới
    setSelectedWardID(null); // Xóa giá trị của selectedWard khi chọn tỉnh mới
    const selectedOption = event.target.options[event.target.selectedIndex];
    const customValue = selectedOption.dataset.customValue;
    setSelectedProvince(customValue);
    console.log(customValue)

  };
  const handleDistrictChange = (event) => {
    setSelectedDistrictID(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const customValue = selectedOption.dataset.customValue;
    setSelectedDistrict(customValue);
    console.log(customValue)

  };

  const handleWardChange = (event) => {
    setSelectedWardID(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const customValue = selectedOption.dataset.customValue;
    console.log(customValue)
    setSelectedWard(customValue);
  };


  useEffect(() => {
    if (selectedDistrictID !== null) {
      dispatch(getWard({ selectedDistrictID }));
    }
  }, [dispatch, selectedDistrictID]);

  useEffect(() => {
    if (selectedProvinceID !== null) {
      dispatch(getDistrict({ selectedProvinceID }));
    }
  }, [dispatch, selectedProvinceID])
  const handleAPI = () => {
    dispatch(getProvince());
  };

  const createAdress = async () => {
    const addressData = {
      province: selectedProvince, provinceId: selectedProvinceID, district: selectedDistrict, districtId: selectedDistrictID, ward: selectedWard, wardId: selectedWardID, detail: addressDetail
    };
    try {
      await dispatch(createAddresses(addressData));
      setSelectedDistrictID(null)
      setSelectedProvinceID(null)
      setSelectedWardID(null)
      setAddressDetail('')

    } catch (error) {
      toast.error('Đã có lỗi xảy ra khi đăng ký!');
    }
  };
  const deleteAddress = (id) => {
    dispatch(deleteAddresses(id))
  }

  const updateAddress = (id) => {
    const addressData = {
      id: selecteAddress, province: selectedProvince, provinceId: selectedProvinceID, district: selectedDistrict, districtId: selectedDistrictID, ward: selectedWard, wardId: selectedWardID, detail: addressDetail
    };
    console.log(addressData)
    dispatch(putAddresses(addressData))
  }
  useEffect(() => {
    dispatch(getAddresses())
  }, [dispatch]);
  return (
    <>

      <div className="modal fade createModal updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {selecteAddress ? 'cập nhật địa chỉ' : 'Địa chỉ mới'}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>

                <div className="mb-3">
                  <label for="inputLevel3" className="form-label">
                    Tỉnh/ Thành Phố
                  </label>
                  <select
                    className="form-control fs-3"
                    id="inputLevel3"
                    value={selectedProvinceID || ""}
                    onChange={handleProvinceChange}
                    required
                  >
                    <option value="" className='fs-4' selected disabled>Chọn Thành phố/ Tỉnh</option>
                    {provinces && provinces.map((province) => (
                      <option className='fs-4' key={province.ProvinceID} data-custom-value={province.ProvinceName}
                        value={province.ProvinceID}>
                        {province.ProvinceName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="inputLevel2" className="form-label">
                    Quận/ Huyện
                  </label>
                  <select
                    className="form-control fs-3"
                    id="inputLevel2"
                    value={selectedDistrictID}
                    onChange={handleDistrictChange}
                    required

                  >
                    <option >Chọn quận</option>
                    {selectedProvinceID && districts.map((district) => (
                      <option className='fs-4 ' key={district.DistrictID} data-custom-value={district.DistrictName} value={district.DistrictID}>
                        {district.DistrictName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="inputLevel2" className="form-label">
                    Xã/ Phường/ Thị trấn
                  </label>
                  <select
                    className="form-control fs-3"
                    id="inputLevel2"
                    value={selectedWardID}
                    onChange={handleWardChange}
                    required
                  >
                    <option >Chọn Xã/ Phường/ Thị trấn</option>
                    {selectedDistrictID && wards.map((ward) => (
                      <option className='fs-4 ' key={ward.WardCode} data-custom-value={ward.WardName} value={ward.WardCode}>
                        {ward.WardName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3 d-flex justify-content-center  flex-column">
                  <label for="inputLevel2" className="form-label">
                    Ghi chú
                  </label>
                  <textarea name="note" id="note" className='p-2' cols="5" rows="5" value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} placeholder='Địa chị cụ thể' />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="checkAddress" required />
                  <label className="form-check-label" for="checkAddress">
                    Tôi chắc chắn
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn round-black-btn " onClick={selecteAddress ? updateAddress : createAdress}>
                {selecteAddress ? 'Cập nhật' : 'Thêm mới'}
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
                data-bs-target=".createModal"
                onClick={(e) => { handleAPI(); setSelecteAddress(null) }}
              >
                Thêm địa chỉ mới
              </button>
            </div>
            {addresses && addresses.map((address) => {
              return (
                <div className="col-12 d-flex justify-content-between align-items-center ">
                  <span>
                    {/* <p>Trần Trọng Danh | 0913423421 </p> */}
                    <p>{address.ward}</p>
                    <p>{address.district}, {address.province}</p>
                  </span>
                  <div className="d-flex  flex-column p-3">
                    <button className="address-update " type="button" data-bs-toggle="modal" data-bs-target=".updateModal"
                      value={address.id}
                      onClick={(e) => { handleAPI(); setSelecteAddress(e.target.value) }}
                    >
                      <FontAwesomeIcon icon={faWrench} className="me-3" />
                      Cập nhật
                    </button>
                    <button className="address-update" type="button" onClick={() => deleteAddress(address.id)} >
                      <FontAwesomeIcon icon={faTrashCan} className="me-3" />
                      Xoá
                    </button>
                    <button className="address-default">Thiết lập mặc định</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
