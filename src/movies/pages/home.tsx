import React from 'react';
import { MainLayout } from '../layout';
import Carrucel from '../components/carrucel';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Carrucel titulo='Lo más visto' slug='/trending/all/week?'/>
      <Carrucel titulo='Acción' slug='/discover/movie/?with_genres=28'/>
      <Carrucel titulo='Comedia' slug='/discover/movie/?with_genres=35'/>
      <Carrucel titulo='Drama' slug='/discover/movie/?with_genres=18'/>
      <Carrucel titulo='Aventura' slug='/discover/movie/?with_genres=12'/>
      <Carrucel titulo='Animation' slug='/discover/movie/?with_genres=16'/>
      <Carrucel titulo='Crime' slug='/discover/movie/?with_genres=80'/>
      <Carrucel titulo='Documentary' slug='/discover/movie/?with_genres=99'/>
      <Carrucel titulo='Family' slug='/discover/movie/?with_genres=10751'/>
      <Carrucel titulo='Fantasy' slug='/discover/movie/?with_genres=14'/>
      <Carrucel titulo='History' slug='/discover/movie/?with_genres=36'/>
      <Carrucel titulo='Horror' slug='/discover/movie/?with_genres=27'/>
      <Carrucel titulo='Music' slug='/discover/movie/?with_genres=10402'/>
      <Carrucel titulo='Mistery' slug='/discover/movie/?with_genres=9648'/>
      <Carrucel titulo='Romance' slug='/discover/movie/?with_genres=10749'/>
      <Carrucel titulo='Science Fiction' slug='/discover/movie/?with_genres=878'/>
      <Carrucel titulo='TV Movie' slug='/discover/movie/?with_genres=10770'/>
      <Carrucel titulo='Thriller' slug='/discover/movie/?with_genres=53'/>
      <Carrucel titulo='War' slug='/discover/movie/?with_genres=10752'/>
      <Carrucel titulo='Western' slug='/discover/movie/?with_genres=37'/>
      {/* Add more Carrucel components with unique titles and slugs */}
    </MainLayout>
  );
};

export default Home;
