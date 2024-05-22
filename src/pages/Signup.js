import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
    return (
        <>
            <Header 
                heading="Crie já sua conta"
                paragraph="Já tem uma conta? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup />
        </>
    )
}