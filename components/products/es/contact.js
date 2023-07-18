import 'react-phone-input-2/lib/style.css'

import axios from "axios"
import PhoneInput from 'react-phone-input-2'
import { Component } from 'react'
import Notification from "../../utils/notification"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      phoneCountry: 'pa',
      // Errors
      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorCompany: false,
      errorPhone: false,
      errorMessage: false,
      emailUpdates: false,
      successSend: false,
      errorSend: false,
      disableButton: false,
    }
  }

  handleFirstName = (e) => {
    this.setState({ firstName: e.target.value, errorFirstName: false });
  }

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value, errorLastName: false });
  }

  handleCompany = (e) => {
    this.setState({ company: e.target.value, errorCompany: false });
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value, errorEmail: false });
  }

  handlePhone = (newPhone) => {
    this.setState({ phone: `+${newPhone}`, errorPhone: false });
  }

  handleMessage = (e) => {
    this.setState({ message: e.target.value, errorMessage: false });
  }

  validateForm = (e) => {
    e.preventDefault();
    let formValid = true;

    // Validate Name
    if (!this.state.firstName){
      this.setState({ errorFirstName: true });
      formValid = false;
    }
    // Validate Last Name
    if (!this.state.lastName){
      this.setState({ errorLastName: true });
      formValid = false;
    }
    // Validate Company
    if (!this.state.company){
      this.setState({ errorCompany: true });
      formValid = false;
    }
    // Validate Email
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(this.state.email)){
      this.setState({ errorEmail: true });
      formValid = false;
    }

    // Validate phone number
    if(!this.state.phone) {
      this.setState({ errorPhone: true });
      formValid = false;
    }

    // Validate Message
    if (!this.state.message){
      this.setState({ errorMessage: true });
      formValid = false;
    }

    if(formValid && !this.state.disableButton){
      this.sendEmail()
    }
  }

  clearData(){
    this.setState({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      phoneCountry: 'pa',
      // Errors
      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorCompany: false,
      errorPhone: false,
      errorMessage: false,
      emailUpdates: false,
      successSend: false,
      errorSend: false,
      disableButton: false,
    })
  }

  sendEmail() {
    var self = this;
    this.setState({ disableButton: true })
    const formData = new FormData();
    formData.append('first-name', this.state.firstName)
    formData.append('last-name', this.state.lastName)
    formData.append('company', this.state.company)
    formData.append('email', this.state.email)
    formData.append('phone-number', this.state.phone)
    formData.append('message', this.state.message)

    axios
      .post("https://getform.io/f/f409359c-e023-4607-a179-2e94d94b8cc7", formData)
      .then(function (response) {
        console.log(response);
        self.clearData()
        self.setState({ disableButton: false, successSend: true })
      })
      .catch(function (response) {
        console.error(response);
        self.setState({ disableButton: false, errorSend: true })
      })
  }

  render() {
    return (
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" id="contact-form">
        {this.state.successSend ? 
          <Notification 
            title="Solicitud enviada con éxito"
            description="Nuestro equipo de soporte se comunicará contigo, muchas gracias"
            type="success"
          />
          :
          ''
        }
        {this.state.errorSend ? 
          <Notification 
            title="Error al enviar cotizacióne"
            description="Se generó un error al enviar la solicitud. ¡Intente de nuevo!"
            type="error"
          />
          :
          ''
        }
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contáctanos</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Comencemos una conversación sobre su próxima Crypto-Venture. <br/>Complete el formulario de contacto a continuación.
            </p>
          </div>
          <div className="mt-12">
            <form  method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-bm1-500 focus:border-bm1-500 border-gray-300"
                    value={this.state.firstName}
                    onChange={name => this.handleFirstName(name)}
                    required
                  />
                  <span className={`
                    ${!this.state.errorFirstName ? 'hidden' : ''}
                    text-red-500 text-xs`
                  }>
                    Este campo es requerido
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-bm1-500 focus:border-bm1-500 border-gray-300"
                    value={this.state.lastName}
                    onChange={lastName => this.handleLastName(lastName)}
                    required
                  />
                  <span className={`
                    ${!this.state.errorLastName ? 'hidden' : ''}
                    text-red-500 text-xs`
                  }>
                    Este campo es requerido
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Compañía
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-bm1-500 focus:border-bm1-500 border-gray-300"
                    value={this.state.company}
                    onChange={company => this.handleCompany(company)}
                    required
                  />
                  <span className={`
                    ${!this.state.errorCompany ? 'hidden' : ''}
                    text-red-500 text-xs`
                  }>
                    Este campo es requerido
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-bm1-500 focus:border-bm1-500 border-gray-300"
                    value={this.state.email}
                    onChange={email => this.handleEmail(email)}
                    required
                  />
                  <span className={`
                    ${!this.state.errorEmail ? 'hidden' : ''}
                    text-red-500 text-xs`
                  }>
                    Correo electrónico inválido
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  Número Telefónico
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <PhoneInput
                    placeholder="Enter phone number"
                    required
                    country={this.state.phoneCountry}
                    value={this.state.phone}
                    onChange={phone => this.handlePhone(phone)}
                    inputStyle={{width: "100%", height:"100%", "borderRadius": 0}}
                    dropdownStyle={{"borderRadius": 0 }}
                    buttonStyle={{"borderRadius": 0 }}
                    containerClass="block w-full"
                    buttonClass="text-center items-center block focus:ring-bm1-500 focus:border-bm1-500 border-gray-300"
                    inputClass="px-4 py-4 w-full focus:ring-bm1-500 focus:border-bm1-500 border-gray-300"
                    
                  />
                  <span className={`
                    ${!this.state.errorPhone ? 'hidden' : ''}
                    text-red-500 text-xs`
                  }>
                    Este campo es requerido
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-bm1-500 focus:border-bm1-500 border border-gray-300"
                    value={this.state.message}
                    onChange={value => this.handleMessage(value)}
                    required
                  />
                  <span className={`
                    ${!this.state.errorMessage ? 'hidden' : ''}
                    text-red-500 text-xs`
                  }>
                    Este campo es requerido
                  </span>
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  onClick={this.validateForm}
                  disabled={this.state.disableButton}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bm1-500"
                >
                  {this.state.disableButton ? 
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    :
                    <span>Conversemos</span>
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Contact