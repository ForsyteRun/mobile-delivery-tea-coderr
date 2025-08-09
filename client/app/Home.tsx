import { Link } from "expo-router";
import { View } from 'react-native';

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center mx-4">
      <Link href={'/Auth'}>to auth</Link>
    </View>
  )
}

export default Home