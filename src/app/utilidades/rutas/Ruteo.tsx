import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../components/contenedor/Inicio";
import { PeliCrear } from "../../components/peliculas/PeliCrear";
import { PeliListar } from "../../components/peliculas/PeliListar";
import { PeliAdmin } from "../../components/peliculas/PeliAdmin";
import { PeliActualizar } from "../../components/peliculas/PeliActualizar";
import { Acerca } from "../../components/otros/Acerca";
import { NoEncontrado } from "../../components/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/pelicre" element={<PeliCrear />} />
      <Route path="/pelilis" element={<PeliListar />} />
      <Route path="/peliadm" element={<PeliAdmin />} />
      <Route path="/peliact/:codigo" element={<PeliActualizar />} />
      <Route path="/acer" element={<Acerca />} />
      <Route path="*" element={<NoEncontrado />} />
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
};
