import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
    // We want elRef to survive through re-renders so we only create the new div one time until you dispose of the modal.
    // So if elRef.current hasn't been initialsed, create the div. else, dont create another div.
    const elRef = useRef(null);
    if(!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        // append elRef to the dom
        modalRoot.appendChild(elRef.current);

        // clean up
        return () => modalRoot.removeChild(elRef.current);

        // we only want it to happen once so give an empty array at the end
    }, []);

    return createPortal(<div>{ children }</div>, elRef.current);
}

export default Modal;