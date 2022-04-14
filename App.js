import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { init } from  './src/shared/services/database';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
    .then(() => {
      setDbInitialized(true);
    });
  }, []);

  if( !dbInitialized ) {
    return(
      <AppLoading/>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes/>
    </>
  );
}