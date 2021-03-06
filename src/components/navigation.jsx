import { HashLink as Link } from 'react-router-hash-link';
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link smooth className='navbar-brand page-scroll' to='/#page-top'>
          
            Treinamento em LGPD
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
  
            <li>
              <Link smooth className='page-scroll' to='/#join'>

                Inscreva-se
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
