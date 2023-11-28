import React from 'react';
import style from "./Divider.module.css";

function Divider() {
  return (
    <div className={style.boxContainer}>
        <div className={style.box}/>
        <div className={style.box}/>
        <div className={style.centerBox}/>
        <div className={style.box}/>
        <div className={style.box}/>
    </div>
  )
}

export default Divider