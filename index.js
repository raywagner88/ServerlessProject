import { AppRegistry } from 'react-native';
import App from './App';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

AppRegistry.registerComponent('ServerlessProject', () => App);
