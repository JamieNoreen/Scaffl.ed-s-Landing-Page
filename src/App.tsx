import './App.css'
import { Button, Title, Flex, Image, Stack, Text, Box } from '@mantine/core';
import React from 'react'

function App() {

  return (
    <>
      <Stack>
        <Box style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
          <Flex>
            <Stack>
              <Title>Scaffy-Your Debugging Buddy</Title>
              <Text>Scaffy uses your gaze & clicks to
                give real-time debugging feedback—just
                as scaffolds help builders reach higher,
                Scaffy helps coders understand deeper.</Text>
              <Button>Get Started!</Button>
            </Stack>
            <Stack>
              <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
              <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
            </Stack>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default App
