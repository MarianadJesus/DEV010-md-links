/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';


// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Typography, Box } from '@mui/material';


interface Pelicula {
  id?: number;
  title?: string;
  poster_path?: string;
  titulo: string;
  slug: string;
  // other optional properties
}


const Carrucel: React.FC<Pelicula> = ({ titulo, slug}) => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

  const obtenerPeliculas = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}${slug}&api_key=${import.meta.env.VITE_KEY_API}`;
      const res = await fetch(url);
      const data = await res.json();
      setPeliculas(data.results || []);
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    }
  };

  useEffect(() => {
    obtenerPeliculas();
    
  }, []);

  return (
    <Box sx={{ marginBottom: 6 }}>
      <Typography
        fontWeight={600} sx={{ color: '#fff', fontSize: 20, marginBottom: 1 }}>
        {titulo}
      </Typography>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        onSlideChange={() => { }}
        onSwiper={() => { }}
      >

        {
          peliculas.map((pelicula) => (
            <SwiperSlide key={pelicula.id}>
              <img
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                alt={pelicula.title}
              />

              {/* Ajusta según la variante que necesites */}
            </SwiperSlide>
          ))}

      </Swiper>
    </Box>
  )
}

export default Carrucel
