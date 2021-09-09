import React from 'react';
import {Button, Center, ChakraProvider, ColorModeScript, IconButton, useColorMode} from "@chakra-ui/react"
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import {theme} from "../theme/theme";


function App() {

    const {colorMode, toggleColorMode} = useColorMode();

    console.log(colorMode)
    return (
        <Center h='100vh' maxW='1200px' mx='auto'>
            <IconButton onClick={toggleColorMode}
                        colorScheme='cyan'
                        variant='outline'
                        icon={colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}> Switch
                Mode</IconButton>
            <Button variant='solid' bg='primary'>Primary</Button>
        </Center>
    );
}

export default App;
