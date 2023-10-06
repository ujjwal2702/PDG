import { Text, Box, Button, Input, Link, FormControl, WarningOutlineIcon } from "native-base"
import { useState } from "react";
function UserLogin() {
    const [userName, setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [userVerified , setUserVerifiedFlag] = useState(true)
    
    // Update user name according to change in input
    const updateUserName = (name) => {
        setUserName(name)
        if (!userVerified) {
            setUserVerifiedFlag(true)
        }
    }

    // Update user's password according to change in password input
    const updatePassword = (pass) => {
        setPassword(pass)
        if (!userVerified) {
            setUserVerifiedFlag(true)
        }
    }

    const logIn = () => {
        console.log("userName" , userName)
        console.log("Password" , password)
        setUserVerifiedFlag(false)
    }
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center" backgroundColor={"black"}>
            <Text color={"white"} fontSize={40} fontFamily="body" fontWeight="600" fontStyle="italic" >HealthGram</Text>
            {/* <Input variant="underlined" marginBottom={3} width={80} placeholder="Username" color={"white"} />
        <Input variant="underlined" type={show ? "text" : "password"} marginBottom={3} width={80} placeholder="Password" /> */}
            <Box>
                <FormControl isInvalid = {!userVerified}>
                    <Input variant="underlined" type="text" width={80} color={"white"} onChangeText={updateUserName} value={userName} placeholder='UserName' />
                    <Input variant="underlined" type="password" width={80} color={"white"} placeholder='Password' onChangeText ={updatePassword} value={password} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Incorrect Username or Password
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Button marginTop={10} width={80} onPress={logIn}>Log In</Button>
            <Link marginTop={10} isExternal _text={{
                color: "cyan.400"
            }} mt={-0.5} _web={{
                mb: -2
            }} color={"white"}>Create an account</Link>
        </Box>
    );
}

export default UserLogin