import "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppForm from "../WhatsappForm";

export default function Contato() {
  return (
    <>
      <section id="contato" className="contato">
        <div className="contato-container">
          {/* <WhatsAppForm /> */}
          <div className="contato-content">
            <div className="social-content">
              <h2 className="social-title">Nosso Contato</h2>
              <article className="contato-informacoes">
                <a className="contato-item" href="tel:+557131992109">
                 <div className="button"><LocalPhoneIcon /></div>(71) 3199-2109
                </a>
                <a
                  className="contato-item"
                  href="mailto:contatos@dwsolutions.com.br"
                >
                  <div className="button"><EmailIcon /></div>
                  contato@dwsolutions
                </a>
              </article>
              <div className="social-media">
              <h2 className="social-title">Nossas redes sociais</h2>
                <div className="social-items">
                <a className="button" href="">
                  <InstagramIcon />
                </a>
                <a className="button" href="">
                  <FacebookIcon />
                </a>
                </div>
              </div>
            </div>
            <iframe
              className="endereco-maps"
              style={{ filter: "var(--invert)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.3152589835986!2d-38.397825372436536!3d-12.802478492451216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716150c7af02927%3A0x99b492e80fe0b94e!2sDW%20Solutions%20Internet%20Banda%20Larga!5e0!3m2!1spt-BR!2sbr!4v1694290886580!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
