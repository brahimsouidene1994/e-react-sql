import React from 'react'

export default function Title({title1, title2}) {
    return (
        <div className="title-page my-3">
            <h1 >{title1} <span>{title2}</span></h1>
        </div>
    )
}
