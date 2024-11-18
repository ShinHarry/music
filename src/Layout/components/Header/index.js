import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from "~/components/Button";
import {UploadIcon} from '~/components/Icons';
import styles from './Header.module.scss';
import images from "~/assets/images";
import Search from "~/Layout/Search";
const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;
    return (
        
        <header className={cx('wrapper')}>
            <div className = {cx('inner')}>
                <img src = {images.logo} alt="logoMusic" />

                <Search />

                <div className = {cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0,20]} content = "Upload music..." placement="bottom">
                                <button className = {cx('action-btn')}>
                                    <UploadIcon className={cx('uploadIcon')}/>
                                </button>
                            </Tippy>
                        </>
                    ): (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>

                        </>
                    )}
                </div>
            </div>
            <div>
            </div>
        </header>
        
    );
}

export default Header;