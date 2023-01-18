import { useState } from "react";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
    const [inputText, setInputText] = useState<String>("");
    let inputHandler = (e: any) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="searchbar">
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                label="Search"
            />
        </div>
    );
};

export default SearchBar;