/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { ThemeProvider } from 'react-native-ios-kit';


function Main() {
    return(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);
