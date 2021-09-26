import { gql } from "@apollo/client";

export const GET_CARS = gql`
query Cars($company: Int){
    cars(company: $company) {
        Name,
        Miles_per_Gallon,
        Cylinders,
        Displacement,
        Horsepower,
        Weight_in_lbs,
        Acceleration,
        Year,
        Origin,
        id
    }
}
`
export const GET_COMPANIES = gql`
query {
    companies {
        id
        Name,
        logo
    }
}
`