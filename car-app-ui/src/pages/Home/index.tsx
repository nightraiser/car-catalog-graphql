import React from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Row, Spin} from 'antd'
import {chunk} from 'lodash'
import {useQuery} from '@apollo/client'
import {GET_COMPANIES} from '../../queries'
import PictureCard from '../../components/CompanyCard'
import {Company} from '../../interfaces'


export default function Home():JSX.Element {
    const history = useHistory()
    const { loading, data } = useQuery<Record<"companies", [Company]>>(GET_COMPANIES)
    const chunks = chunk(data?.companies || [], 6)
    const handleCardClick = (companyId:number) => {
        history.push(`/cars/${companyId}`)
    }
    return (
        <div style={{padding: '10px', background:"#ececec"}}>
            {
                (loading || !data)
                    ? <h1><Spin /></h1>
                    : chunks.map((row: Company[]) => (
                        <>
                        <Row  gutter={16}>
                            {
                                row.map(c => (
                                   <Col span={4}>
                                      <PictureCard
                                         {...c}
                                         onClick={handleCardClick}
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
