import '../styles/Popup.css';
import { MdCancel } from "react-icons/md";
function Popup(props) {
    return (props.trigger) ? (
        <div className="register-popup">
            <div className="register-popup-inner">
                
                <div className="popup-header">
                <h4 style={{marginLeft:'40px'}}></h4>
                <h4 id='cancel' onClick={() => props.setTrigger(false)}><MdCancel /></h4>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;