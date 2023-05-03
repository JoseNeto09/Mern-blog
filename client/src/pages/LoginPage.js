export default function LoginPage() {
    return(
        <form className="login">
            <h1>Login</h1>
            <input type="text" placeholder="usename" />
            <input type="password" placeholder="password" />
            <button>Login</button>
        </form>
    );
}