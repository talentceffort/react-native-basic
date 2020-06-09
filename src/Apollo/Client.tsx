import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'prodAddress',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
});
