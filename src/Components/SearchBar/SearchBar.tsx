import { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'


import "./SearchBar.css";

// const SearchBar = () => {
//     const [inputText, setInputText] = useState<String>("");
//     let inputHandler = (e: any) => {
//         let lowerCase = e.target.value.toLowerCase();
//         setInputText(lowerCase);
//     };

//     return (
//         <div className="searchbar">
//             <TextField
//                 id="outlined-basic"
//                 onChange={inputHandler}
//                 variant="outlined"
//                 placeholder="Search Google or type a URL"
//                 label="Search"
//             />
//         </div>
//     );
// };



const SearchBar = () => {
    const [inputText, setInputText] = useState<String>("");
    
    let handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log("Event triggers");
            const keyword : string = "https://www.google.com/search?q=" + event.target.value.toLowerCase();
            window.location.href = keyword;
        }
    };
    

    return (
        <div className="searchbar">
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                onKeyDown={(e) => handleKeyDown(e)}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google or type a URL"
                inputProps={{ 'aria-label': 'google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="voice-search">
                <KeyboardVoiceIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            
            </Paper>
        </div>
    );
}

export default SearchBar;