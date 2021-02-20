import React from 'react';
import { View, Text } from 'react-native';

// import Provider
import { ProviderUser } from './src/context/context';
// import DataUser
import DataUser from './src/DataUser';

const App = () => {
  return (
    <View>
      {/* Provider context User */}
      <ProviderUser>
        {/* component DataUser */}
        <DataUser />
      </ProviderUser>
    </View>
  )
}

export default App