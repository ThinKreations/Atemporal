import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import logo from '../src/atempologo.PNG'
import btn from '../src/lateral.png'

export default function Header(){

return(

<div className={styles.header}>
      <Image src={logo} width={580} height={115} />
      <button className={styles.btnLateral}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className={styles.botonera}>
      
      <button className={styles.btnMenu}>
        <font face="Work Sans" size='3'>
          <h3>Noticias</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Work Sans" size='3'>
          <h3>Música</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Work Sans" size='3'>
          <h3>Redes</h3>
        </font>
      </button>
      <button className={styles.btnMenu}>
        <font face="Work Sans" size='3'>
          <h3>Nosotros</h3>
        </font>
      </button>
      
      <button className={styles.btnMenu}>
        <font face="Work Sans" size='3'>
          <h3>Merch</h3>
        </font>
      </button>

      </div>
      </div>

)

}