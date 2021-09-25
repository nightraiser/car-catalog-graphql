import React from 'react'
import {useQuery} from '@apollo/client'
import {GET_COMPANIES} from '../../queries'

interface Car  {
    id: number,
    Name: string
}
interface Company {
    id: number,
    Name: string,
    logo: string
}


export default function Home():JSX.Element {
    const { loading, data } = useQuery<Record<"companies", [Company]>>(GET_COMPANIES)
    return (
        <div>
            {
                (loading || !data)
                    ? <h1>Loading...</h1>
                    : data.companies.map(r => (
                    <div>
                        {r.id}-{r.Name}
                        <img src={r.logo} />
                    </div>
                    ))
            }
        </div>
    )
}
