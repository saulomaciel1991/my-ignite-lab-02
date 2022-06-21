import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nyoeye038z01xnfhk35ipm/master',
  cache: new InMemoryCache()
})