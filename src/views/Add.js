import React, { Component } from 'react';
import fire from './fire';
export let contacts = [];
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts };
  }
  iName = React.createRef();
  iTel = React.createRef();
  iEmail = React.createRef();
  iWeb = React.createRef();
  iBday = React.createRef();
  iTwitter = React.createRef();
  iIg = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let newContact = {
      name: `${this.iName.current.value}`,
      tel: `${this.iTel.current.value}`,
      email: `${this.iEmail.current.value}`,
      web: `${this.iWeb.current.value}`,
      bday: `${this.iBday.current.value}`,
      twitter: `${this.iTwitter.current.value}`,
      ig: `${this.iIg.current.value}`
    };
    fire.database().ref().child('contacts').push(newContact);
    alert('Kontak tersimpan');
    event.preventDefault();
    window.location.reload();
  }
  render() {
    return (
      <div className="leftcolumn card">
        <h2 className="center">Tambah Kontak Baru</h2>
        <form onSubmit={this.onSubmit}>
          <table className="form">
            <tbody>
              <tr>
                <td>Nama</td>
                <td>
                  <input className="input" type="text" name="name" ref={this.iName} required />
                </td>
              </tr>
              <tr>
                <td>Nomor Telp</td>
                <td>
                  <input className="input" type="tel" name="tel" ref={this.iTel} placeholder="081288888888" required />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input className="input" type="email" name="email" ref={this.iEmail} />
                </td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <input className="input" type="text" name="web" ref={this.iWeb} placeholder="contoh: facebook.com" />
                </td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td>
                  <input className="input" type="date" name="bday" ref={this.iBday} />
                </td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>
                  <input className="input" type="text" name="twitter" ref={this.iTwitter} placeholder="tanpa '@'" />
                </td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>
                  <input className="input" type="text" name="ig" ref={this.iIg} placeholder="tanpa '@'" />
                </td>
              </tr>
              <tr>
                <td className="center" colSpan="2">
                  <button className="submit" type="submit">Simpan</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}