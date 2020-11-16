import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apoloclient = new ApolloClient({
    uri:'http://localhost/graphql'
})

export default VueApollo({
    defaultClient: apoloclient
})