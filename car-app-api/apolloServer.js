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
        Origin: String
    }
    type Query {
        cars(title: String): [Car]
        companies: [Company]
    }
`;

const resolvers = {
    Query: {
        companies: async () => companies,
        cars: async (parent, args, context ) => {
            const {title} = args
            if(title && title.length > 0) {
                return cars.filter(r =>  r.Name.toLowerCase().indexOf(title.toLowerCase() != -1))
            }
            return cars
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
