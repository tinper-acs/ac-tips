import React from 'react'
import Icon from 'bee-icon'
import Notification from 'rc-notification'
import classnames from 'classnames'

let notification = null;
let AcTips = {
    create:(options)=>{
        let { type='success', content, style, duration, ...others } = options;
        duration = type === 'error' ? 5 : 2;
        let toast = document.createElement('div');
        if (notification == null) {
            Notification.newInstance({
                getContainer: () => toast,
                prefixCls: 'uretail-notification',
                style,
            }, (hooksRef) => { notification = hooksRef })
        }
        document.body.appendChild(toast);
        const key = options.key || Date.now()
        let iconType = ''
        let NoticeIcon
        switch (type) {
        case 'success':
            iconType = 'uf-correct-2';
            break;
        case 'info':
            iconType = 'uf-i-c';
            break;
        case 'error':
            iconType = 'uf-close-c';
            break;
        case 'warning':
            iconType = 'uf-exc-c-2';
            break;
        default:
            iconType = 'uf-i-c';
        }
        NoticeIcon = <Icon type={iconType} />
        notification.notice({
            type,
            content:(
                <div className={classnames('uretail-message-custom-content uretail-message-' + type + ' ')}>
                    <div className='anticon'>{NoticeIcon}</div>
                    <div className='anticon-circle'>{content}</div>
                </div>
            ),
            key,
            duration,
            ...others
        })
    },
    destory:()=>{
        if (notification) {
            notification.destroy();
            notification = null;
        }
    },
    destoryAll() {
        if (notification) {
            notification.destroy();
            notification = null;
        }
    }
}


export default AcTips;