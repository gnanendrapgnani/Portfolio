import { CgProfile } from "react-icons/cg";
import { GoTools } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectTemplate } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoStackoverflow } from "react-icons/io5";
import styles from './NavBar.module.css'

function NavBar() {
    return <>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.icon}> <CgProfile /> Profile</li>
                    <li className={styles.icon}><MdOutlineWorkOutline /> Experence</li>
                    <li className={styles.icon}><GoTools /> Skills</li>
                    <li className={styles.icon}><GoProjectTemplate /> Projects</li>
                    <li className={styles.icon}><MdContactPhone /> Contact me</li>
                </ul>
                <h1>Social</h1>
                <ul className={styles.list}>
                    <li className={styles.icon}> <FaGithubSquare /> Github</li>
                    <li className={styles.icon}> <FaLinkedinIn /> Lindin</li>
                    <li className={styles.icon}> <BsTwitterX /> X.com</li>
                    <li className={styles.icon}> <IoLogoStackoverflow /> Stack Overflow</li>
                </ul>
            </nav>
    </>
}

export default NavBar;