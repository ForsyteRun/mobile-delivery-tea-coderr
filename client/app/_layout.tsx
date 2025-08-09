import PrivateNavigation from '@/navigation/PrivateNavigation';
import AuthProvider from '@/providers/auth/AuthProvider';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <PrivateNavigation />
        </SafeAreaProvider>
        <StatusBar style="dark" />
      </AuthProvider >
    </>
  );
}
