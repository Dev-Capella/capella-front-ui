import React, { useState,useRef,useEffect } from "react";
import { Button } from "primereact/button";
import { useForm, Controller } from "react-hook-form";
import authService from "../../../Manager/Service/authService";
import { classNames } from "primereact/utils";
import ResponseStatus from "../../../Manager/ResponseStatus";
import { InputText } from "primereact/inputtext";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";
const defaultValues = {
  email: "",
};

function RegisterRequest() {
  const msgs1 = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSend, setIsEmailSend] = useState(false);
  const defaultValues = {
    email: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  useEffect(() => {
    if (isEmailSend) {
      msgs1.current.show([
        {
          sticky: true,
          severity: "success",
          detail: "Doğrulama maili gönderildi.Lütfen gelen kutunuzu veya spam(önemsiz) klasörünü kontrol edin.",
          closable: false,
        },
      ]);
    }
  }, [isEmailSend]);

  const onSubmit = (data) => {
    setIsLoading(true);
    authService
      .createregisterrequest(data)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          setIsLoading(false);
          setIsEmailSend(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsEmailSend(false);
      });
  };
  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };
  return (
    <div className="w-full">
      <form className="p-fluid grid formgrid">
        {isEmailSend ? ( 
        <div className="col-12 md:col-12 w-full">
          <Messages ref={msgs1} />
        </div>
        ) : null
        }
     
        <div className="w-full">
          {getFormErrorMessage("email")}
          <Controller
            name="email"
            control={control}
            rules={{ required: "E-mail alanı zorunludur." }}
            render={({ field, fieldState }) => (
              <>
                <InputText
                  placeholder="E-posta adresi"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "rgb(245, 245, 245)",
                    border: "2px solid rgb(238, 238, 238)",
                  }}
                  id={field.email}
                  {...field}
                  autoFocus
                  className={classNames({
                    "appearance-none p-3 w-full outline-none text-base mb-4 border-1":
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
          style={{ borderRadius: "8px" }}
          loading={isLoading}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
        <p className="w-full text-left text-xs line-height-2">
          Kişisel verileriniz,{" "}
          <span className="cursor-pointer font-medium"> Aydınlatma Metni </span>{" "}
          kapsamında işlenmektedir. “Üye ol” veya “Sosyal Hesap” butonlarından
          birine basarak{" "}
          <span className="cursor-pointer font-medium"> Üyelik Sözleşmesi</span>
          ’ni, <span className="cursor-pointer font-medium">Rıza Metni</span>
          ’ni,{" "}
          <span className="cursor-pointer font-medium">Çerez Politikası</span>
          ’nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
        </p>
      </form>
    </div>
  );
}

export default RegisterRequest;
