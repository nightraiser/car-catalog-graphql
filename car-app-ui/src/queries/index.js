import { gql } from "@apollo/client";

export const GET_CARS = gql`
query {
    cars {
    id
    Name
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