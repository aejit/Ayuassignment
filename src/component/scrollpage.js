import React, { useState } from 'react';
import data from '../data/data.json';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import { Card, CardContent } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';

function Scrollpage() {
    const history = useHistory();
    let [like, setLike] = useState(0);

    const increaseLike = () => {
        like = like + 1;
        setLike(like);
    };

    const newdata = data.map((data) => {

        return (
            <>
                <div style={{ backgroundColor: "lightgray", height: '25px' }}>
                    <img alt = "Avtar" style={{ marginLeft: "0.5%", float: "left", cursor: "pointer", width:"5%", borderRadius: "60%", marginTop: "1.3%" }} src={require(`../images/image1.jpg`)} onClick={() => { history.push("/"); }}></img>
                    <span>{data.user.type}</span>
                    <span style={{ float: "right" }}><MoreVertRoundedIcon /></span>
                </div>

                <div>
                    {
                        <>

                                 <Card style={{ width: "100%" }}>

                                     <CardContent>
                                         <div >
                                             {
                                                <>
                                                    <img alt = "Avatar" style= {{ width : "100%"}}src={require('../images/image6.jpg')}></img>
                                                </>
                                            }

                                        </div>
                                    </CardContent>
                                </Card>

                                <div >
                                    <p >
                                        <FavoriteBorderRoundedIcon style={{ float: "left", marginLeft: "1%" }} onClick={() => {
                                            increaseLike();
                                        }} />
                                        <ChatBubbleOutlineRoundedIcon style={{ float: "left", marginLeft: "3%" }} onClick={() => {
                                            history.push("/comments");} } />
                                        <SendRoundedIcon style={{ float: "left", marginLeft: "5%" }} />
                                        <BookmarkBorderRoundedIcon style={{ float: "right", marginRight: "1%" }} />
                                    </p>
                                </div>

                                <div style={{ marginTop: "12%" }}>
                                    <span style={{ float: "left", marginLeft: "1%" }}>Likes {like ? data.user.images[0].numberOflikes + 1 : data.user.images[0].numberOflikes}</span>
                                    <br />
                                    <span style={{ float: "left", marginLeft: "1%", fontWeight: "bold" }}>{data.user.images[0].comments[0].By}</span>
                                    <span style={{ float: "left", marginLeft: "3%" }}>{data.user.images[0].comments[0].comment} </span>
                                </div>

                            </>

                    }
                </div>
            </>
        )
    })

    return (
        newdata
    );

}

export default Scrollpage;
