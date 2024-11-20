"use client";

import { Components } from "@/app/Components";
import { usePostImage } from "@/app/services/queries";
import Image from "next/image";

export default function Content() {
  const { data: post_images, isLoading } = usePostImage(
    process.env.NEXT_PUBLIC_POST_SET_UP_BITCOIN_WALLET!
  );

  return (
    <Components.Main>
      <Components.H1>Configuração de Carteira Bitcoin</Components.H1>
      <Components.P>
        Neste post, vou apresentar um tutorial de como configurar uma carteira de
        Bitcoin totalmente offline. O que nunca esteve na internet não pode ser
        hackeado. Vou usar o sistema operacional Tails Linux e algumas ferramentas
        adicionais, que explicarei a seguir. Precisaremos de alguns softwares
        focados em segurança e privacidade. Vamos começar!
      </Components.P>
      <br />
      <Components.H2>Pré-requisitos:</Components.H2>
      <ul className="list-disc list-inside text-gray-600 pb-4">
        <li className="pl-4">
          <strong>
            <Components.MyLink
              name="Tails Linux"
              href="https://tails.net/install/linux/index.en.html"
            />
          </strong>
        </li>
        <li className="pl-4">
          <strong>
            Dois pendrives USB de 8GB ou mais para a instalação do Tails Linux e
            para atualizações.
          </strong>
        </li>
        <li className="pl-4">
          <strong>
            <Components.MyLink
              href="https://electrum.org/"
              name="Electrum."
            />
          </strong>
        </li>
        <li className="pl-4">
          <strong>
            <Components.MyLink
              href="https://iancoleman.io/"
              name="Ian Coleman BIP39 Tool."
            />
          </strong>
        </li>
      </ul>

      <Components.H2>Passo a Passo</Components.H2>
      <Components.H3>1. Verificação das Chaves PGP do Tails:</Components.H3>
      <Components.P>
        O Tails Linux é um sistema operacional focado em privacidade e segurança,
        que usa o Tor para navegação anônima. Ele é projetado para rodar como uma
        "live session", ou seja, ao desligar o sistema, todas as informações e
        atividades são apagadas.
      </Components.P>
      <Components.P>
        Ele também permite operações totalmente offline, ideal para o
        gerenciamento seguro de chaves privadas. Opcionalmente, oferece uma área de
        "persistência" criptografada para armazenar dados importantes de forma
        segura. Em resumo, o Tails é perfeito para quem busca um ambiente
        temporário e seguro para transações de Bitcoin.
      </Components.P>
      <Components.P>
        Ao baixar o Tails Linux, use estes comandos para verificar a integridade do
        pacote usando as chaves PGP:
        <Components.H4 className="text-lg font-semibold mt-4">
          Importe a chave pública do Tails:
        </Components.H4>
        <Components.Clipboard text="gpg --import tails-signing.key;" />
        {isLoading ? (
          <Components.Div className="w-full h-[200px] bg-gray-300 animate-pulse" />
        ) : (
          <Image
            src={post_images![0]}
            alt="command_output"
            width={800}
            height={400}
            loading="eager"
          />
        )}
        <Components.P>
          Esse comando adiciona a chave pública do Tails ao GPG, permitindo a
          verificação da assinatura oficial da imagem.
        </Components.P>
        <Components.H4 className="text-lg font-semibold mt-4">
          Verifique a assinatura da imagem:
        </Components.H4>
        <Components.Clipboard text="gpg --verify tails-signing.asc tails-signing.key" />
        {isLoading ? (
          <Components.Div className="w-full h-[200px] bg-gray-300 animate-pulse" />
        ) : (
          <Image
            src={post_images![1]}
            alt="command_output"
            width={800}
            height={400}
            loading="eager"
          />
        )}
        <Components.P>
          Esse comando verifica se a imagem baixada (`tails-amd64-6.9.img`)
          corresponde à assinatura oficial (`.sig`), confirmando sua integridade e
          origem.
        </Components.P>
      </Components.P>
      <br />

      <Components.H3>2. Instalação do Tails Linux</Components.H3>
      <Components.P>
        Para instalar o Tails Linux, siga o tutorial oficial no site do Tails:{" "}
        <Components.MyLink
          href="https://tails.net/install/linux/index.en.html"
          name="Tails Linux"
        />{" "}
        ou no YouTube:{" "}
        <Components.MyLink
          href="https://youtu.be/P6Ws6V8695Q?si=bJn8lImJGLwoxtp2"
          name="NextLevelCode"
        />
      </Components.P>
      <br />

      <Components.H3>3. Instalação da Electrum.</Components.H3>
      <Components.P>
        Para instalar a Electrum, siga o tutorial no meu canal do YouTube:{" "}
        <Components.MyLink
          href="https://youtube.com/playlist?list=PL0IrTQUjTJQakHvXR-pB-UYRsJ3a8pNaW&si=V3irXtgwqtIGtcos"
          name="NextLevelCode"
        />
      </Components.P>
      <Components.H4 className="text-lg font-semibold mt-4 pb-4 text-gray-500">
        Comandos para a verificação da integridade da Electrum:
      </Components.H4>
      <Components.Clipboard text="gpg --import ThomasV.asc" />
      <Components.Clipboard text="gpg --verify electrum-4.5.8-x86_64.AppImage.asc electrum-4.5.8-x86_64.AppImage" />
      <br />

      <Components.H3>4. Instalação da Ian Coleman BIP39 Tool:</Components.H3>
      <Components.P>
        Para instalar a Ian Coleman BIP39 Tool, siga o tutorial no meu canal do
        YouTube:{" "}
        <Components.MyLink
          href="https://youtube.com/playlist?list=PL0IrTQUjTJQakHvXR-pB-UYRsJ3a8pNaW&si=V3irXtgwqtIGtcos"
          name="NextLevelCode"
        />
      </Components.P>
      <Components.P>
        Comandos para a verificação da integridade da Ian Coleman BIP39 Tool:
      </Components.P>
      <Components.Clipboard text="gpg --import pubkey.txt" />
      <Components.Clipboard text="gpg --verify signature.txt.asc pubkey.txt" />
      <Components.Clipboard text="cat signature.txt.asc" />
        {isLoading ? (
            <Components.Div className="w-full h-[200px] bg-gray-300 animate-pulse" />
          ) : (
            <Image
              src={post_images![2]}
              alt="command_output"
              width={800}
              height={400}
              loading="eager"
            />
          )}
        <Components.P>
          Esse comando verifica se a imagem baixada (`tails-amd64-6.9.img`) corresponde à assinatura oficial (`.sig`), confirmando sua integridade e origem.
        </Components.P>
        <Components.Clipboard text="echo 129b03505824879b8a4429576e3de6951c8599644c1afcaae80840f79237695a;sha256sum bip39-standalone.html" />
        <Components.P>Se o hash estiver correto, o comando retornar o mesmo hash esperado.</Components.P>

      <Components.P>
        Se o hash estiver correto, o comando retornará um hash esperado.
      </Components.P>
      <br />

      <Components.H3>5. Mover para o pendrive.</Components.H3>
      <Components.P>
        Com tudo isso feito, vamos mover a Electrum e a Ian Coleman BIP39 para o
        pendrive. Com isso, não precisaremos de internet para usar o Tails.
      </Components.P>
      <br />

      <Components.H3>6. Configurar o Tails.</Components.H3>
      <Components.P>
        Para configurar o Tails com Electrum e Ian Coleman BIP39, siga o tutorial
        no meu canal do YouTube:{" "}
        <Components.MyLink
          href="https://youtube.com/playlist?list=PL0IrTQUjTJQakHvXR-pB-UYRsJ3a8pNaW&si=V3irXtgwqtIGtcos"
          name="NextLevelCode"
        />
      </Components.P>
      <Components.H4 className="text-lg font-semibold mt-4 pb-4 text-gray-500">
        Caso não saiba a tecla da sua BIOS, use este comando para obter detalhes da
        sua BIOS:
      </Components.H4>
      <Components.Clipboard text="sudo dmidecode -t 0" />
      <Components.P>
        Apos o boot do Tails, essas três entradas indicam as diferentes opções de inicialização disponíveis ao carregar o sistema operacional Tails 6.9 a partir de um pendrive ou outro dispositivo:
      </Components.P>
       {isLoading ? (
          <Components.Div className="w-full h-[200px] bg-gray-300 animate-pulse" />
        ) : (
          <Image
            src={post_images![3]}
            alt="command_output"
            width={800}
            height={400}
            loading="eager"
          />
        )}

      <ul className="list-disc list-inside text-ellipsis text-gray-600">
        <li className=" pl-4">Tails 6.9</li>
        {'  '}<Components.P>Essa é a opção padrão para iniciar o Tails. Ela inicia o sistema em um ambiente seguro, utilizando o Tor para navegação anônima e mantendo todas as configurações padrão do sistema.</Components.P>
        <li className="pl-4">Tails 6.9 (Troubleshooting Mode)</li>
        <Components.P>Essa opção inicializa o Tails em um modo de solução de problemas (troubleshooting). É útil para diagnosticar e corrigir problemas, como drivers de hardware incompatíveis. Geralmente, esse modo desativa recursos avançados, como a aceleração de gráficos, para aumentar a compatibilidade com dispositivos problemáticos.</Components.P>
        <li className="pl-4">Tails 6.9 (External Hard Disk)</li>
        <Components.P>Essa entrada é usada quando o Tails está instalado ou armazenado em um disco rígido externo. Ao selecionar essa opção, o sistema inicializa diretamente do disco externo em vez de outros dispositivos, como um pendrive ou CD.</Components.P>
      </ul>
      <br />
      <Components.H3>7. Finalização.</Components.H3>
      <Components.P>
        Com isso, seu sistema está pronto. Você pode usar sua carteira de Bitcoin.
        Nenhum software é infalível, então saiba o que está fazendo. Se gostou do
        conteúdo, deixe um like e seu comentário. Isso nos ajuda a
        crescer e ensinar mais pessoas.
      </Components.P>
    </Components.Main>
  );
}
