import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
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

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResults([]);
            return;
        }
        setLoading(true);

        fetch(`http://localhost:3001/api/songs/search?q=${encodeURIComponent(searchValue)}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setSearchResults(res.songs || []); // Đảm bảo res.songs là một mảng
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handlClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };

    const handlHideResults = () => {
        setShowSearchResults(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showSearchResults && searchResults.length > 0} // Đảm bảo searchResults được định nghĩa
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Songs</h4>
                        {searchResults.map((result) => {
                            <h5>result.title</h5>

                            // Đảm bảo trả về component SongItem cho mỗi kết quả
                            {/* <SongItem key={result.id} data={result} />; */}
                        })}
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
