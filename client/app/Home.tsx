import { Link } from "expo-router";
import { View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Link href={'/Auth'}>to auth</Link>
    </View>
  )
}

export default Home