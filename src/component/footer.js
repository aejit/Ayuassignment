import React from 'react';
import { useHistory } from "react-router-dom";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Footer() {
    const history = useHistory();
    
        return (
                <div style={{ backgroundColor: "lightgray", height: '25px' , position: "fixed", left: 0, bottom: 0, width: "100%"  }}>
                    <span style={{ float: "left", marginLeft: "3%", cursor: "pointer" }} onClick={() => { history.push("/scrollpage"); }} ><HomeRoundedIcon /></span>
                    <span style={{ float: "left", marginLeft: "15%" }}><SearchIcon /> </span>
                    <span style={{ float: "left", marginLeft: "16%" }}><AddBoxIcon /> </span>
                    <span style={{ float: "left", marginLeft: "15%" }}><FavoriteBorderIcon /> </span>
                    <span style={{ float: "right", marginRight: "3%" }}><AccountCircleIcon /> </span>
                </div>
        )
}

export default Footer;
