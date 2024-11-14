import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text>SplashScreen Demo with new arch(0.76.1)</Text>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
