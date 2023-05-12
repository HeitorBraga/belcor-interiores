import $ from 'jquery'

if (typeof window !== 'undefined' ) {
  setTimeout(function() {
    $(`.text-effect#${1}`).addClass('effect')
    var i = 1
    setInterval(function() {
      $(`.text-effect#${i}`).removeClass('effect')
      $(`.text-effect#${i}`).addClass('remove-effect')
      if (i < 3) {
        i++
      } else {
        i = 1
      }
      $(`.text-effect#${i}`).removeClass('remove-effect')
      setTimeout(function() {
        $(`.text-effect#${i}`).addClass('effect')
      },5)
      console.log(i)
    }, 3500)
  }, 100)
}

const FirstContainer = () => {
  return(
    <section className="section is-large first-container">
      <div className="container">
        <div className="has-content-vertically ml-3 pr-6">
          <h1 className="title has-text-white mb-2">Móveis Planejados</h1>
          <div id="1" className="text-effect has-text-centered">
              <h2 className="title has-text-weight-bold">
                INOVADORES
              </h2>
          </div>
          <div id="2" className="text-effect has-text-centered remove-effect">
              <h2 className="title has-text-weight-bold">
                CRIATIVOS
              </h2>
          </div>
          <div id="3" className="text-effect has-text-centered remove-effect">
            <h2 className="title has-text-weight-bold">
              CONCEITUAIS
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstContainer