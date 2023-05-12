import Image from "next/image";
import Link from "next/link";

const WhatsappButton = () => {
  return(
    <Link href="/" className="button is-rounded is-pulled-right whatsapp-button">
      <Image src="/whatsapp-icon.svg" width="32" height="32" />
      <h1 className="title is-5 ml-3 has-text-white">FAÇA SEU ORÇAMENTO AGORA!</h1>
    </Link>
  )
}

export default WhatsappButton;