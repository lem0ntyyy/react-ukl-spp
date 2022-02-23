import React from 'react';
import Utama from './components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand">SPP</a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/">Dashboard</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataSiswa">Data Siswa</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataPetugas">Data Petugas</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataKelas">Data Kelas</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataSPP">Data SPP</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/TransaksiPembayaran">Transaksi Pembayaran</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/HistoriPembayaran">Histori Pembayaran</Link></a>
                  </li>
                </ul>
              </div>
            </div> 
          </nav>
          <p><Utama /></p> 
      </div>
    );
  }
}

export default App;