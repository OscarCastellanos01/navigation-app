import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View className="mt-6 mx-2.5">
        <Text style={{ fontFamily: "WorkSans-Black" }} className="text-5xl ">
          Hola mundo
        </Text>

        <Text className="text-4xl font-work-black text-primary">
          Hola mundo
        </Text>
        <Text className="text-3xl font-work-medium text-secondary">
          Hola mundo
        </Text>
        <Text className="text-2xl font-work-light text-secondary-100">
          Hola mundo
        </Text>
        <Text className="text-xl text-tertiary">Hola mundo</Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;