import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { useForm, Controller } from "react-hook-form";
import authService from "../../../Manager/Service/authService";
import { classNames } from "primereact/utils";
import ResponseStatus from "../../../Manager/ResponseStatus";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useParams,useNavigate } from "react-router";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";
const defaultValues = {
  name: "",
  lastname: "",
  password: "",
  kvkk: false,
};

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifiedToken, setIsVerifiedToken] = useState(false);
  const msgs1 = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const defaultValues = {
    firstName: "",
    lastName: "",
    password: "",
    kvkk: false,
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setIsLoading(true);
    authService
      .registerUser(data,params.userId)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false);
          navigate("/login")
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <small className="p-error text-left">{errors[name].message}</small>
      )
    );
  };
  useLayoutEffect(() => {
    const verifyData = {
      emailVerificationToken: params.token,
      userId: params.userId,
    };

    authService
      .verifyEmail(verifyData)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false);
          setIsVerifiedToken(result.data)
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    if (!isVerifiedToken) {
      msgs1.current.show([
        {
          sticky: true,
          severity: "error",
          summary: "Bir sorunla karşılaşıldı, lütfen tekrar deneyiniz.",
          closable: false,
        },
      ]);
    }
  }, []);

  return (
    <>
      {isVerifiedToken ? (
        <div className="w-full">
          <h2 className="text-left ">Üyeliğinizi tamamlayın</h2>
          <p className="text-left text-sm">
            Üyeliğinizi tamamlamak için aşağıdaki bilgileri doldurunuz.
          </p>
          <form className="p-fluid grid formgrid">
            <div className="flex gap-5">
              <div className="flex-1 mb-4 text-left">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "Ad alanı zorunludur." }}
                  render={({ field, fieldState }) => (
                    <>
                      <InputText
                        placeholder="Ad"
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "rgb(245, 245, 245)",
                          border: "2px solid rgb(238, 238, 238)",
                        }}
                        id={field.firstName}
                        {...field}
                        autoFocus
                        className={classNames({
                          "appearance-none w-full outline-none text-base mb-4 border-1":
                            fieldState.invalid,
                        })}
                      />
                    </>
                  )}
                />
                {getFormErrorMessage("firstName")}
              </div>
              <div className="flex-1 mb-4 text-left">
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Soyad alanı zorunludur." }}
                  render={({ field, fieldState }) => (
                    <>
                      <InputText
                        placeholder="Soyad"
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "rgb(245, 245, 245)",
                          border: "2px solid rgb(238, 238, 238)",
                        }}
                        id={field.lastName}
                        {...field}
                        autoFocus
                        className={classNames({
                          "appearance-none w-full  outline-none text-base mb-4 border-1":
                            fieldState.invalid,
                        })}
                      />
                    </>
                  )}
                />
                {getFormErrorMessage("lastName")}
              </div>
            </div>

            <Controller
              name="password"
              control={control}
              rules={{ required: "Şifre alanı zorunludur." }}
              render={({ field, fieldState }) => (
                <>
                  <InputText
                    type="password"
                    placeholder="Şifre"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "rgb(245, 245, 245)",
                      border: "2px solid rgb(238, 238, 238)",
                    }}
                    id={field.password}
                    {...field}
                    autoFocus
                    className={classNames({
                      "appearance-none p-3 col-12 w-full outline-none text-base mb-4 border-1":
                        fieldState.invalid,
                    })}
                  />
                </>
              )}
            />
            {getFormErrorMessage("password")}
            <div className="w-full flex align-items-center justify-content-center">
              <Controller
                name="kvkk"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Checkbox
                      id={field.kvkk}
                      onChange={(e) => field.onChange(e.checked)}
                      checked={field.value}
                      autoFocus
                      className={classNames({
                        "appearance-none p-3 w-full outline-none text-base mb-4 border-1":
                          fieldState.invalid,
                      })}
                    />
                  </>
                )}
              />
              <p className="text-xs text-left px-3">
                Önemli kampanyalardan haberdar olmak için{" "}
                <span className="font-medium cursor-pointer">Rıza Metni</span>{" "}
                kapsamında elektronik ileti almak istiyorum.
              </p>
            </div>
            <Button
              label="Üye Ol"
              className="w-full p-3 mt-3"
              style={{ borderRadius: "8px" }}
              loading={isLoading}
              onClick={handleSubmit((data) => onSubmit(data))}
            />
            <p className="w-full text-left text-xs line-height-2">
              Kişisel verileriniz,{" "}
              <span className="cursor-pointer font-medium">
                {" "}
                Aydınlatma Metni{" "}
              </span>{" "}
              kapsamında işlenmektedir. “Üye ol” veya “Sosyal Hesap”
              butonlarından birine basarak{" "}
              <span className="cursor-pointer font-medium">
                {" "}
                Üyelik Sözleşmesi
              </span>
              ’ni,{" "}
              <span className="cursor-pointer font-medium">Rıza Metni</span>
              ’ni,{" "}
              <span className="cursor-pointer font-medium">
                Çerez Politikası
              </span>
              ’nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
            </p>
          </form>
        </div>
      ) : (
        <div className="col-12 md:col-12 w-full">
          <Messages ref={msgs1} />
          <Button
            label="Anasayfa"
            className="w-full p-3 mt-3"
            style={{ borderRadius: "8px" }}
            loading={isLoading}
            onClick={handleSubmit((data) => onSubmit(data))}
          />
        </div>
      )}
    </>
  );
}

export default Register;
