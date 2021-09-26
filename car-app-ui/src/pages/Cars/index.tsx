import React from 'react'
import { Col, Row, Spin} from 'antd'
import {chunk} from 'lodash'
import {useQuery} from '@apollo/client'
import { useParams } from 'react-router-dom'
import {GET_CARS} from '../../queries'
import CarCard from '../../components/CarCard'
import { getCarImage } from '../../utils/cars'
import {Car} from '../../interfaces'

interface PageParams {
    companyId: string
}
export default function Home():JSX.Element {
    const params = useParams<PageParams>()
    const { loading, data } = useQuery<Record<"cars", [Car]>>(GET_CARS, {variables: {company: parseInt(params.companyId)}})
    const chunks = chunk(data?.cars || [], 6)
    return (
        <div style={{padding: '10px', background:"#ececec"}}>
            {
                (loading || !data)
                    ? <h1><Spin /></h1>
                    : chunks.map((row: Car[]) => (
                        <>
                        <Row  gutter={16}>
                            {
                                row.map(c => (
                                   <Col span={8}>
                                      <CarCard
                                        {...c}
                                        logo={getCarImage()}
                                        />
                                   </Col> 
                                ))
                            }
                        </Row>
                        <br />
                        </>
                    ))
            }
        </div>
    )
}
