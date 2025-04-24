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
        <Stack>
          <Box>
            <Flex>
              <Stack>
                <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
              </Stack>
              <Stack>
                <Title>Debugging—every programmer’s biggest headache</Title>
                <Text>Stuck on debugging? You’re not alone!
                  Imagine staring at your screen,
                  just seeing red error messages without a
                  clue where to even begin – frustrating, right?
                  We get it. </Text>
              </Stack>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Stack>
                <Title>From 'What's Wrong' to 'Here's How to Fix It’</Title>
                <Text>Traditional platforms tell you what’s wrong—
                  not where to look or why. In scaffl.ed,
                  we believe in showing you the way, not just
                  pointing at the problem,
                  so you can truly understand and grow.</Text>
              </Stack>
              <Stack>
                <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
              </Stack>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Stack>
                <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
              </Stack>
              <Stack>
                <Title>Scaffl.ed is not your typical coding course</Title>
                <Text>We offer guided courses, bite-sized lessons,
                  and hands-on activities designed to help you
                  master debugging one step at a time.
                  As you work through exercises,
                  Scaffy works with you. </Text>
              </Stack>
            </Flex>
          </Box>
        </Stack>
        <Box>
          <Flex>
            <Box>
              <Stack>
                <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
                <Title>Scaffy observes where you look.</Title>
                <Text>Eye-tracking technology detects your focus—
                  and your confusion—spotting when you’re stuck,
                  often before you even realize it.</Text>
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
                <Title>Scaffy follows where you point.</Title>
                <Text>Mouse-tracking reveals how you navigate
                  your code—spotting patterns, habits, and hiccups.</Text>
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Image src="https://via.placeholder.com/150" alt="Scaffy Image" />
                <Title>Scaffy learns with you.</Title>
                <Text>By giving real-time, personalized
                  feedback, Scaffy turns moments of
                  frustration into moments of growth.</Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default App
