import Header from "../components/Header";
import Login from '../components/Login';

export default function LoginPage() {
    return (
        <>
            <Header
                heading="Logar na sua conta"
                paragraph="Não tem conta ainda? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />

        </>
    )
}