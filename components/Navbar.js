import Link from "next/link"
import Image from "next/image"
import $ from 'jquery'

if (typeof window != 'undefined') {
  $('.navbar-burger').on('click', function() {
    $(this).toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  })

  $('.has-dropdown .navbar-link').on('click', function() {
    $('.navbar-dropdown').toggleClass('is-hidden-mobile')
  })
}

const Navbar = () => {
  return(
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item ml-5" href="">
          <Image src="/white-logo.png" alt="belcor Logo" width="1000" height="1000" />
        </Link>

        <Link href="" role="button" className="navbar-burger mt-3" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="" className=" navbar-item is-hidden-mobile">
            INÍCIO
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link href="" className="navbar-link">
              PROJETOS
            </Link>
            <div className="navbar-dropdown is-hidden-mobile">
              <Link href="" className="navbar-item"><i className="arrow right mr-2 is-hidden-tablet" />SALAS</Link>
              <Link href="" className="navbar-item"><i className="arrow right mr-2 is-hidden-tablet" />QUARTOS</Link>
              <Link href="" className="navbar-item"><i className="arrow right mr-2 is-hidden-tablet" />COZINHAS E VARANDAS</Link>
              <Link href="" className="navbar-item"><i className="arrow right mr-2 is-hidden-tablet" />ÁREA DE SERVIÇO E LAVANDERIAS</Link>
              <Link href="" className="navbar-item"><i className="arrow right mr-2 is-hidden-tablet" />BANHEIROS E LAVABOS</Link>
              <Link href="" className="navbar-item"><i className="arrow right mr-2 is-hidden-tablet" />CORPORATIVOS E ESCRITORIOS</Link>
            </div>
          </div>
          <Link href="" className="navbar-item">
            DEPOIMENTOS
          </Link>
          <Link href="" className="navbar-item">
            SOBRE NÓS
          </Link>
          <Link href="" className="navbar-item">
            CONTATO
          </Link>
          <div className="navbar-item">
            <div className="buttons">
              <Link href="" className="button is-fullwidth">ORÇAMENTO</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;