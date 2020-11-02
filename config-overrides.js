const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    actions: path.resolve(__dirname, 'src/actions/'),
    reducers: path.resolve(__dirname, 'src/reducers/'),
    components: path.resolve(__dirname, 'src/components/'),
    containers: path.resolve(__dirname, 'src/containers/'),
    store: path.resolve(__dirname, 'src/store/'),
  })
);
