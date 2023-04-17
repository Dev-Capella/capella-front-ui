import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { Button } from 'primereact/button'
import { useForm, Controller } from 'react-hook-form'
import authService from '../../../../Manager/Service/authService'
import { classNames } from 'primereact/utils'
import ResponseStatus from '../../../../Manager/ResponseStatus'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { useParams, useNavigate } from 'react-router'
import { Messages } from 'primereact/messages'
import { Message } from 'primereact/message'
const defaultValues = {
  userId: '',
  resetPasswordToken: '',
  password: '',
  passwordConfirm: '',
}

function PasswordReset() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVerifiedToken, setIsVerifiedToken] = useState(false)
  const [userId, setUserId] = useState('')
  const [resetPasswordToken, setResetPasswordToken] = useState('')
  const msgs1 = useRef(null)
  const params = useParams()
  const navigate = useNavigate()
  const defaultValues = {
    userId: userId,
    resetPasswordToken: resetPasswordToken,
    password: '',
    passwordConfirm: '',
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    setIsLoading(true)
    data.userId = params.userId
    data.resetPasswordToken = params.token
    authService
      .updatePassword(data)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false)
          navigate('/login')
        }
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }
  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <small className="p-error text-left">{errors[name].message}</small>
      )
    )
  }
  useLayoutEffect(() => {
    const verifyData = {
      resetPasswordToken: params.token,
      userId: params.userId,
    }

    authService
      .verifyResetPassword(verifyData)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false)
          setIsVerifiedToken(result.data)
        }
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }, [params])
  useEffect(() => {
    if (!isVerifiedToken) {
      msgs1.current.show([
        {
          sticky: true,
          severity: 'error',
          summary: 'Bir sorunla karşılaşıldı, lütfen tekrar deneyiniz.',
          closable: false,
        },
      ])
    }
  }, [])

  return (
    <>
      {isVerifiedToken ? (
        <div className="w-full">
          <h2 className="text-left ">Şifrenizi sıfırlayın.</h2>
          <p className="text-left text-sm">
            Şifrenizi sıfırlamak için aşağıdaki bilgileri doldurunuz.
          </p>
          <form className="p-fluid grid formgrid">
            <div className="w-full mb-2">
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Şifre alanı zorunludur.' }}
                render={({ field, fieldState }) => (
                  <>
                    <InputText
                      type="password"
                      placeholder="Yeni şifre"
                      style={{
                        borderRadius: '8px',
                        backgroundColor: 'rgb(245, 245, 245)',
                        border: '2px solid rgb(238, 238, 238)',
                      }}
                      id={field.password}
                      {...field}
                      autoFocus
                      className={classNames({
                        'appearance-none p-3 col-12 w-full outline-none text-base mb-4 border-1':
                          fieldState.invalid,
                      })}
                    />
                  </>
                )}
              />
              {getFormErrorMessage('password')}
            </div>
            <div className="w-full">
              <Controller
                name="passwordConfirm"
                control={control}
                rules={{ required: 'Şifre alanı zorunludur.' }}
                render={({ field, fieldState }) => (
                  <>
                    <InputText
                      type="password"
                      placeholder="Yeni şifreyi doğrulayın"
                      style={{
                        borderRadius: '8px',
                        backgroundColor: 'rgb(245, 245, 245)',
                        border: '2px solid rgb(238, 238, 238)',
                      }}
                      id={field.passwordConfirm}
                      {...field}
                      autoFocus
                      className={classNames({
                        'appearance-none p-3 col-12 w-full mt-3 outline-none text-base mb-4 border-1':
                          fieldState.invalid,
                      })}
                    />
                  </>
                )}
              />
              {getFormErrorMessage('passwordConfirm')}
            </div>

            <Button
              label="Şifre oluştur"
              className="w-full p-3 mt-3"
              style={{ borderRadius: '8px' }}
              loading={isLoading}
              onClick={handleSubmit((data) => onSubmit(data))}
            />
          </form>
        </div>
      ) : (
        <div className="col-12 md:col-12 w-full">
          <Messages ref={msgs1} />
          <Button
            label="Anasayfa"
            className="w-full p-3 mt-3"
            style={{ borderRadius: '8px' }}
            loading={isLoading}
            onClick={handleSubmit((data) => onSubmit(data))}
          />
        </div>
      )}
    </>
  )
}

export default PasswordReset
