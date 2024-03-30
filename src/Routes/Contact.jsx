import Form from '../Components/Common/Form';
import {useDentistState} from '../Components/utils/global.context'

const Contact = () => {

  const { state } = useDentistState();

  return (
    <main className={state.theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </main>
  );
};

export default Contact;