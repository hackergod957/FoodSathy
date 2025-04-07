import SplashScreen from "@/components/SplashScreen";// this is the splash component
import { router, useNavigation, useRouter } from "expo-router";//this is the navigation component
import { useEffect, useRef, useState } from "react";//use components
import { Animated, Easing, Text, View } from "react-native";// native components
import "expo-dev-client"
// Here i have imported all the complements and items

export default function Index() {
  //variables for showing screen 
  const [splashScreen, setSplashScreen] = useState<boolean>(true);
  //here for animation useRef is used so that the screen doesn't rerenders every time and animation runs smoothly
  const opacity = useRef(new Animated.Value(1)).current;//animated.value returns a object variable which can be change smoothly overtime and be linked to animated.timing,view

  const Navigation = useNavigation();// initializes navbar component
  const router = useRouter()//for navigation

  useEffect(() => {
    //to hide the tabbar when the splash screen is true
    Navigation.setOptions({
      tabBarStyle: { display: splashScreen ? "none" : "flat" },//hides bar if true
    });

    if (splashScreen) {
      //waits for 2 seconds then displays fade out animation
      const fadeOut = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,//final wanted value
          duration: 1000,//runtime seconds
          easing: Easing.ease,// so that it runs fast and goes slow
          useNativeDriver: true,// so that the code runs on ui thread
        }).start(() => {
          setSplashScreen(false);
          router.replace('/(auth)/login')
        });
        return () => {
          clearTimeout(fadeOut);// to avoid memory issue
        };
      }, 2000);
    }
  }, [splashScreen, Navigation, opacity]);

  return (
    <>
      {splashScreen ? (
        <Animated.View style={{ flex: 1, opacity }}> 
        {/* since the variable name and style key is same we can write shorthand opacity but for other we need to write opacity: variable */}
          <SplashScreen />
        </Animated.View>
      ) : (
        <>

        </>
      )}
    </>

  );
}
