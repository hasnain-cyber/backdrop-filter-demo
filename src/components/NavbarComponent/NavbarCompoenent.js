import styles from './NavbarComponent.module.css';

const NavbarConponent = () => {
    return (
        <div>
            <ul className={styles.navbarUl}>
                <li className={styles.navbarUlLi}>
                    Home Parent
                    <ul className={styles.navbarUlLiUl}>
                        <li>Home Child 1 </li>
                        <li>Home Child 2</li>
                        <li>Home Child 3</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default NavbarConponent;