import './App.css'
import { Button, Title, Flex, Image, Text, Box, Group, Stack } from '@mantine/core';
import stuck from './assets/stuck.png';
import feedback from './assets/feedback.png';
import teacher from './assets/teacher.png';
import eye from './assets/eye.png';
import mouse from './assets/mouse.png';
import message from './assets/message.png';
import scaffold from './assets/scaffold.png';
import cta from './assets/cta.png';


import React from 'react'
function App() {

  return (
    <>
      <Stack>
        <Box style={{ background: 'linear-gradient(45deg, #0CA678, #AE3EC9)', padding: '20px', borderRadius: '8px' }}>
          <Group w='100%' wrap='nowrap' align="center" justify="center">
            <Box style={{
              flex: 1,
              marginRight: '20px',
              color: 'white',
              maxWidth: '500px',
              display: 'flex', // Enables flexbox
              flexDirection: 'column', // Arranges children vertically
              gap: '10px', // Adds spacing between children
            }}>
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
              style={{ width: '350px' }}
            />
          </Group>
        </Box>

        <Stack style={{ color: '#004D4D' }}>
          <Box>
            <Group w='100%' wrap='nowrap' align="center" justify="center">
              <Image
                src={stuck}
                alt="Scaffy Image"
                style={{ width: '350px' }}
              />
              <Box style={{
                flex: 1,
                marginRight: '20px',
                maxWidth: '500px',
                display: 'flex', // Enables flexbox
                flexDirection: 'column', // Arranges children vertically
                gap: '10px', // Adds spacing between children
              }}>
                <Title>
                  <span style={{ color: '#683598' }}>Debugging</span>—every programmer’s biggest headache</Title>
                <Text>Stuck on debugging? You’re not alone!
                  Imagine staring at your screen,
                  just seeing red error messages without a
                  clue where to even begin – frustrating, right?
                  We get it. </Text>
              </Box>
            </Group>
          </Box>

          <Box>
            <Group w='100%' wrap='nowrap' align="center" justify="center">
              <Box style={{
                flex: 1,
                marginRight: '20px',
                maxWidth: '500px',
                display: 'flex', // Enables flexbox
                flexDirection: 'column', // Arranges children vertically
                gap: '10px', // Adds spacing between children
              }}>
                <Title>
                  From <span style={{ color: '#683598' }}>'What's Wrong'</span> to <span style={{ color: '#683598' }}>'Here's How to Fix It’</span></Title>
                <Text>Traditional platforms tell you what’s wrong—
                  not where to look or why. In scaffl.ed,
                  we believe in showing you the way, not just
                  pointing at the problem,
                  so you can truly understand and grow.</Text>
              </Box>
              <Image
                src={feedback}
                alt="Scaffy Image"
                style={{ width: '350px' }}
              />
            </Group>
          </Box>


          <Box>
            <Group w='100%' wrap='nowrap' align="center" justify="center">
              <Image
                src={teacher}
                alt="Scaffy Image"
                style={{ width: '350px' }}
              />
              <Box style={{
                flex: 1,
                marginRight: '20px',
                maxWidth: '500px',
                display: 'flex', // Enables flexbox
                flexDirection: 'column', // Arranges children vertically
                gap: '10px', // Adds spacing between children
              }}>
                <Title>
                  Scaffl.ed is <span style={{ color: '#683598' }}>not</span> your typical coding course</Title>
                <Text>We offer guided courses, bite-sized lessons,
                  and hands-on activities designed to help you
                  master debugging one step at a time.
                  As you work through exercises,
                  Scaffy works with you. </Text>
              </Box>
            </Group>
          </Box>
        </Stack>

        <Box style={{ background: '#0D6E6E', padding: '50px' }}>
          <Title style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
            How Does It Work?</Title>
          <Flex
            justify="center"
            align="stretch" // Ensures all boxes have equal height
            wrap="wrap" // Allows boxes to wrap to the next row on smaller screens
            style={{ gap: '20px' }} // Adds spacing between the boxes
          >
            <Box
              style={{
                background: 'white',
                padding: '20px',
                maxWidth: '350px',
                flex: '1 1 300px', // Makes the box flexible and responsive
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stack style={{ height: '100%' }}>
                <Image
                  src={eye}
                  alt="Scaffy Image"
                  style={{ width: '150px', display: 'block', margin: '0 auto' }} // Centers the image
                />
                <Title style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                  Scaffy observes where you look.
                </Title>
                <Text style={{ textAlign: 'justify', flexGrow: 1 }}>
                  Eye-tracking technology detects your focus—
                  and your confusion—spotting when you’re stuck,
                  often before you even realize it.
                </Text>
              </Stack>
            </Box>

            <Box
              style={{
                background: 'white',
                padding: '20px',
                maxWidth: '350px',
                flex: '1 1 300px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stack style={{ height: '100%' }}>
                <Image
                  src={mouse}
                  alt="Scaffy Image"
                  style={{ width: '150px', display: 'block', margin: '0 auto' }} // Centers the image
                />
                <Title style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                  Scaffy follows where you point.
                </Title>
                <Text style={{ textAlign: 'justify', flexGrow: 1 }}>
                  Mouse-tracking reveals how you navigate
                  your code—spotting patterns, habits, and hiccups.
                </Text>
              </Stack>
            </Box>

            <Box
              style={{
                background: 'white',
                padding: '20px',
                maxWidth: '350px',
                flex: '1 1 300px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stack style={{ height: '100%' }}>
                <Image
                  src={message}
                  alt="Scaffy Image"
                  style={{ width: '150px', display: 'block', margin: '0 auto' }} // Centers the image
                />
                <Title style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                  Scaffy learns with you.
                </Title>
                <Text style={{ textAlign: 'justify', flexGrow: 1 }}>
                  By giving real-time, personalized
                  feedback, Scaffy turns moments of
                  frustration into moments of growth.
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Box>

        <Box style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <Group w='100%' wrap='nowrap' align="center" justify="center">
            <Image
              src={cta}
              alt="Scaffy Image"
              style={{ width: '350px' }}
            />
            <Box style={{
              flex: 1,
              marginRight: '20px',
              color: '#0D6E6E',
              maxWidth: '500px',
              display: 'flex', // Enables flexbox
              flexDirection: 'column', // Arranges children vertically
              gap: '10px', // Adds spacing between children
            }}>
              <Title>
                Debug <span style={{ color: '#683598' }}>2x faster </span>with Scaffy</Title>
              <Button
                style={{
                  background: 'linear-gradient(45deg, #0CA678, #AE3EC9)',
                  color: 'white',
                  maxWidth: '200px',
                  border: 'none',
                  padding: '10px 20px',
                }}
              >
                Try now!
              </Button>
            </Box>
          </Group>
        </Box>
      </Stack >
    </>
  )
}

export default App
