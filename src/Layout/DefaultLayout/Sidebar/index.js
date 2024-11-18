import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('sidebar')}>
                <nav className={cx('navbar-main')}>
                    <li>
                        <a title="Thư viện">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 2.75C6.08579 2.75 5.75 3.08579 5.75 3.5C5.75 3.91421 6.08579 4.25 6.5 4.25H17.5C17.9142 4.25 18.25 3.91421 18.25 3.5C18.25 3.08579 17.9142 2.75 17.5 2.75H6.5ZM3 9.5C3 7.42893 4.67893 5.75 6.75 5.75H17.25C19.3211 5.75 21 7.42893 21 9.5V17.5C21 19.5711 19.3211 21.25 17.25 21.25H6.75C4.67893 21.25 3 19.5711 3 17.5V9.5ZM6.75 7.25C5.50736 7.25 4.5 8.25736 4.5 9.5V17.5C4.5 18.7426 5.50736 19.75 6.75 19.75H17.25C18.4926 19.75 19.5 18.7426 19.5 17.5V9.5C19.5 8.25736 18.4926 7.25 17.25 7.25H6.75ZM13.666 8.87596C13.4359 8.72253 13.14 8.70823 12.8961 8.83874C12.6522 8.96926 12.5 9.2234 12.5 9.5V13.0499C12.125 12.8581 11.7001 12.75 11.25 12.75C9.73122 12.75 8.5 13.9812 8.5 15.5C8.5 17.0188 9.73122 18.25 11.25 18.25C12.6911 18.25 13.8733 17.1415 13.9905 15.7307C13.9967 15.6916 14 15.6515 14 15.6107V15.5V10.9014L15.084 11.624C15.4286 11.8538 15.8943 11.7607 16.124 11.416C16.3538 11.0714 16.2607 10.6057 15.916 10.376L13.666 8.87596ZM12.5 15.5C12.5 14.8096 11.9404 14.25 11.25 14.25C10.5596 14.25 10 14.8096 10 15.5C10 16.1904 10.5596 16.75 11.25 16.75C11.9404 16.75 12.5 16.1904 12.5 15.5Z" fill-opacity="0.8">
                                </path>
                            </svg>
                            <span>Thư viện</span>
                        </a>
                    </li>
                    <li>
                        <a title="Khám phá">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75Z" fill-opacity="0.8">
                                </path>
                            </svg>
                            <span>Khám phá</span>
                        </a>
                    </li>
                    <li>
                        <a title="Bảng xếp hạng">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 2.75C6.08579 2.75 5.75 3.08579 5.75 3.5C5.75 3.91421 6.08579 4.25 6.5 4.25H17.5C17.9142 4.25 18.25 3.91421 18.25 3.5C18.25 3.08579 17.9142 2.75 17.5 2.75H6.5ZM3 9.5C3 7.42893 4.67893 5.75 6.75 5.75H17.25C19.3211 5.75 21 7.42893 21 9.5V17.5C21 19.5711 19.3211 21.25 17.25 21.25H6.75C4.67893 21.25 3 19.5711 3 17.5V9.5ZM6.75 7.25C5.50736 7.25 4.5 8.25736 4.5 9.5V17.5C4.5 18.7426 5.50736 19.75 6.75 19.75H17.25C18.4926 19.75 19.5 18.7426 19.5 17.5V9.5C19.5 8.25736 18.4926 7.25 17.25 7.25H6.75ZM13.666 8.87596C13.4359 8.72253 13.14 8.70823 12.8961 8.83874C12.6522 8.96926 12.5 9.2234 12.5 9.5V13.0499C12.125 12.8581 11.7001 12.75 11.25 12.75C9.73122 12.75 8.5 13.9812 8.5 15.5C8.5 17.0188 9.73122 18.25 11.25 18.25C12.6911 18.25 13.8733 17.1415 13.9905 15.7307C13.9967 15.6916 14 15.6515 14 15.6107V15.5V10.9014L15.084 11.624C15.4286 11.8538 15.8943 11.7607 16.124 11.416C16.3538 11.0714 16.2607 10.6057 15.916 10.376L13.666 8.87596ZM12.5 15.5C12.5 14.8096 11.9404 14.25 11.25 14.25C10.5596 14.25 10 14.8096 10 15.5C10 16.1904 10.5596 16.75 11.25 16.75C11.9404 16.75 12.5 16.1904 12.5 15.5Z" fill-opacity="0.8">
                                </path>
                            </svg>
                            <span>Bảng xếp hạng</span>
                        </a>
                    </li>
                </nav>
                <span></span>
                <li>Profile</li>
                <li>Following</li>
                <li>Upload</li>

            </ul>
        </div>
    );
}
export default SideBar;