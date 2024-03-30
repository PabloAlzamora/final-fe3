
import { useDentistState } from "../utils/global.context"
import './Footer.css'
const Footer = () => {
  const{state}=useDentistState()
  return (
    <footer className={state.theme }>
        <img src="/images/DH.png" alt='DH-logo' />
        <img className='icon'src="/images/ico-facebook.png" alt='logo Facebook' />
        <img className='icon'src="/images/ico-instagram.png" alt='logo Instagram' />
        <img className='icon'src="/images/ico-tiktok.png" alt='logo Tiktok' />
        <img className='icon'src="/images/ico-whatsapp.png" alt='logo Whatsapp' />
       
    </footer>
  )
}

export default Footer
