
import "./Container.css";
import Linkedin from "../Linkedin/Linkedin";

// function Container() {
    
//     return (
//         <div className="container">
//             <div className="title">
//                 <a href="https://www.linkedin.com/">
//                     <button><img alt="Linkedin" src="/linkedin.png" /></button>
//                     <div>(99+) LinkedIn</div>
//                 </a>

//                 <a href="https://www.linkedin.com/">
//                     <button><img alt="Linkedin" src="/linkedin.png" /></button>
//                     <div>(99+) LinkedIn</div>
//                 </a>
//             </div>
            
            
//         </div>
//     );
// };

function Container() {
    return (
        <div className="container">
            <Linkedin />
        </div>
    );
}
export default Container;