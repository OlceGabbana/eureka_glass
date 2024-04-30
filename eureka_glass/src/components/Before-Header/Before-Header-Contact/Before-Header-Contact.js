import './Before-Header-Contact.scss';
import BHeaderCElem from './Before-Header-Contact-Elem/Before-Header-Contact-Elem';
import variables from '../../variables.modules.scss';

const BHeaderContact = () => {
  return (
    <div className="bheader-contact">
      <BHeaderCElem/>
      <BHeaderCElem/>
      <BHeaderCElem/>
    </div>
  )
}

export default BHeaderContact;