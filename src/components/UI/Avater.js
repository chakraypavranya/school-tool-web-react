import React from 'react'

export default function Avater(props) {
    const {firstName, lastName, image_Url} = props;
    return (
        <div className="ui horizontal list">
            <div className="item">
                <img className="ui mini circular image" src={image_Url} />
                <div className="content">
                <div className="ui sub header">{firstName + ' ' + lastName}</div>
                </div>
            </div>
        </div>
    )
}
