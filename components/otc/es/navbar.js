/* This example requires Tailwind CSS v2.0+ */
import 'react-phone-input-2/lib/style.css'

import axios from "axios"
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import PhoneInput from 'react-phone-input-2'
import { Fragment, Component } from 'react'
import { Popover, Transition, RadioGroup, Listbox } from '@headlessui/react'
import { HomeIcon, MenuIcon, XIcon, SelectorIcon } from '@heroicons/react/outline'
import NumberFormat from 'react-number-format';
import Notification from '../../utils/notification'
import Language from '../../utils/select_languague'

const navigation = [
  {
    name: 'Productos',
    href: '/es/products',
    description: 'Nuestros Productos',
    icon: HomeIcon,
  }
]

const languages = [
  {
    name: "Español",
    shortName: "es",
    icon: <Icon icon="noto-v1:flag-for-flag-spain" width={24} />,
    href: '#'
  },
  {
    name: "Inglés",
    shortName: "en",
    icon: <Icon icon="noto-v1:flag-for-flag-united-kingdom" width={24} />,
    href: '/'
  }
]

const cryptocurrencies = [
  {
    name: "BTC",
    value: "btc",
    icon: <Icon icon="cryptocurrency:btc" width={24} style={{ color: '#ef8f14' }} />,
  },
  {
    name: "ETH",
    value: "eth",
    icon: <Icon icon="cryptocurrency:eth" width={24} style={{ color: '#1e191a' }} />,
  },
  {
    name: "USDT",
    value: "usdt",
    icon: <Icon icon="cryptocurrency:usdt" width={24} style={{ color: '#4c9f7a' }} />,
  },
  {
    name: "USDC",
    value: "usdc",
    icon: <Icon icon="cryptocurrency:usdc" width={24} style={{ color: '#2072c5' }} />,
  },
  {
    name: "PAX",
    value: "pax",
    icon: <Icon icon="cryptocurrency:pax" width={24} style={{ color: '#4c9f7a' }} />,
  },
  {
    name: "XRP",
    value: "xrp",
    icon: <Icon icon="cryptocurrency:xrp" width={24} style={{ color: '#2072c5' }} />,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      wantToOptions: 'buy',
      phoneCountry: 'es',
      selectedCryptocurrency: cryptocurrencies[0],
      cryptoName: cryptocurrencies[0].name,
      cryptoAmount: '',
      errorName: false,
      errorEmail: false,
      errorPhone: false,
      errorCryptoAmount: false,
      errorSizeAmount: false,
      emailUpdates: false,
      successSend: false,
      errorSend: false,
      disableButton: false,
    }
  }

  handleName = (e) => {
    this.setState({ name: e.target.value, errorName: false });
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value, errorEmail: false });
  }

  handlePhone = (newPhone) => {
    this.setState({ phone: `+${newPhone}`, errorPhone: false });
  }

  handleWaToOptions = (option) => {
    this.setState({ wantToOptions: option });
  }

  handleSelectedCryptocurrency = (crypto) => {
    this.setState({ cryptoName: crypto.name, selectedCryptocurrency: crypto });
  }

  handleCryptoAmount = (e) => {
    this.setState({ cryptoAmount: e.formattedValue, errorCryptoAmount:false, errorSizeAmount: false });
  }

  handleEmailUpdates = (e) => {
    this.setState({ emailUpdates: !this.state.emailUpdates });
  }

  validateForm = (e) => {
    e.preventDefault();
    let formValid = true;

    // Validate Name
    if (!this.state.name){
      this.setState({ errorName: true });
      formValid = false;
    }
    // Validate Email
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(this.state.email)){
      this.setState({ errorEmail: true });
      formValid = false;
    }

    if(!this.state.phone) {
      this.setState({ errorPhone: true });
      formValid = false;
    }

    let amount = this.state.cryptoAmount.replace(",", "")
    if(!this.state.cryptoAmount) {
      this.setState({ errorCryptoAmount: true })
      formValid = false;
    } else if (parseFloat(amount) < 5000){
      console.log(parseFloat(amount))
      this.setState({ errorSizeAmount: true })
      formValid = false;
    }

    if(formValid && !this.state.disableButton){
      this.sendEmail()
    }
  }

  clearData(){
    this.setState({
      name: '',
      email: '',
      phone: '+34',
      wantToOptions: 'buy',
      phoneCountry: 'es',
      selectedCryptocurrency: cryptocurrencies[0],
      cryptoName: cryptocurrencies[0].name,
      cryptoAmount: '',
      errorName: false,
      errorEmail: false,
      errorPhone: false,
      errorCryptoAmount: false,
      errorSizeAmount: false,
      emailUpdates: false,
      disableButton: true,
      successSend: false,
      errorSend: false,
    })
  }

  sendEmail() {
    var self = this;
    this.setState({ disableButton: true })
    const formData = new FormData();
    formData.append('Name', this.state.name)
    formData.append('Email', this.state.email)
    formData.append('Phone', this.state.phone)
    formData.append('Method', this.state.wantToOptions)
    formData.append('Cryptocurrency', this.state.cryptoName)
    formData.append('Amount', `${this.state.cryptoAmount} EUR`)
    
    let update = this.state.emailUpdates ? "Yes" : "No"
    formData.append('Receive email updates', update)

    axios
      .post("https://getform.io/f/52e870c8-6076-4aef-b9d3-4dbe936224bd", formData)
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

  render () {
    return (
      <div className="relative bg-bm1-800 overflow-hidden">
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
        <div className="relative pt-6 pb-20 sm:pb-24">
          <Popover>
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/es">
                      <Image
                        src="/logo_light.png"
                        alt="Bitmotto"
                        width="191"
                        height="25"
                        className="h-1 w-auto"
                      />
                  </a>
                  <div className="md:hidden">
                    <Language  languages={languages} />
                  </div>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden md:flex justify-end md:flex-1 lg:w-0 xl:mr-16">
                  <Link href="/es/products">
                    <a
                      className=" whitespace-nowrap inline-flex items-center justify-center py-2 text-base font-medium text-white hover:text-gray-300"
                    >
                      Productos
                    </a>
                  </Link>
                  <Language languages={languages} />
                </div>
              </div>
            </nav>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Image
                          src="/logo.png"
                          alt="Bitmotto"
                          width="191"
                          height="25"
                          className="h-1 w-auto"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                      >
                        <a
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-bm1-800" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-16">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex">
                  <div>
                    <a href="#"
                      className="hidden inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                      <span
                        className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-bm2-400 rounded-full">Lo nuevo</span>
                      <span className="ml-4 text-sm">Tenemos nuevo Dashboard</span>

                      <svg className="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"/>
                      </svg>
                    </a>
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:leading-none lg:text-5xl xl:text-6xl sm:mt-5 sm:text-6xl lg:mt-6 ">
                      <span className="md:block">Trading OTC de</span>{' '}
                      <span className="md:block">grado Institucional</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Bitmotto OTC proporciona un fácil acceso a liquidez las 24 horas del día, los 7 días de la semana, a una variedad de activos digitales para transacciones de cripto a fiat y de fiat a cripto.
                    </p>
                    <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Trabajamos con:</p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-start">
                        <div className="flex justify-center px-1">
                          <Image
                              src="/bitcoin.png"
                              alt="Bitcoin"
                              width="50"
                              height="50"
                              className="h-10 w-auto"
                            />
                        </div>
                        <div className="flex justify-center px-1">
                          <Image
                            src="/ethereum.png"
                            alt="Ethereum"
                            width="50"
                            height="50"
                            className="h-10 w-auto"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <Image
                            src="/tether.png"
                            alt="USDT"
                            width="50"
                            height="50"
                            className="h-10 w-auto"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <Image
                            src="/usdcoin.png"
                            alt="USDC"
                            width="50"
                            height="50"
                            className="h-10 w-auto"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <Image
                            src="/paxos.png"
                            alt="Paxos USDP"
                            width="50"
                            height="50"
                            className="h-10 w-auto"
                          />
                        </div>
                        <div className="flex justify-center px-1">
                          <Image
                            src="/ripple.png"
                            alt="Ripple XRP"
                            width="50"
                            height="50"
                            className="h-10 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                  <form className="pt-6" method="POST">
                      <div className="space-y-6 px-10">
                        <div>
                          <h1 className="md:text-2xl font-extrabold text-gray-700">¡Comencemos!</h1>
                          <p className="text-sm text-gray-500 mt-1">Complete el formulario a continuación y nuestro equipo se pondrá en contacto con usted en breve.</p>
                        </div>
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Nombre completo
                          </label>
                          <div className="mt-1">
                            <input
                              id="fullName"
                              name="fullName"
                              type="text"
                              autoComplete="fullName"
                              value={this.state.name}
                              required
                              onChange={name => this.handleName(name)}
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bm2-400 focus:border-bm2-400 sm:text-sm"
                            />
                            <span className={`
                              ${!this.state.errorName ? 'hidden' : ''}
                              text-red-500 text-xs`
                            }>
                              Este campo es requerido
                            </span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo Electrónico
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={this.state.email}
                              autoComplete="email"
                              required
                              onChange={email => this.handleEmail(email)}
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bm2-400 focus:border-bm2-400 sm:text-sm"
                            />
                            <span className={`
                              ${!this.state.errorEmail ? 'hidden' : ''}
                              text-red-500 text-xs`
                            }>
                              Correo electrónico inválido
                            </span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Número Telefónico
                          </label>
                          <PhoneInput
                            placeholder="Enter phone number"
                            required
                            country={this.state.phoneCountry}
                            value={this.state.phone}
                            onChange={phone => this.handlePhone(phone)}
                            inputStyle={{width: "100%", "borderRadius": "0"}}
                            dropdownStyle={{"borderRadius": 0 }}
                            buttonStyle={{"borderRadius": 0 }}
                            inputClass="appearance-none block w-full border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bm2-400 focus:border-bm2-400  sm:text-sm"
                          />
                          <span className={`
                              ${!this.state.errorPhone ? 'hidden' : ''}
                              text-red-500 text-xs`
                          }>
                              Este campo es requerido
                          </span>
                        </div>

                        <div>
                          <RadioGroup value={this.state.wantToOptions} onChange={option => this.handleWaToOptions(option)}>
                            <RadioGroup.Label className="block text-sm font-medium text-gray-600">Yo quiero</RadioGroup.Label>
                            <span className="relative w-full z-0 inline-flex shadow-sm text-center">
                              <RadioGroup.Option value="buy" className="relative w-1/2 inline-flex items-center cursor-pointer">
                                {({ checked }) => (
                                  <span
                                    className={`
                                      ${checked ? 'bg-gray-400 border-gray-400 text-white' : 'text-gray-700'}
                                      w-full text-center items-center py-2 border border-gray-400 bg-white text-sm font-medium`
                                    }
                                  >
                                    Comprar
                                  </span>
                                )}
                              </RadioGroup.Option>
                              <RadioGroup.Option value="sell" className="relative w-1/2 inline-flex items-center cursor-pointer">
                                {({ checked }) => (
                                  <span 
                                    className={`
                                      ${checked ? 'bg-gray-400 border-gray-400 text-white' : 'text-gray-700'}
                                      w-full text-center  py-2 border border-gray-400 bg-white text-sm font-medium`
                                    }
                                  >
                                    Vender
                                  </span>
                                )}
                              </RadioGroup.Option>
                            </span>
                          </RadioGroup>
                        </div>

                        <div>
                          <label htmlFor="cryptocurrency" className="block text-sm font-medium text-gray-700">
                            Activo Digital
                          </label>
                          <Listbox 
                            value={this.state.selectedCryptocurrency}
                            onChange={crypto => this.handleSelectedCryptocurrency(crypto)}
                          >
                            <div className="relative mt-1 w-full border-gray-500">
                              <Listbox.Button className="relative w-full pl-3 pr-10 text-left appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bm2-400 focus:border-bm2-400 sm:text-sm">
                                <span className="block truncate w-full">
                                  <div className="flex items-center">
                                    <span className=" items-center px-3">
                                      {this.state.selectedCryptocurrency.icon}
                                    </span>
                                    <span className="items-center">
                                      {this.state.selectedCryptocurrency.name}
                                    </span>
                                  </div>
                                </span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute w-full z-50 h-40 py-1 mt-1 overflow-auto text-base bg-white max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {cryptocurrencies.map((crypto, cryptoIdx) => (
                                    <Listbox.Option
                                      key={cryptoIdx}
                                      className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                        cursor-pointer select-none relative py-2 pl-4 pr-4`
                                      }
                                      value={crypto}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`${
                                              selected ? 'font-medium text' : 'font-normal'
                                            } block truncate`}
                                          >
                                            <div className="flex items-center">
                                              <span className=" items-center pr-2">
                                                {crypto.icon}
                                              </span>
                                              <span className="items-center">
                                                {crypto.name}
                                              </span>
                                            </div>
                                          </span>
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>

                        <div>
                          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Monto de { this.state.selectedCryptocurrency.name } en EUR</label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <NumberFormat
                              thousandSeparator={true}
                              onValueChange={amount => this.handleCryptoAmount(amount)}
                              className="focus:ring-bm2-400 focus:border-bm2-400 block w-full pr-12 sm:text-sm border-gray-300"
                              value={this.state.cryptoAmount}
                            />

                            <div className="absolute inset-y-0 right-0 w-20 flex items-center text-center border border-gray-300">
                              <span className="text-sm font-medium text-gray-700 px-2">
                                <div className="flex items-center">
                                  <span className=" items-center pr-1">
                                    <Icon icon="ic:baseline-euro-symbol" width={24} />
                                  </span>
                                  <span className="items-center">
                                    EUR
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <span className="text-indigo-500 text-xs">Monto mínimo: €5000.00</span><br/>
                          <span className={`
                              ${!this.state.errorCryptoAmount ? 'hidden' : ''}
                              text-red-500 text-xs`
                            }>
                              Este campo es requerido
                          </span>
                          <span className={`
                              ${!this.state.errorSizeAmount ? 'hidden' : ''}
                              text-red-500 text-xs`
                            }>
                              Recuerde que el monto mínimo es €5000.00
                          </span>
                        </div>

                        <hr />
                        
                        <div className="pb-4">
                          <fieldset>
                            <legend className="sr-only">Notifications</legend>
                            <div className="relative flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="comments"
                                  aria-describedby="comments-description"
                                  name="comments"
                                  type="checkbox"
                                  checked={this.state.emailUpdates}
                                  onChange={updates => this.handleEmailUpdates(updates)}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-xs">
                                <label htmlFor="comments" className="text-gray-500">
                                Suscríbase para recibir actualizaciones por correo electrónico de Bitmotto sobre sus productos, eventos y recursos. Usted puede optar por cancelar la susbcripción en cualquier momento.
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div className="flex justify-end px-4 py-3 pb-5 sm:px-6">
                        <button
                          onClick={this.validateForm}
                          disabled={this.state.disableButton}
                          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          {this.state.disableButton ? 
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            :
                            <span>Cotizar</span>
                          }
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default NavBar;