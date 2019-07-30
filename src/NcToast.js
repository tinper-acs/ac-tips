import Toast from './Toast';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

let NcToast = {
    toastList:[],
    hide:()=>{

    },
    destory:(id)=>{
        let toast = document.getElementById(id);
        toast.style.right=0;
        ReactDOM.unmountComponentAtNode(toast);
        document.body.removeChild(toast);
        NcToast.toastList.splice(NcToast.toastList.indexOf(id),1);
    },
    create:(options)=>{
        let type = options.type||'success'
        let id = uuid();
        NcToast.toastList.push(id);
        let toast = document.createElement('div');
        toast.className='nc-toast-out '+type;
        toast.id=id;
        toast.style.top=NcToast.toastList.length*50+'px'
        document.body.appendChild(toast);
        ReactDOM.render(<Toast {...options} destory={NcToast.destory} id={id} />,toast);
        setTimeout(()=>{
            toast.style.right=0;
        },0)
    },
    destoryAll:()=>{
        NcToast.toastList.forEach(id=>{
            let toast = document.getElementById(id);
            toast.style.right=0;
            ReactDOM.unmountComponentAtNode(toast);
            document.body.removeChild(toast);
        });
        NcToast.toastList=[];
    }
}


export default NcToast;