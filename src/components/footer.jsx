import { HashLink as Link } from 'react-router-hash-link';
export const Footer = (props) => {
  
  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
         
          <br/>
           
            <Link to="/privacy">Política de Privacidade</Link>
              
          </p>
        </div>
      </div>
    </div>
  )
}
