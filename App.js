import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/helper/Navigation';


// import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import { createStore, applyMiddleware } from 'redux';



const store = createStore(reducers, applyMiddleware(thunk));

function App() {



  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}

      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>


      {/* </SafeAreaProvider> */}
    </Provider>
  );
};


export default App;