const v = 'aiueo';
const k = 'bcdfghjklmnpqrstvwxyz';

let format = [];
const Format = document.getElementById('format')
const btnVocal = document.getElementById('vocal')
const btnKonsonan = document.getElementById('konsonan')
const btnDelete = document.getElementById('delete')
const btnGenerate = document.getElementById('generate')

function acak(arg, jumlah = 10) {
  let hasil = [];
  for (let j = 0; j < jumlah; j++) {
    let kata = '';
    for (let i = 0; i < arg.length; i++) {
      kata += arg[i][Math.floor(Math.random()* arg[i].length)]
    }
    hasil.push(kata)
  }
  return hasil
}

btnVocal.onclick = () => {
  format.push(v)
  Format.innerHTML += ' v'
}
btnKonsonan.onclick = () => {
  format.push(k)
  Format.innerHTML += ' k'
}
btnDelete.onclick = () => {
  format.pop()
  Format.innerHTML = Format.innerHTML.substring(0, format.length*2)
}
btnGenerate.onclick = () => {
  let jumlah = +document.getElementById('jumlah').value
  document.getElementById('hasil').innerHTML = ''
  const hasil = acak(format, jumlah)
  for (let i = 0; i < hasil.length; i++) {
    let h6 = document.createElement("h3");
    let kata = document.createTextNode(hasil[i])
    h6.appendChild(kata)
    document.getElementById('hasil').appendChild(h6)
  }
}