import React from 'react'
import { Card } from 'antd';
import { Car } from '../../interfaces'

const { Meta } = Card;

export default function CarCard(props: Car) {
    return (
        <Card
        hoverable
        cover={<img alt="example" src={props.logo} />}
        >
            <h2>{props.Name}</h2>
            <ul style={{listStyle:"none"}}>
                <li><b>Miles_per_Gallon</b>: {props.Miles_per_Gallon}</li>
                <li><b>Cylinders</b>: {props.Cylinders}</li>
                <li><b>Displacement</b>: {props.Displacement}</li>
                <li><b>Horsepower</b>: {props.Horsepower}</li>
                <li><b>Weight_in_lbs</b>: {props.Weight_in_lbs}</li>
                <li><b>Acceleration</b>: {props.Acceleration}</li>
                <li><b>Year</b>: {props.Year}</li>
                <li><b>Origin</b>: {props.Origin}</li>
            </ul>
        </Card>
    )
}
