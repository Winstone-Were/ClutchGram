/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { ThemeProvider } from 'react-native-ios-kit';
import { PaperProvider } from 'react-native-paper';

function Main() {
    return(
    <PaperProvider>
        <App />
    </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);
