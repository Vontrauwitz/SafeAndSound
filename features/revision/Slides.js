import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/hero/choque.jpg",
    title: "No te arriesgues a comprar un auto seminuevo sin antes revisarlo",
    description:
      "A veces, estos vehículos pueden estar más maltratados de lo que parece, lo que puede generar problemas mecánicos y costosas reparaciones.",
  },
  {
    id: 2,
    image: "/hero/señora2.jpg",
    title: "Evita comprar autos robados sin saberlo",
    description:
      "En la actualidad, hay muchos fraudes en la compra-venta de autos, incluso puedes estar comprando un vehículo robado sin saberlo. Nosotros te ofrecemos nuestro servicio de revisión de autos seminuevos para que realices una compra segura.",
  },
  {
    id: 3,
    image: "/hero/fake.jpg",
    title: "No confíes en las agencias, confía en nosotros",
    description:
      "En muchas ocasiones, las agencias de venta de autos son las que realizan los fraudes. Con nuestro servicio, podrás tener la tranquilidad de que tu auto ha sido revisado minuciosamente por expertos en el tema, garantizando su calidad y evitando sorpresas desagradables.",
  },
  {
    id: 4,
    image: "/hero/familiaauto.jpg",
    title: "Adquiere un auto seminuevo en excelentes condiciones",
    description:
      "Al adquirir nuestro servicio de revisión de autos seminuevos, podrás detectar cualquier detalle en el vehículo, lo que te permitirá tomar una decisión más informada en la compra del auto. ¡No te arriesgues, confía en nosotros para tener un auto en excelentes condiciones!",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <Box position="relative" height="500px">
      <Image
        src={slides[currentSlide].image}
        alt="Imagen de un auto seminuevo"
        layout="fill"
        objectFit="cover"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box maxWidth="800px" margin="0 auto">
          <Text fontSize="3xl" fontWeight="bold" color="white" mb={4}>
            {slides[currentSlide].title}
          </Text>
          <Text fontSize="xl" color="white">
            {slides[currentSlide].description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Slider;
