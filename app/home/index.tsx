import { Link } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
        <View className='px-10'>
            <Link className='mb-5' href='/products'>Productos</Link>
            <Link className='mb-5' href='/profile'>Perfil</Link>
            <Link className='mb-5' href='/settings'>Ajustes</Link>
        </View>
    </SafeAreaProvider>
  )
}

export default HomeScreen