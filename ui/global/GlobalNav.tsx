"use client"

import Link from "next/link"
import { useState } from "react"
import {
  MdOutlineFolderShared,
  MdEditNote,
  MdFace,
  MdPhonelinkRing,
} from "react-icons/md"
import styles from "./Navbar.module.css"

export function GlobalNav() {
  const [navbar, setNavbar] = useState(false)
  const showNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <div>
      <div className={styles.burgerIcon} id='navButton' onClick={showNavbar}>
        <div
          className={styles.line1}
          style={
            navbar
              ? {
                  background: "var(--primary-bg-color)",
                  transform: "rotate(45deg)",
                }
              : {
                  background: "var(--primary-btn-color)",
                  transform: "rotate(0)",
                }
          }
        ></div>
        <div
          className={styles.line2}
          style={
            navbar
              ? {
                  background: "var(--primary-bg-color)",
                  transform: "translateX(10px)",
                  opacity: 0,
                }
              : { background: "var(--primary-btn-color)" }
          }
        ></div>
        <div
          className={styles.line3}
          style={
            navbar
              ? {
                  background: "var(--primary-bg-color)",
                  transform: "rotate(-45deg)",
                }
              : {
                  background: "var(--primary-btn-color)",
                  transform: "rotate(0)",
                }
          }
        ></div>
      </div>
      <nav
        className={styles.navbar}
        style={
          navbar
            ? { transform: "translateX(0)" }
            : { transform: "translateX(100%)" }
        }
      >
        <Link href='/portfolio' className={styles.navbarItem}>
          <MdOutlineFolderShared /> Portfolio
        </Link>
        <Link href='/blog' className={styles.navbarItem}>
          <MdEditNote /> Blog
        </Link>
        <Link href='/about' className={styles.navbarItem}>
          <MdFace /> About
        </Link>
        <Link href='/contact' className={styles.navbarItem}>
          <MdPhonelinkRing /> Contact
        </Link>
      </nav>
    </div>
  )
}
