import './Form.scss';

const Form = () => {
  return (
    <form className='form'>
      <div className='form__container'>
        <label>Ім'я</label>
        <input required />
      </div>
      <div className='form__container'>
        <label>Прізвище</label>
        <input required />
      </div>
      <div className='form__container'>
        <label>Номер телефону</label>
        <input required />
      </div>
      <div className='form__container'>
        <label>Адреса</label>
        <input required />
      </div>
      <div className='form__container'>
        <label>Коментар до замовлення</label>
        <input />
      </div>
      <button className='form__button' type='submit'>Оформити замовлення</button>
    </form>
  );
};

export default Form;