export interface Car {
    Name: string,
    Miles_per_Gallon: number,
    Cylinders: number,
    Displacement: number,
    Horsepower: number,
    Weight_in_lbs: number,
    Acceleration: number,
    Year: string,
    Origin: string,
    id: number,
    logo?: string,
    company: number
}
export interface Company {
    id: number,
    Name: string,
    logo: string
}