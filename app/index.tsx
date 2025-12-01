import { Redirect } from 'expo-router';

const App = () => {
  // return <Redirect href='./(stack)/home' />
  // return <Redirect href='./tabs' />
  // return <Redirect href='./drawer' />
  return <Redirect href='/home' />
  // return (
  //   <SafeAreaProvider>
  //     <View className="mt-6 mx-2.5">
  //       <Text style={{ fontFamily: "WorkSans-Black" }} className="text-5xl ">
  //         Hola mundo
  //       </Text>

  //       <Text className="text-4xl font-work-black text-primary">
  //         Hola mundo
  //       </Text>
  //       <Text className="text-3xl font-work-medium text-secondary">
  //         Hola mundo
  //       </Text>
  //       <Text className="text-2xl font-work-light text-secondary-100">
  //         Hola mundo
  //       </Text>
  //       <Text className="text-xl text-tertiary">Hola mundo</Text>
  //       <Link
  //         href='/products'
  //       >
  //         Productos
  //       </Link>
  //     </View>
  //   </SafeAreaProvider>
  // );
}

export default App;