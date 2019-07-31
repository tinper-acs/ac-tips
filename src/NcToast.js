import Toast from './Toast';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

let NcToast = {
    toastList:[],
    top:50,
    hide:()=>{

    },
    destory:(id)=>{
        let index = NcToast.toastList.indexOf(id);
        let toast = document.getElementById(id);
        toast.style.right=0;
        ReactDOM.unmountComponentAtNode(toast);
        document.body.removeChild(toast);
        NcToast.toastList.splice(index,1);
        for(let i = index;i<NcToast.toastList.length;i++){
            let item = document.getElementById(NcToast.toastList[i]);
            item.style.top = i*50+NcToast.top+'px';
        }
    },
    create:(options)=>{
        let { type ='success', top=50 } = options;
        NcToast.top = top;
        let id = uuid();
        NcToast.toastList.push(id);
        let toast = document.createElement('div');
        toast.className='nc-toast-out '+type;
        toast.id=id;
        toast.style.top=NcToast.toastList.length*50+top+'px'
        document.body.appendChild(toast);
        ReactDOM.render(<Toast {...options} destory={NcToast.destory} id={id} />,toast);
        setTimeout(()=>{
            toast.style.right='5px';
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