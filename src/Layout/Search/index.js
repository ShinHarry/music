import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDebounce } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/Popper';
import SongItem from '~/components/SongItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]); // Mặc định là mảng rỗng
    const [showSearchResults, setShowSearchResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    const handlClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResults(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handlHideResults = () => {
        setShowSearchResults(true);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showSearchResults && searchResults.length > 0} // Đảm bảo searchResults được định nghĩa
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Songs</h4>
                        {searchResults.map((result) => (
                            <SongItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutSide={handlHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search songs and albums"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowSearchResults(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handlClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
