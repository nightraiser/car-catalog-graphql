import React from 'react'
import { Col, Row, Spin} from 'antd'
import {chunk} from 'lodash'
import {useQuery} from '@apollo/client'
import {GET_COMPANIES} from '../../queries'
import PictureCard from '../../components/PictureCard'

interface Company {
    id: number,
    Name: string,
    logo: string
}


export default function Home():JSX.Element {
    const { loading, data } = useQuery<Record<"companies", [Company]>>(GET_COMPANIES)
    const chunks = chunk(data?.companies || [], 3)
    return (
        <div>
            {
                (loading || !data)
                    ? <h1><Spin /></h1>
                    : chunks.map((row: Company[]) => (
                        <Row  gutter={16}>
                            {
                                row.map(c => (
                                   <Col span={8}>
                                      <PictureCard
                                        imageUrl={c.logo}
                                        title={c.Name}
                                        />
                                   </Col> 
                                ))
                            }
                        </Row>
                    ))
            }
        </div>
    )
}
