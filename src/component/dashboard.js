// import React, {useEffect, useState} from "react";
import React from 'react';
import data from '../data/data.json';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Card, CardContent } from '@material-ui/core';
import TocSharpIcon from '@material-ui/icons/TocSharp';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import { useHistory } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';

function Dashboard() {
    const history = useHistory();
    const newdata = data.map((data) => {
        return (
            <>
                <div style={{ backgroundColor: "lightgray", height: '25px' }}>
                    <span style={{ float: "left" }} onClick={() => { history.push("/scrollpage"); }} ><ArrowBackIosSharpIcon /></span>
                    <span>{data.user.type}</span>
                    <span style={{ float: "right" }}><MoreHorizRoundedIcon /></span>
                </div>

                <div >
                    <p style={{ float: "left", width: "100%", marginTop: "2.5%" }}>
                        <img  alt = "Avtar"style={{ marginLeft: "2%", float: "left", width: "28%", borderRadius: "80%" }}  src={require(`../images/image1.jpg`)}></img>
                        <span style={{ marginLeft: "8%", marginRight: "5%" }}>{data.user.posts}</span>
                        <span style={{ marginLeft: "8%", marginRight: "5%" }}>{data.user.followers}</span>
                        <span style={{ marginLeft: "8%", marginRight: "0%" }}>{data.user.following}</span>
                        <br />
                        <span style={{ marginLeft: "10%", marginRight: "0%", fontSize: "small" }}>Posts</span>
                        <span style={{ marginLeft: "6%", marginRight: "0%", fontSize: "small" }}>Followers</span>
                        <span style={{ marginLeft: "5%", marginRight: "0%", fontSize: "small" }}>Followings</span>
                        
                    <span>
                        <button style={{ color: "white", backgroundColor: "blue", marginLeft: "10%",marginTop: "2%", width: "35%", height: "30px" }}>Follow</button>
                        <button style={{ color: "white", marginLeft: "2%", backgroundColor: "blue", width: "8%", height: "30px" }}> 🢗 </button>
                    </span>
                    </p>
                </div>

                <div style={{ textAlign: "left", marginTop: "4%" }}>
                    <span style={{ marginLeft: "2%" }}>{data.user.type}</span>
                    <br></br>
                    <span style={{ marginLeft: "2%" }}>{data.user.tagline}</span>
                </div>

                <hr style={{ marginLeft: "1%", marginRight: "1%", marginTop: "10%" }}></hr>
                <span style={{ textAlign: "center", color: "blue" }}>call</span>
                <hr style={{ marginLeft: "1%", marginRight: "1%", marginTop: "3%" }}></hr>

                <div>

                    <p>
                        <AppsIcon style={{ float: "left", marginLeft: "15%" }} />
                        <TocSharpIcon style={{ float: "left", marginLeft: "25%" }} />
                        <AssignmentIndRoundedIcon style={{ float: "right", marginRight: "20%" }} />
                    </p>
                    <div>
                        {
                            data.user.images.map((data, i) =>
            
                                <Card style={{ width: "33%" , float: "left"}}>

                                    <CardContent>
                                        <div >
                                            {
                                                  <>
                                                  <img alt= {"IMAGE" + i} src={data.link}></img>
                                                   </> 
                                            }

                                        </div>
                                    </CardContent>
                                </Card>
                            )

                        }
                    </div>


                </div>

            </>
        )
    })

    return (
        newdata
    );
}

export default Dashboard;
