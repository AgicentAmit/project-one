import Link from 'next/link'
import React from 'react'
import styles from "./style.module.css"

function About() {
    return (
        <div className={styles.amit}>
            About
            <Link href='/about/help'> Navigate</Link>
        </div>
    )
}

export default About