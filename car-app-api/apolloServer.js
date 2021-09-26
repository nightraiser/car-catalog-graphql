import { gql, ApolloServer } from "apollo-server-express";
import {cars, companies} from './data'
const typeDefs = gql`
    type Company {
        id: Int,
        Name: String,
        logo: String
    }
    type Car {
        id: Int,
        Name: String,
        Miles_per_Gallon: Int,
        Cylinders: Int,
        Displacement: Int,
        Horsepower: Int,
        Weight_in_lbs: Int,
        Acceleration: Int,
        Year: String,
        Origin: String,
        company: Int
    }
    type Query {
        cars(title: String, company: Int): [Car]
        companies: [Company]
    }
`;

const resolvers = {
    Query: {
        companies: async () => companies,
        cars: async (parent, args, context ) => {
            const {title, company} = args
            let response = [...cars]
            if(title && title.length > 0) {
                response = response.filter(r =>  r.Name.toLowerCase().indexOf(title.toLowerCase() != -1))
            }
            if(company) {
                response = response.filter(r => r.company === company)
            }
            return response
        }
    }
    
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        const userAgent = req.headers['user-agent'];
        return { useId: userAgent };
    }
});

export default server;
