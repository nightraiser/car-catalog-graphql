import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;
interface IProps {
    imageUrl: string,
    title: string,
    description?: string 
}
export default function PictureCard({imageUrl, title, description = ''}: IProps){
    return (
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={imageUrl} />}
        >
    <Meta title={title} description={description} />
  </Card>
    )
}
