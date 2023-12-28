import React from 'react'
import { HOC_comp } from './HOC_comp'

const Drop_down = () => {
    let getdata = () => { 
        let select = document.querySelector("select");
        let singleData = document.querySelector("#show");
        if (singleData.innerHTML == "") {
            document.querySelector("#show").innerHTML += `<span>${select.value}</span>`;
        }
        else {
            let allData = document.querySelectorAll("#show span");
            let match;
            allData.forEach((x) =>{
                match = x.innerHTML.split("<br>");
            })
            if(match[0] == select.value){
                let r = document.querySelectorAll("#show span");
                console.log(r);
                r[r.length-1].innerHTML += `<br>${select.value}`;
            }
            else{
                document.querySelector("#show").innerHTML += `<span>${select.value}</span>`;
            }
        }
    }
  return (
    <>
        <form  className="mx-auto w-25 mt-5 text-center">
            <select>
                <option value="" disabled selected>Select Option</option>
                <option name="coin" value="head">Head</option>
                <option name="coin" value="tail">Tail</option>
            </select><br/>
        <button type="button" onClick={getdata} className="btn btn-success mt-2">Click</button>  
        </form>
    <div id="show" className='d-flex gap-5'></div>
  </>
  )
}

export default HOC_comp(Drop_down)

