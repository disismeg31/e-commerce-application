/* eslint-disable react/prop-types */

import './Btn.css'
function Btn({label,onClick}) {
    
    return(
        
            
                <button onClick={onClick} className="btn">{label.toUpperCase()}</button>
           
    )
}

export default Btn;
