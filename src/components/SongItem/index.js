import classNames from "classnames/bind";
import styles from "./SongItem.module.scss";
import Image from '~/components/Image';

import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

function SongItem({data}) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src = {data.avatar}
                alt="avatar"
             />
            <div className = {cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.title}</span>
                </h4>
                <h5 className={cx('artist')}>
                    <span>{data.artist}</span>
                </h5>
            </div>
        </div>
        // <Link to = {`/@${data.title}`} className={cx('wrapper')}>
        //     <Image className={cx('avatar')}
        //         src = {data.avatar}
        //         alt="avatar"
        //      />
        //     <div className = {cx('info')}>
        //         <h4 className={cx('name')}>
        //             <span>{data.title}</span>
        //         </h4>
        //         <h5 className={cx('artist')}>
        //             <span>{data.artist}</span>
        //         </h5>
        //     </div>
        // </Link>
        
    );

}

export default SongItem;