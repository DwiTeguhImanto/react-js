import { useState } from 'react';
import Tabel from './Tabel';
function Menu() {

    const title = "Daftar Menu Restoran";

    const [menus,setMenu] = useState(
        [
            {idmenu:25, idkategori:35, menu:"pancake", gambar:"dessert-1.jpg", harga:25000 },
            {idmenu:26, idkategori:35, menu:"ice cream strawberry", gambar:"dessert-4.jpg", harga:13000 },
            {idmenu:27, idkategori:35, menu:"lava cake", gambar:"dessert-3.jpg", harga:16000 },
            {idmenu:28, idkategori:28, menu:"soup", gambar:"dinner-2.jpg", harga:28500 },
            {idmenu:36, idkategori:28, menu:"tomyum", gambar:"dinner-5.jpg", harga:25000 },
            {idmenu:29, idkategori:28, menu:"oatmeal milk", gambar:"breakfast-8.jpg", harga:22000 }
        ]
    );

    return (
      <div className="App">
        
        <Tabel menu={menus} title={title}/>
        <Tabel menu={menus.filter((data) => (data.idkategori===28))} title="Menu Makanan"/>
      </div>
    );
  }
  
  export default Menu;
  