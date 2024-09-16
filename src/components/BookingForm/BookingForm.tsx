import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './BookingForm.module.scss';

interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

function BookingForm() {
  const onSubmit = (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    toast(
      `Thank you for your booking, ${values.name}! We will get in touch shortly.`
    );

    resetForm();
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    bookingDate: Yup.string().required('Required'),
    comment: Yup.string(),
  });

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Book your campervan now</h3>
      <div className={style.subtitle}>
        Stay connected! We are always ready to help you.
      </div>
      <Formik
        initialValues={{ name: '', email: '', bookingDate: '', comment: '' }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={style.formField}>
            <Field type="text" name="name" placeholder="Name*"></Field>
            <ErrorMessage
              className={style.error}
              name="name"
              component="span"
            />
          </div>
          <div className={style.formField}>
            <Field type="text" name="email" placeholder="Email*"></Field>
            <ErrorMessage
              className={style.error}
              name="email"
              component="span"
            />
          </div>
          <div className={style.formField}>
            <Field
              type="text"
              name="bookingDate"
              placeholder="Booking date*"
            ></Field>
            <ErrorMessage
              className={style.error}
              name="bookingDate"
              component="span"
            />
          </div>
          <div className={style.formField}>
            <Field
              as="textarea"
              rows={5}
              name="comment"
              placeholder="Comment"
            ></Field>
            <ErrorMessage
              className={style.error}
              name="comment"
              component="span"
            />
          </div>
          <div className={style.actions}>
            <button className="button" type="submit">
              Send
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default BookingForm;
