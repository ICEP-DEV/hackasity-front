import '../../styles/WeavePopup.css';

function Loader(props) {

    return (props.trigger) ? (
        <div className="register-popup">
            <div className="register-popup-inner">
                    <div class="center">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                {/* {props.children} */}
            </div>
        </div>
    ) : "";
}

export default Loader;