import './App.css'
import { Button, Title, Flex, Image, Text, Box, Group } from '@mantine/core';
import stuck from './assets/stuck.png';
import feedback from './assets/feedback.png';
import teacher from './assets/teacher.png';
import eye from './assets/eye.png';
import mouse from './assets/mouse.png';
import message from './assets/message.png';
import scaffold from './assets/scaffold.png';


import React from 'react'
function App() {

  return (
    <>
      <Flex>
        <Box style={{ background: 'linear-gradient(45deg, #0CA678, #AE3EC9)', padding: '20px', borderRadius: '8px' }}>
          <Group w='100%' wrap='nowrap' align="center" justify="flex-start">
            <Box style={{ flex: 1, marginRight: '20px', color: 'white', maxWidth: '500px' }}>
              <Title>
                <span style={{ color: '#B69CD0' }}>Scaffy</span>-Your Debugging Buddy</Title>
              <Text >
                Scaffy uses your gaze & clicks to give real-time debugging feedback—just
                as scaffolds help builders reach higher, Scaffy helps coders understand deeper.
              </Text>
              <Button
                style={{
                  background: 'white',
                  color: 'black',
                  border: 'none',
                  padding: '10px 20px',
                }}
              >
                Get Started!
              </Button>
            </Box>
            <Image
              src={scaffold}
              alt="Scaffy Image"
              style={{ width: '100px' }}
            />
          </Group>
        </Box>
        <Flex>
          <Box>
            <Flex>
              <Flex>
                <Image
                  src={stuck}
                  alt="Scaffy Image"
                  style={{ width: '350px' }}
                />
              </Flex>
              <Flex>
                <Title>Debugging—every programmer’s biggest headache</Title>
                <Text>Stuck on debugging? You’re not alone!
                  Imagine staring at your screen,
                  just seeing red error messages without a
                  clue where to even begin – frustrating, right?
                  We get it. </Text>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Flex>
                <Title>From 'What's Wrong' to 'Here's How to Fix It’</Title>
                <Text>Traditional platforms tell you what’s wrong—
                  not where to look or why. In scaffl.ed,
                  we believe in showing you the way, not just
                  pointing at the problem,
                  so you can truly understand and grow.</Text>
              </Flex>
              <Flex>
                <Image
                  src={feedback}
                  alt="Scaffy Image"
                  style={{ width: '350px' }}
                />
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Flex>
                <Image
                  src={teacher}
                  alt="Scaffy Image"
                  style={{ width: '350px' }}
                />              </Flex>
              <Flex>
                <Title>Scaffl.ed is not your typical coding course</Title>
                <Text>We offer guided courses, bite-sized lessons,
                  and hands-on activities designed to help you
                  master debugging one step at a time.
                  As you work through exercises,
                  Scaffy works with you. </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Flex>
            <Box>
              <Flex>
                <Image
                  src={eye}
                  alt="Scaffy Image"
                  style={{ width: '350px' }}
                />
                <Title>Scaffy observes where you look.</Title>
                <Text>Eye-tracking technology detects your focus—
                  and your confusion—spotting when you’re stuck,
                  often before you even realize it.</Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Image
                  src={mouse}
                  alt="Scaffy Image"
                  style={{ width: '350px' }}
                />
                <Title>Scaffy follows where you point.</Title>
                <Text>Mouse-tracking reveals how you navigate
                  your code—spotting patterns, habits, and hiccups.</Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Image
                  src={message}
                  alt="Scaffy Image"
                  style={{ width: '350px' }}
                />
                <Title>Scaffy learns with you.</Title>
                <Text>By giving real-time, personalized
                  feedback, Scaffy turns moments of
                  frustration into moments of growth.</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex >
    </>
  )
}

export default App
