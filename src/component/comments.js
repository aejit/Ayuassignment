import React, { useState } from 'react';
import data from '../data/data.json';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { Card, CardContent } from '@material-ui/core';
import { useHistory } from "react-router-dom";


function Comments() {
    const history = useHistory();
    let [commentData, setCommentData] = useState(
        data.map((data) => data.user.images[0].comments)
    );
    const [mycomment, setMycomment] = useState('')



    function addComment() {
        mycomment ?
        commentData.map(
            (data) => data.unshift(
                {
                    By: "user1",
                    comment: mycomment
                })) : alert("oops! you forget to comment");
        let dummyarray = [];
        commentData.map((data) =>
            dummyarray.push(data));
        setCommentData(dummyarray);
    };


    const newdata = commentData.map((data) => {
        return (
            <>
                <div style={{ backgroundColor: "lightgray", height: '25px' }}>
                    <span style={{ float: "left" }} onClick={() => { history.push("/scrollpage"); }} ><ArrowBackIosSharpIcon /></span>
                    <span style={{ textAlign: "center" }}>Comments</span>
                </div>

                <div>
                    {
                        data.map((data) =>
                            <>

                                <Card style={{ width: "100%" }}>

                                    <CardContent>
                                        <div >
                                            {
                                                <>
                                                    <span style={{ float: "left", marginLeft: "1%", fontWeight: "bold" }}>{data.By}</span>
                                                    <span style={{ float: "left", marginLeft: "3%" }}>{data.comment} </span> <br />
                                                    <hr style={{ marginLeft: "1%", marginRight: "1%", marginTop: "1%" }}></hr>
                                                </>
                                            }

                                        </div>
                                    </CardContent>
                                </Card>


                            </>
                        )

                    }
                </div>
                <Card>
                    <input type="text" name="comment" placeholder="Add a comment as user1" style={{ marginLeft: "5%", float: "left", width: "80%" }} autoFocus onChange={event => setMycomment(event.target.value)}></input>
                    <input type="button" style={{ color: "lightblue", marginRight: "1%", width: "10%", border: "none" }} onClick={addComment}
                        value="post">
                    </input>
                </Card>
            </>
        )
    })

    return (
        commentData &&
        newdata
    );

}

export default Comments;
