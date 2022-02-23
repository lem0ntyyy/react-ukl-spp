import React from 'react';
import { Routes ,Route } from 'react-router-dom';


import Dashboard from './Dashboard';
import DataKelas from './DataKelas';
import DataPetugas from './DataPetugas';
import DataSiswa from './DataSiswa';
import DataSPP from './DataSPP';
import HistoriPembayaran from './HistoriPembayaran';
import TransaksiPembayaran from './TransaksiPembayaran';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/DataKelas" element={<DataKelas/>}/>
        <Route path="/DataPetugas" element={<DataPetugas/>}/>
        <Route path="/DataSiswa" element={<DataSiswa/>}/>
        <Route path="/DataSPP" element={<DataSPP/>}/>
        <Route path="/HistoriPembayaran" element={<HistoriPembayaran/>}/>
        <Route path="/TransaksiPembayaran" element={<TransaksiPembayaran/>}/>
    </Routes>
)

export default Utama;