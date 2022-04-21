import React, { ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { jobService } from '../services'

export const Comp2: React.FC<{}> = () => {
    useEffect(() => {
        jobService.jobsList$.subscribe(event => console.log("jobService.jobsList$ : ", event));
    })

    return (
        <>
            <h1>Comp 2</h1>
            <Link to="/">Comp 1</Link>
        </>
    ) as ReactElement
}
