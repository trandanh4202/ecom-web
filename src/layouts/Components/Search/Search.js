import React, { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import useDebounce from '~/Hooks/useDebounce';
import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

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
  //   useEffect(() => {
  //     if (!debounced.trim()) {
  //       setSearchResult([]);
  //       return;
  //     }

  //     const fetchApi = async () => {
  //       setLoading(true);

  //       const result = await searchService.search(debounced);

  //       setSearchResult(result);
  //       setLoading(false);
  //     };
  //     fetchApi();
  //   }, [debounced]);

  return (
    <HeadlessTippy
      appendTo={() => document.body}
      interactive={true}
      visible={showResult && searchResult.length > 0}
      // visible={true}
      render={(attrs) => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h3 className="search-title">accounts</h3>

            {/* {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))} */}
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
        <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
