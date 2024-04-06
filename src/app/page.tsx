// import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


export default function Home() {
  const ano = new Date().getFullYear()
  return (
    <>
      <main className="text-center text-[#F8F8F2] mt-20">
        <img src="/images/Robinson-Silva.png" alt="avatar: Robinson Silva" className="mx-auto rounded-md mb-6 h-40" />
        <h1 className="text-5xl mb-4">Robinson Silva</h1>

        <p className="mb-16 text-zinc-400"><a href="mailto:robinson4k@gmail.com">robinson4k@gmail.com</a></p>

        <div className="max-w-[48ch] mx-auto flex justify-between text-lg text-zinc-400 mb-20">
          <div className="mx-8">
            <a href="https://www.linkedin.com/in/robinson4k" target="_blank" rel="LinkedIn Robinson" title="LinkedIn /in/robinson4k">
              <FaLinkedin size="3rem" className="inline-block" /> /in/robinson4k
            </a>
          </div>
          <div className="mx-8">
            <a href="https://github.com/robinson4k" target="_blank" rel="GitHub Robinson" title="GitHub">
              <FaGithub size="3rem" className="inline-block" /> /robinson4k
            </a>
          </div>
          <div className="mx-8">
            <a href="https://www.instagram.com/_robinsonsilva" target="_blank" rel="Instagram Robinson" title="Instagram _robinsonsilva">
              <FaInstagram size="3rem" className="inline-block" /> _robinsonsilva
            </a>
          </div>
        </div>


        <div className="max-w-[48ch] mx-auto mb-20">
          <h2 className="text-3xl mb-6 text-zinc-200">Clientes</h2>
          <a href="https://www.instagram.com/acriliclaser" target="_blank" className="inline-block"><img src="/images/logo-acriliclaser.png" alt="logo: acriliclaser" className="h-32" /></a>
        </div>

        <div className="max-w-[48ch] mx-auto mb-20">
          <h2 className="text-3xl mb-6 text-zinc-200">Sócio proprietário</h2>
          <a href="https://app.flyzapp.com" target="_blank" className="inline-block"><img src="/images/logo-FlyZapp.png" alt="logo: FlyZapp" /></a>
        </div>

        <div className="max-w-[48ch] mx-auto">
          <h2 className="text-3xl mb-6 text-zinc-200">Projetos</h2>
          <a href="https://fundamentos-reactjs-rsa.vercel.app" target="_blank" className="inline-block text-xl text-zinc-400">
            <img src="/images/ignite-logo.svg" className="mx-auto" />
            Ignite Feed<br/>
            <small>Rocketseat</small>
          </a>
        </div>

        <footer className="text-center w-full text-[#F8F8F2] p-4 mt-8">
          © {ano} Robinson Dev - Todos os direitos reservados
        </footer>
      </main>
    </>
  );
}
