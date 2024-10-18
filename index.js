/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BugsnagPerformance from '@bugsnag/react-native-performance'

AppRegistry.registerComponent(appName, () => App);

BugsnagPerformance.start({
    apiKey: 'ccabe8684e16bcf39d44c7afa083b430',
    appVersion: '4.10.0',
    releaseStage: 'testing'
})
