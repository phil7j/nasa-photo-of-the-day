import React from 'react'
import ReactPlayer from 'react-player'


function POD(props) {
    return (
        <div>

            <h3>{props.data.title}</h3>
            <p>{props.data.explanation}</p>
            {props.data.media_type === 'video' ?
            <ReactPlayer url={props.data.url} playing={false} /> :
            <img src={props.data.url} />
            }



        </div>
    )
}

export default POD
