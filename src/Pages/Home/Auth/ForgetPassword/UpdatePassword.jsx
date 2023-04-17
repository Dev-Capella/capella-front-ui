import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'primereact/button'
import { useForm, Controller } from 'react-hook-form'
import authService from '../../../../Manager/Service/authService'
import { classNames } from 'primereact/utils'
import ResponseStatus from '../../../../Manager/ResponseStatus'
import { InputText } from 'primereact/inputtext'
import { Messages } from 'primereact/messages'
import { FaArrowLeft } from 'react-icons/fa'
import { Message } from 'primereact/message'
import { Link, useNavigate } from 'react-router-dom'
const defaultValues = {
  email: '',
}

function UpdatePassword() {
  const msgs1 = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSend, setIsEmailSend] = useState(false)
  const navigate = useNavigate()
  const defaultValues = {
    email: '',
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues })

  useEffect(() => {
    if (isEmailSend) {
      msgs1.current.show([
        {
          sticky: true,
          severity: 'success',
          detail:
            'Şifre sıfırlama maili gönderildi. Lütfen gelen kutunuzu veya spam(önemsiz) klasörünü kontrol edin.',
          closable: false,
        },
      ])
    }
  }, [isEmailSend])

  const onSubmit = (data) => {
    setIsLoading(true)
    authService
      .passwordReset(data)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false)
          setIsEmailSend(true)
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setIsEmailSend(false)
      })
  }
  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }
  return (
    <div className="w-full">
      <div className="flex">
        <div className="text-left" onClick={() => navigate(-1)}>
          <FaArrowLeft className="surface-300 text-4xl p-1 border-circle cursor-pointer color-black" />
        </div>
      </div>
      <p className="text-center text-2xl font-bold mt-0">Şifre yenileme</p>

      <p>Şifrenizi sıfırlamak için e-posta adresinizi giriniz.</p>
      <form className="p-fluid grid formgrid">
        {isEmailSend ? (
          <div className="col-12 md:col-12 w-full">
            <Messages ref={msgs1} />
          </div>
        ) : null}

        <div className="w-full">
          {getFormErrorMessage('email')}
          <Controller
            name="email"
            control={control}
            rules={{ required: 'E-mail alanı zorunludur.' }}
            render={({ field, fieldState }) => (
              <>
                <InputText
                  placeholder="E-posta adresi"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: 'rgb(245, 245, 245)',
                    border: '2px solid rgb(238, 238, 238)',
                  }}
                  id={field.email}
                  {...field}
                  autoFocus
                  className={classNames({
                    'appearance-none p-3 w-full outline-none text-base mb-4 border-1':
                      fieldState.invalid,
                  })}
                />
              </>
            )}
          />
        </div>

        <Button
          label="Şifre Yenile"
          className="w-full p-3 mt-3"
          style={{ borderRadius: '8px' }}
          loading={isLoading}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
      </form>
    </div>
  )
}

export default UpdatePassword
