import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';

const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftClick = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      // navigation.dispatch(StackActions.pop);
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        animation: "slide_from_left",
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "menu-outline"}
            className="mr-5"
            size={20}
            onPress={onHeaderLeftClick}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products Screen",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
        }}
      />
    </Stack>
  );
}

export default StackLayout