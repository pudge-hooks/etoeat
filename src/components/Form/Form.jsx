import './Form.scss';

const Form = () => {
  return (
    <form className="form">
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          required=""
        />
        <label for="name" class="form__label">
          Ім'я
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Surname"
          required=""
        />
        <label for="surname" class="form__label">
          Прізвище
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Number"
          required=""
        />
        <label for="number" class="form__label">
          Номер телефону
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Address"
          required=""
        />
        <label for="address" class="form__label">
          Адреса
        </label>
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Comment"
          required=""
        />
        <label for="comment" class="form__label">
          Коментар до замовлення
        </label>
      </div>
      <button className="form__button" type="submit">
        Оформити замовлення
      </button>
    </form>
  );
};

export default Form;
