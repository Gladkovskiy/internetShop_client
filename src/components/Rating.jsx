import React from 'react'
import * as yup from 'yup'
import {Formik, ErrorMessage} from 'formik'
import {Form, Button} from 'react-bootstrap'

const Rating = ({userId, deviceId, addRating}) => {
  const validationSchema = yup.object().shape({
    rating: yup
      .number()
      .integer('Число дожно быть целым')
      .typeError('Должно быть цифрой')
      .min(0, 'Минимальное значение 0')
      .max(5, 'Максимальное значение 5')
      .required('Обязательно'),
  })

  return (
    <Formik
      initialValues={{
        rating: '',
      }}
      validateOnChange
      validationSchema={validationSchema}
      onSubmit={values => {
        addRating({userId, deviceId, rate: values.rating})
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <Form className="d-flex justify-content-center w-75 align-items-center m-auto">
          <Form.Group>
            <Form.Label>Оценка товару</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              min="0"
              max="5"
              step="1"
              isInvalid={errors.rating}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rating}
            />
            <ErrorMessage
              component="p"
              name="rating"
              style={{color: 'red', position: 'absolute'}}
            />
          </Form.Group>
          <Button
            className="ms-2 w-50 h-50 align-self-end"
            disabled={!isValid || !dirty}
            onClick={handleSubmit}
            type="submit"
          >
            Оценить товар
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default Rating
