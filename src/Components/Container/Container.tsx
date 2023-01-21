
import "./Container.css";
import Website from "../Website/Website";
import Add from "../Add/Add";

function Container() {
    return (
        <div className="container">
            <Website websitename="linkedin" />
            <Add />
        </div>
    );
}
export default Container;