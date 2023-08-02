import React, { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import useDebounce from '~/Hooks/useDebounce';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '~/features/products/productsSlice';
import { Link, useNavigate } from 'react-router-dom';

// const cx = classNames.bind(styles);

const Search = () => {
  const [searchResult, setSearchResult] = useState([1]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 500);
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  useEffect(() => {
    if (!debounced.trim()) {
      // setSearchResult([]);
      return;
    }
    dispatch(getProducts({ searchValue }))
  }, [dispatch, debounced, searchValue]);
  const products = useSelector((state) => state.products?.products?.products);
  const navigate = useNavigate()
  return (
    <HeadlessTippy
      appendTo={() => document.body}
      interactive={true}
      // visible={products === true  : true ? false }
      // visible={true}
      render={(attrs) => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h2 className="search-title">Kết quả</h2>
            {products && products.slice(0, 3).map((product) => {
              return (
                <Link className="row p-3">
                  <div className="col col-12 d-flex">
                    <img src={product.imageUrl} alt={product.name} className="col col-2 mx-5" />
                    <div className='col col-10'>
                      <h3 className=''>{product.name}</h3>
                      <h3 >{product.basePrice}</h3>
                    </div>
                  </div>
                </Link>
              )
            })}
            {products && products.length > 3 && (
              // Hiển thị liên kết "Xem thêm" chỉ khi có hơn 3 sản phẩm
              <Link to={`/Products?search=${searchValue}`} className="d-flex justify-content-center align-items-center">
                Xem thêm
              </Link>
            )}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className="search w-100">
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="search accounts and videos"
          spellCheck="false"
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button
            className="clear"
            onClick={() => {
              setSearchValue('');
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className="loading" icon={faSpinner} />}
        <button className="search-btn" onMouseDown={(e) => navigate(`/Products?search=${searchValue}`)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
