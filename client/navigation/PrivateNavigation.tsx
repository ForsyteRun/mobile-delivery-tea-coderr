import { useAuth } from "@/hooks/useAuth"
import { Stack } from "expo-router"
import { routes } from "./routes"

const PrivateNavigation = () => {
  const { user } = useAuth()

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'fff' }
      }}>
      {
        user ? (
          routes.map((route) => (
            <Stack.Screen key={route.route} name={route.route} />
          ))
        ) : (
          <Stack.Screen name="Auth" />
        )
      }
    </Stack>
  )
}

export default PrivateNavigation