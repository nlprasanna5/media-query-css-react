import { useState } from 'react';
import styles from './Media.module.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';

function Header() {
    // State for mobile menu visibility
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    }
    return (
        <>
            {/* Header */}
            <header>
                {/* Logo */}
                <div className={styles.logo}>
                    {/* Add logo image or text */}
                    <p>Onclick</p>

                </div>

                {/* Navigation */}
                <nav className={`${styles.navigation} ${isMobileMenuVisible ? styles.showMenu : ''}`}>
                    {/* Add navigation links */}
                    <div className={styles.menu}>

                        <ul className={styles.home}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>About Us</li>
                        </ul>


                        <ul className={styles.login}>
                            <li>Login</li>
                            <li>Sign Up</li>
                        </ul>

                    </div>

                </nav>

                {/* Mobile menu toggle */}
                <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
                    {/* Add mobile menu icon */}
                    {
                        isMobileMenuVisible ? <FaTimes /> : <FaBars />
                    }
                </div>
            </header>
        </>
    );
}

export default Header;