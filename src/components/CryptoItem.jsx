import { useState, useEffect } from 'react';
import Logo from './Logo'
import Price from './Price'
// import Watchlist from './Watchlist';
import RenderItems from './Watchlist/RenderItems';

function CryptoItem(props) {
  
  
  
  // // const list= JSON.parse(localStorage.getItem("cryptoList"));
  // const [list, setList] = useState(JSON.parse(localStorage.getItem("cryptoList")));
  // console.log(list);
 
  // const handleRemove= (event)=>{
    
  //   setList({...list,[event.target.name]:false})
  //   // setItem(event.target.name);
  //   // list[removeItem] = false;
  //   console.log(list)
  //   // localStorage.setItem("cryptoList", JSON.stringify(list));
       
  // }

  // useEffect(() => {
  //    localStorage.setItem("cryptoList", JSON.stringify(list));

  //   //  ReactDOM.render(
  //   //   <RenderItems/>,
  //   //   document.body
  //   // );


  // }, [list]);


return (
    <>
      <div className="container-fluid d-flex flex-row w-75 border rounded-3 p-3 m-3 border-success border-2 align-items-center">
      <div className='col-3'>
        <Logo name={props.name} abr={props.abr} size={props.size}/>
      </div>

      <div className='col-5'>
        <Price crypto={props.abr.toUpperCase()} />
      </div>

      <div className='col-2' >
        <button className='btn btn-success w-75 p-0 pt-2 pb-2' type="button" name={props.abr}>Buy</button>
      </div>

      <div className='col-2'>
        <button  className='btn btn-danger w-75 p-0 pt-2 pb-2' type="button" onClick={props.handleRemove} name={props.abr} >Remove</button>
      </div>

      </div>
    </>
  );
}

export default CryptoItem