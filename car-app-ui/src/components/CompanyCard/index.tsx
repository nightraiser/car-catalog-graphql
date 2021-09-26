import React from 'react'
import { Card } from 'antd';
import {Company} from '../../interfaces'
const { Meta } = Card;
interface IProps extends Company {
    onClick?(companyId:number): void
}
export default function PictureCard({id, logo, Name, onClick}: IProps){
    const handleClick = () => {
        onClick && onClick(id)
    }
    return (
        <Card
        onClick={handleClick}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={logo} />}
        >
    <Meta title={Name} />
  </Card>
    )
}
