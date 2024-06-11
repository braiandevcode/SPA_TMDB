import { Error } from "../components/Error.js";
import { Maintenance } from "../components/Maintenance.js";
const $ROOT = document.getElementById("root");
export async function ajax(props){
  let { url, cbSuccess }=props;
  await fetch(url)
  .then(data => data.ok ? data.json() : Promise.reject(data))
  .then(data => cbSuccess(data))
  .catch(err => {
    let message= err.statusText || "Ocurrio un error inesperado en la API";
    while ($ROOT.firstChild) {
      $ROOT.removeChild($ROOT.firstChild);
    }
    console.log(err);
    err.status !== undefined ? $ROOT.append(Error(`Error ${err.status}: ${message}`)) : $ROOT.append(Maintenance());
  }); 
}