import React from 'react';
import emailjs from 'emailjs-com';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { BiMailSend } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

interface ContactProps {
  history: any,
}

export default class Contact extends React.Component<ContactProps, {}> {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    mensagemErro: '',
    errorName: false,
    errorEmail: false,
    errorPhone: false,
    errorMessage: false,
    type: '',
  };

  sendEmail = (e: any) => {
    const {
      name,
      email,
      phone,
      message, 
    } = this.state;

    e.preventDefault();
    
    if (name === '' || email === '' || phone === '' || message === '') {
      if (name === '') {
        this.setState({ errorName: true });
      } else this.setState({ errorName: false });

      if (email === '') {
        this.setState({ errorEmail: true });
      } else this.setState({ errorEmail: false });

      if (phone === '') {
        this.setState({ errorPhone: true });
      } else this.setState({ errorPhone: false });

      if (message === '') {
        this.setState({ errorMessage: true });
      } else this.setState({ errorMessage: false });

      this.setState({ 
        mensagemErro: 'Existem campos que não foram preenchidos',
        type: 'error',
      });

      setTimeout(() => {
        this.setState({ mensagemErro: '' });
      }, 4000);
    } else {
      const userID: any = process.env.REACT_APP_USER_ID;
      const templateID: any = process.env.REACT_APP_TEMPLATE_ID;
      const serviceID: any = process.env.REACT_APP_SERVICE_ID;
      try {
      emailjs.sendForm(
        serviceID,
        templateID,
        e.target,
        userID,
        );
        e.target.reset();
      } catch (error: any) {
        global.alert(error.message);
      }
      
      this.setState({ 
        name: '',
        email: '',
        phone: '',
        message: '',
        errorName: false,
        errorEmail: false,
        errorPhone: false,
        errorMessage: false,
        type: 'ok',
       });
       this.setState({ mensagemErro: 'E-mail enviado! Em breve, responderemos o mais rápido possível!' });

      setTimeout(() => {
        this.setState({ mensagemErro: '' });
      }, 4000);
    }
  }

  render() {
    const {
      name,
      email,
      phone,
      message,
      mensagemErro,
      errorName,
      errorEmail,
      errorPhone,
      errorMessage,
      type,
    } = this.state;
    const { history } = this.props;
    return (
      <div className="form_wrapper flex flex-col relative sm:pb-14">
        <img
          src={require('../images/h2.png')}
          alt=""
          className="opacity-40 absolute h-full w-full object-cover"
        />
        <Nav
          img=''
          color="white"
          history={ history }
        />
        <Header img="me-squad.png" />
        <p className="font-aboreto text-4xl sm:text-5xl pt-10 md:text-6xl md:pt-0 text-black w-full text-center z-20">CONTATO</p>
        <div className="flex flex-col justify-center">
          <h2 className="w-full text-center flex justify-center mt-4 z-20 mb-10">
            <span className="w-10/12 sm:w-1/2 md:w-1/2">
              Envie uma mensagem para nós preenchendo os campos abaixo e nós responderemos sua mensagem o mais rápido possível
            </span>
          </h2>
          <div className="flex items-center justify-center z-20">
            <form onSubmit={this.sendEmail} className="grid grid-cols-3 w-10/12 sm:w-1/2 md:w-1/2 pr-5">
              <label
                className={`w-full text-left py-2 ${errorName ? 'text-red-500' : ''}`}
                htmlFor="from_name"
              >
                Nome *
              </label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                value={name}
                onChange={ (e) => { this.setState({ name: e.target.value }) } }
                className={`border w-full text-center col-span-2 py-1 ${errorName && 'border border-red-500' }`}
              />
              <label
                className={`w-full text-left py-2 mt-5 ${errorEmail ? 'text-red-500' : 'text-black'}`}
                htmlFor="user_email"
              >
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className={`w-full text-center py-1 mt-5 col-span-2 ${errorEmail && 'border border-red-500' }`}
                value={email}
                onChange={ (e) => { this.setState({ email: e.target.value }) } }
              />
              <label
                className={`w-full text-left py-2 mt-5 ${errorPhone ? 'text-red-500' : 'text-black'}`}
                htmlFor="phone"
              >
                Telefone *
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                className={`w-full text-center py-1 mt-5 col-span-2 ${errorPhone && 'border border-red-500' }`}
                value={phone}
                onChange={ (e) => { this.setState({ phone: e.target.value }) } }
              />
              <label
                className={`w-full text-left py-2 mt-5 ${errorMessage ? 'text-red-500' : 'text-black'}`}
                htmlFor="message"
              >
                Mensagem *
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className={`w-full text-center py-1 mt-5 col-span-2 ${errorMessage && 'border border-red-500' }`}
                value={message}
                onChange={ (e) => { this.setState({ message: e.target.value }) } }
              />
              {
                mensagemErro !== '' &&
                <div className={` flex items-center justify-center w-full col-span-3 text-center font-bold mt-8 ${type === 'ok' ? 'text-green-500' : 'text-red-500'}`}>
                  <span className="pr-3 text-3xl">
                    { type === 'ok' ? <BiMailSend /> : <VscError /> }
                  </span>
                  <span>
                    { mensagemErro }
                  </span>
                </div>
              }
              <button
                type="submit"
                value="Submit"
                className="w-full text-center py-2 col-span-3 mt-8 border bg-white hover hover:font-bold transition-colors duration-500 hover:bg-send hover:border hover:border-black mb-10 sm:mb-0"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}