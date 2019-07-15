import React from 'react'
import ReactPlayer from 'react-player'
import "../App.css";

function POD(props) {
    return (
        <div>

            <h3>{props.data.title}</h3>
            <p>{props.data.explanation}</p>
            <div className="media">
            {props.data.media_type === 'video' ?
            <ReactPlayer url={props.data.url} playing={false} width='100%'
            height='100%' /> :
            <img src={props.data.url} alt="pic of the week"/>
            }
            </div>



        </div>
    )
}

export default POD
