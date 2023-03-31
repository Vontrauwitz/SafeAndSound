import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Fade, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const HeroBanner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <Fade in>
      <Box
        bg="black"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
      >
        {showVideo && (
          <>
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.4)"
              zIndex={-1}
            />
            <ReactPlayer
              url={isLargerThanMobile ? "/hero/auto2.mp4" : "/hero/auto1.mp4"}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </>
        )}
        <Heading color="blue.600" mb={4} zIndex={1}>
          Garantías de Autos
        </Heading>
        <Text
          color="blue.600"
          fontSize="xl"
          mb={8}
          zIndex={1}
          paddingLeft={{ base: "2", md: "0" }}
          paddingRight={{ base: "2", md: "0" }}
        >
          Protege tu inversión con nuestras garantías de autos.
        </Text>
        <Button colorScheme="blue" size="lg" zIndex={1}>
          Obtén tu garantía ahora
        </Button>
      </Box>
    </Fade>
  );
};;

export default HeroBanner;
