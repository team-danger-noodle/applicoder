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

// authentic job type
const AuthenticJobType = new GraphQLObjectType({
  name: 'AuthenticJob',
  fields: () => ({
    listings: {
      type: AuthenticJobListType
    }
  })
});

// authentic job list type
const AuthenticJobListType = new GraphQLObjectType({
  name: 'AuthenticJobList',
  fields: () => ({
    listing: { type: new GraphQLList(AuthenticJobListingType) }
  })
});

// authentic job listing type
const AuthenticJobListingType = new GraphQLObjectType({
  name: 'AuthenticJobListing',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    howto_apply: { type: GraphQLString },
    post_date: { type: GraphQLString },
    category: { type: AuthenticJobListingCategoryType },
    type: { type: AuthenticJobListingTypeType },
    company: { type: AuthenticJobListingCompanyType },
    apply_url: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

// authentic job listing category type
const AuthenticJobListingCategoryType = new GraphQLObjectType({
  name: 'AuthenticJobListingCategory',
  fields: () => ({
    name: { type: GraphQLString }
  })
});

// authentic job listing type type
const AuthenticJobListingTypeType = new GraphQLObjectType({
  name: 'AuthenticJobListingType',
  fields: () => ({
    name: { type: GraphQLString }
  })
});

// authentic job listing company type
const AuthenticJobListingCompanyType = new GraphQLObjectType({
  name: 'AuthenticJobListingCompany',
  fields: () => ({
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    location: { type: AuthenticJobListingCompanyLocationType }
  })
});

// authentic job listing company location type
const AuthenticJobListingCompanyLocationType = new GraphQLObjectType({
  name: 'AuthenticJobListingCompanyLocation',
  fields: () => ({
    name: { type: GraphQLString }
  })
});

// root query type
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // linkedInJobs: {
    //   type: new GraphQLList(LinkedInJobType),
    //   resolve(parent, args) {
    //     return axios
    //       .get(
    //         'https://jobs.github.com/positions.json?full_time=true&location=los+angeles'
    //       )
    //       .then(res => res.data)
    //       .catch(console.log('yo'));
    //   }
    // },
    gitHubJobs: {
      type: new GraphQLList(GitHubJobType),
      resolve(parent, args) {
        return axios
          .get(
            'https://jobs.github.com/positions.json?full_time=true&location=los+angeles'
          )
          .then(res => res.data)
          .catch(console.log('yo'));
      }
    },
    authenticJobs: {
      type: AuthenticJobType,
      resolve(parent, args) {
        return axios
          .get(
            'https://authenticjobs.com/api/?api_key=eff30b30aac066b2ea5d6d6f1a07a19f&format=json&method=aj.jobs.search'
          )
          .then(res => res.data)
          .catch(console.log('yo'));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
