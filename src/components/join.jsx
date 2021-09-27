import { useState, useEffect, useContext } from 'react'
import emailjs from 'emailjs-com'
import { Header } from './header'
import JsonData from '../data/data.json'
//import { Redirect } from 'react-router-dom';
import mainContext from './mainContext'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Join = (props) => {
// eslint-disable-next-line no-unused-vars
const { loadingState, setLoadingState } = useContext(mainContext)
const [{ name, email, message }, setState] = useState(initialState)
const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoadingState(true);
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_ucfn33t', 'template_j96r06f', e.target, 'user_pRDu9WW2WtncTMklajrID'
      )
      .then(
        (result) => {
          console.log(result.text)          
          clearState()
          setLoadingState(false) 
          window.open('/#/confirm')
        },
        (error) => {
          console.log(error.text)

          alert('Ocorreu um erro. Tente novamente mais tarde')
        }
      )
  }
  return (
    <div>
     <Header data={landingPageData.Header} />
      <div id='join'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='section-title'>
                <h2>Inscreva-se</h2>
                <p>
                  Por favor, preencha TODOS os campos do formulário abaixo para realizar sua inscrição.
                </p>
              </div>
              <form name='sentMessage' validate='true' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nome Social'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='phone'
                        name='phone'
                        className='form-control'
                        placeholder='Telefone (Whatsapp)'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='cpf'
                        name='cpf'
                        className='form-control'
                        placeholder='CPF'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                   <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='escolaridade'
                        name='escolaridade'
                        className='form-control'
                        placeholder='Escolaridade'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='profissao'
                        name='profissao'
                        className='form-control'
                        placeholder='Profissão'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar Inscrição
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}