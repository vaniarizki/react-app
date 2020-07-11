import React, { useEffect, useState } from 'react';
import fire from './fire';
import { default as Wa } from '../icon/whatsapp.png';
import { default as Del } from '../icon/delete.png';

// menampilkan daftar kontak

const th = ['Nama', 'No Telp', 'Email', 'Website', 'Tanggal Lahir', 'Twitter', 'Instagram', 'WA', 'Aksi'];
// handling delete
const handleDelete = (id, name) => {
  let c = window.confirm(`Hapus kontak ${name}?`)
  if (c === true) {
    fire.database().ref().child(`contacts/${id}`).remove()
    alert(`Berhasil menghapus kontak ${name}`);
  } else {
    alert(`Kontak ${name} tidak dihapus`)
  }
}

export default function Contacts() {
  let [contactObj, setContactObj] = useState({});
  let [count, setCount] = useState(0);
  // mengambil data dari database saat memuat halaman
  useEffect(() => {
    fire.database().ref().child('contacts').on('value', snapshot => {
      if (snapshot.val() != null) {
        setContactObj({ ...snapshot.val() });
        const count = snapshot.numChildren();
        setCount(count);
      }
    })
  }, [])

  return (
    <>
      <div className="leftcolumn card" >
        <h2 className="center">Daftar Kontak</h2>
        <div className="daftar">
          <p>Jumlah kontak: {count}</p>
          <table>
            <thead>
              <tr>{th.map(e => <th key={e}>{e}</th>)}</tr>
            </thead>
            <tbody>
              {Object.keys(contactObj).map((id) => (
                <tr key={id}>
                  <td>{contactObj[id].name}</td>
                  <td>{contactObj[id].tel}</td>
                  <td><a href={`mailto:${contactObj[id].email}`} title={`Kirim email ke ${contactObj[id].name}`}>{contactObj[id].email}</a></td>
                  <td>{contactObj[id].web}</td>
                  <td>{contactObj[id].bday}</td>
                  <td><a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${contactObj[id].twitter}`}>
                    {contactObj[id].twitter}
                  </a></td>
                  <td><a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/${contactObj[id].ig}`}>
                    {contactObj[id].ig}
                  </a></td>
                  <td><a target="_blank" rel="noopener noreferrer" href={`https://wa.me/62${contactObj[id].tel}`}>
                    <img className="icon" alt='WhatsApp' title={`Klik untuk membuka WhatsApp ${contactObj[id].name}`} src={Wa}></img>
                  </a></td>
                  <td>
                    <button onClick={() => handleDelete(id, `${contactObj[id].name}`)}>
                      <img className="icon" alt='Hapus' title={`Menghapus kontak ${contactObj[id].name}`} src={Del}></img>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >
      </div >
    </>
  )
}


