import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { useForm, Controller } from 'react-hook-form'
import authService from '../../../Manager/Service/authService'
import { classNames } from 'primereact/utils'
import ResponseStatus from '../../../Manager/ResponseStatus'
import { InputText } from 'primereact/inputtext'

const defaultValues = {
  mail: '',
  password: '',
}

function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const defaultValues = {
    mail: '',
    password: '',
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    setIsLoading(true)
    authService
      .loginUser(data)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false)
        }
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }
  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }
  return (
    <div className="w-full">
      <form className="p-fluid grid formgrid">
        <div className="w-full">
          {getFormErrorMessage('mail')}
          <Controller
            name="mail"
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
                  id={field.mail}
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

        <div className="mt-2 w-full">
          {getFormErrorMessage('paWssword')}
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Lütfen şifreinizi giriniz.' }}
            render={({ field, fieldState }) => (
              <>
                <InputText
                  type="password"
                  placeholder="Şifre"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: 'rgb(245, 245, 245)',
                    border: '2px solid rgb(238, 238, 238)',
                  }}
                  id={field.password}
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
          label="Kayıt Ol"
          className="w-full p-3 mt-3"
          style={{ borderRadius: '8px' }}
          loading={isLoading}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
      </form>
    </div>
  )
}

export default Register
