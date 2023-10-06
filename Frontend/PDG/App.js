import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box, Button, Input, Link } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center" backgroundColor={"black"}>
        <Text color={"white"} fontSize={40} fontFamily={"Roboto"} >Welcome To PDG</Text>
        <Input variant="underlined" marginBottom={3} width={80} placeholder="Username" />
        <Input variant="underlined" marginBottom={3} width={80} placeholder="Password" />
        <Button  marginTop={10} width={80}>Log In</Button>
        <Link  marginTop={10} isExternal _text={{
        color: "cyan.400"
      }} mt={-0.5} _web={{
        mb: -2
      }} color={"white"}>Create an account</Link>
      </Box>
     

    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
