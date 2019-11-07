const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// github job type
const GitHubJobType = new GraphQLObjectType({
  name: 'GitHubJob',
  fields: () => ({
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    created_at: { type: GraphQLString },
    company: { type: GraphQLString },
    company_url: { type: GraphQLString },
    location: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    how_to_apply: { type: GraphQLString },
    company_logo: { type: GraphQLString }
  })
});

const USAJobType = new GraphQLObjectType({
  name: 'USAJob',
  fields: () => ({
    PositionID: { type: GraphQLString },
    DepartmentName: { type: GraphQLString },
    PositionURI: { type: GraphQLString },
    LocationName: { type: GraphQLString },
    PositionTitle: { type: GraphQLString },
    JobSummary: { type: GraphQLString },
    ApplyURI: { type: GraphQLString },
  })
})

// root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gitHubJobs: {
      type: new GraphQLList(GitHubJobType),
      resolve(parent, args) {
        return axios
          .get(
            'https://jobs.github.com/positions.json?full_time=true&location=los+angeles'
          )
          .then(res => res.data);
      }
    },
    gitHubJob: {
      type: GitHubJobType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://jobs.github.com/positions/${args.id}.json`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
