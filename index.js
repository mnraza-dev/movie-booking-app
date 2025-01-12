import { registerRootComponent } from "expo";
import { PaperProvider } from 'react-native-paper';

import App from "./App";

export default function Main() {
  return (
    <PaperProvider theme={{ version: 2 }}>
      <App />
    </PaperProvider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
