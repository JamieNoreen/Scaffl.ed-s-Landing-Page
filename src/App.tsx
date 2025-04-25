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
import logo from './assets/logo.png';


function App() {

  return (
    <>
      <Box
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'white',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Image
          src={logo} // Replace with your logo image
          alt="Scaffy Logo"
          style={{ width: '120px' }}
        />

        <Button
          style={{
            background: 'linear-gradient(45deg, #0CA678, #AE3EC9)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            width: '150px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)'; // Slightly enlarge the button
            e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)'; // Add shadow
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'; // Reset size
            e.target.style.boxShadow = 'none'; // Remove shadow
          }}
          onClick={() => alert('Try Now button clicked!')} // Optional click action
        >
          Try Now
        </Button>
      </Box>
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
                  color: '#8C8C8C',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  width: '250px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth hover effect
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'; // Slightly enlarge the button
                  e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)'; // Add shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'; // Reset size
                  e.target.style.boxShadow = 'none'; // Remove shadow
                }}
                onClick={() => alert('Try Now button clicked!')} // Optional click action
              >
                Try Now
              </Button>
            </Box>
            <Image
              src={scaffold}
              alt="Scaffy Image"
              style={{ width: '350px' }}
            />
          </Group>
        </Box>

        <Stack
          style={{
            position: 'relative', // Makes the Stack the relative parent for absolute positioning
            background: 'white', // Base white background
            padding: '50px',
            borderRadius: '8px',
            overflow: 'visible', // Ensures gradient circles can extend beyond the container
          }}
        >
          {/* Gradient Circle Spots */}
          <div
            style={{
              position: 'absolute',
              top: '-100px', // Adjust position
              left: '100px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(108, 92, 231, 0.2), transparent 70%)',
              borderRadius: '50%', // Makes it circular
              zIndex: 0, // Ensures it stays behind content
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: '-150px', // Adjust position
              right: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(46, 204, 113, 0.2), transparent 70%)',
              borderRadius: '50%', // Makes it circular
              zIndex: 0, // Ensures it stays behind content
            }}
          ></div>

          {/* Main Content */}
          <Box>
            <Group w="100%" wrap="nowrap" align="center" justify="center">
              <Image
                src={stuck}
                alt="Scaffy Image"
                style={{ width: '350px' }}
              />
              <Box
                style={{
                  flex: 1,
                  marginRight: '20px',
                  maxWidth: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Title>
                  <span style={{ color: '#683598' }}>Debugging</span>—every programmer’s biggest headache
                </Title>
                <Text>
                  Stuck on debugging? You’re not alone! Imagine staring at your screen,
                  just seeing red error messages without a clue where to even begin – frustrating, right?
                  We get it.
                </Text>
              </Box>
            </Group>
          </Box>

          <Box>
            <Group w="100%" wrap="nowrap" align="center" justify="center">
              <Box
                style={{
                  flex: 1,
                  marginRight: '20px',
                  maxWidth: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Title>
                  From <span style={{ color: '#683598' }}>'What's Wrong'</span> to <span style={{ color: '#683598' }}>'Here's How to Fix It’</span>
                </Title>
                <Text>
                  Traditional platforms tell you what’s wrong—not where to look or why. In scaffl.ed,
                  we believe in showing you the way, not just pointing at the problem,
                  so you can truly understand and grow.
                </Text>
              </Box>
              <Image
                src={feedback}
                alt="Scaffy Image"
                style={{ width: '350px' }}
              />
            </Group>
          </Box>

          <Box>
            <Group w="100%" wrap="nowrap" align="center" justify="center">
              <Image
                src={teacher}
                alt="Scaffy Image"
                style={{ width: '350px' }}
              />
              <Box
                style={{
                  flex: 1,
                  marginRight: '20px',
                  maxWidth: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Title>
                  Scaffl.ed is <span style={{ color: '#683598' }}>not</span> your typical coding course
                </Title>
                <Text>
                  We offer guided courses, bite-sized lessons, and hands-on activities designed to help you
                  master debugging one step at a time. As you work through exercises, Scaffy works with you.
                </Text>
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
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge the box
                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)'; // Add shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset size
                e.currentTarget.style.boxShadow = 'none'; // Remove shadow
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
                flex: '1 1 300px', // Makes the box flexible and responsive
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge the box
                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)'; // Add shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset size
                e.currentTarget.style.boxShadow = 'none'; // Remove shadow
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
                flex: '1 1 300px', // Makes the box flexible and responsive
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge the box
                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)'; // Add shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset size
                e.currentTarget.style.boxShadow = 'none'; // Remove shadow
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
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  width: '250px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth hover effect
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'; // Slightly enlarge the button
                  e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)'; // Add shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'; // Reset size
                  e.target.style.boxShadow = 'none'; // Remove shadow
                }}
                onClick={() => alert('Try Now button clicked!')} // Optional click action
              >
                Try Now
              </Button>
            </Box>
          </Group>
        </Box>
      </Stack >
    </>
  )
}

export default App
