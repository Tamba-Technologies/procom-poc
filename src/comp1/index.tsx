import React, { ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { jobService } from '../services'

export const Comp1: React.FC<{}> = () => {

    useEffect(() => {
        const subscription = jobService.getJobList().subscribe()
    }, [])

    return (
        <>
            <h1>Comp 1</h1>
            <Link to="/comp2">Comp 2</Link>
        </>
    ) as ReactElement
}
