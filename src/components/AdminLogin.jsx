import styles from './AdminLogin.module.css'

function AdminLogin() {
    return <>
    <div className={styles.loginContainer}>
    <div className={styles.loginCenter}>
    <h1>Admin Login</h1>
        <h4>Admin name</h4>
        <input type="text" />
        <h4>Password</h4>
        <input type="password" /> <br />
        <p className={styles.errorMsg}>Enter password is wrong</p>
        <button className={styles.subBtn}>Login</button>
    </div>
    </div>
    </>
}
export default AdminLogin;