import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Robinson Silva</title>

        <meta property="og:image" content="/images/Robinson-Silva.png" />
        <meta name="description" content="Eu criei este site como uma plataforma para exibir meu portfólio e compartilhar minha experiência em programação." />
        <meta name="keywords" content="dev, developer, Análise de sistemas, Programação de sistemas, Desenvolvimento de software, Engenharia de software, Linguagens de programação, Banco de dados, Arquitetura de sistemas, Testes de software, Gerenciamento de projetos, Resolução de problemas, Programação orientada a objetos, Desenvolvimento web, Segurança da informação, Sistemas distribuídos, Big data, Machine learning, Inteligência artificial, Interface do usuário (UI), Experiência do usuário (UX), Desenvolvimento ágil" />
        <meta name="author" content="Robinson Silva Amorim" />
        <meta name="language" content="pt-BR" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
