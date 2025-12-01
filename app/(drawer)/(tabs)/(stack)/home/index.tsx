import CustomButton from '@/components/shared/CustomButton';
import * as NavigationBar from "expo-navigation-bar";
import { Link, router } from 'expo-router';
import { Platform, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
  NavigationBar.setVisibilityAsync("hidden");
}

const HomeScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f3f4f6"
        translucent={false}
      />
      <SafeAreaProvider>
        <View className="px-10 mt-10">
          <CustomButton
            className="mb-2"
            color="primary"
            onPress={() => router.push("/products")}
          >
            Productos
          </CustomButton>

          <CustomButton
            className="mb-2"
            color="secondary"
            onPress={() => router.push("/profile")}
          >
            Perfil
          </CustomButton>

          <CustomButton
            className="mb-2"
            color="tertiary"
            onPress={() => router.push("/settings")}
          >
            Ajustes
          </CustomButton>

          <Link href="/products" asChild>
            <CustomButton variant="text-only" className="mb-2">
              Productos
            </CustomButton>
          </Link>

          {/* <Link className='mb-5' href='/products'>Productos</Link>
              <Link className='mb-5' href='/profile'>Perfil</Link>
              <Link className='mb-5' href='/settings'>Ajustes</Link> */}
        </View>
      </SafeAreaProvider>
    </>
  );
}

export default HomeScreen