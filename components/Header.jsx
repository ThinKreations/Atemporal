import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import btn from '../src/lateral.png'

export default function Header(){

return(

<div className={styles.header}>
      <Image src={'../src/atempologo.png'} width={250} height={48} />
      <button className={styles.btnLateral}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className={styles.botonera}>
      
      <button className={styles.btnMenu}>
        <font face="Inter" size='3'>
          <h3>Botón</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Inter" size='3'>
          <h3>Botón</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Inter" size='3'>
          <h3>Botón</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Inter" size='3'>
          <h3>Botón</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Inter" size='3'>
          <h3>Botón</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Inter" size='3'>
          <h3>Botón</h3>
        </font>
      </button>

      </div>
      </div>

)

}