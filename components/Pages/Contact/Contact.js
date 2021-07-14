export default function Contact() {
  return (
    <div className="contact">
      <h2 className="Title">Contactame</h2>
      <div className="contact-content">
        <div className="contact-content__item">
          <i className="fab fa-whatsapp"></i>
          <a title="+573229444460" href="tel:+573229444460">+573229444460</a>
        </div>
        <div className="contact-content__item">
          <i className="fas fa-envelope-open-text"></i>
          <a
            title={"estradamilton2001@gmail.com"}
            href="mailto:estradamilton2001@gmail.com"
            target="_self"
          >
            estradamilton2001@gmail.com
          </a>
        </div>
        <div className="contact-content__item">
          <i className="fas fa-map-marked-alt"></i>
          <div className="contact-content__address">
            <h3>Colombia</h3>
            <p>Norte de Santander Ocaña</p>
          </div>
        </div>
      </div>
    </div>
  );
}
