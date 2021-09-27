import ParticlesBg from "particles-bg";
import { HashLink as Link } from 'react-router-hash-link';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} color={["#55CDFC", "#55CDFC", "#FFFFFF", "#F7A8B8", "#F7A8B8"]}/>
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <h2>
                  {props.data ? props.data.subtitle : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <Link smooth className='btn btn-custom btn-lg page-scroll' to='/#join'>
                  Inscreva-se
                </Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
