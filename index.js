/**
 * @format
 */
// import './src/setupRxDB';  // << must be first!

import 'react-native-get-random-values';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
