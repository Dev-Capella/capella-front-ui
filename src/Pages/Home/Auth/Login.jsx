import React, { useState } from "react";
import { Button } from "primereact/button";
import { useForm, Controller } from "react-hook-form";
import authService from "../../../Manager/Service/authService";
import authUtils from "../../../Manager/Utils/authUtils.js";
import { classNames } from "primereact/utils";
import ResponseStatus from "../../../Manager/ResponseStatus";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  email: "",
  password: "",
};

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setIsLoading(true);
    authService
      .loginUser(data)
      .then((result) => {
        if (result.status === ResponseStatus.SUCCESS) {
          authUtils.handleLogin(result.data);
          setIsLoading(false);
          navigate("/")
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  return (
    <div>
      <form className="p-fluid grid formgrid">
        <div className="w-full">
          {getFormErrorMessage("email")}
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email alanı zorunludur." }}
            render={({ field, fieldState }) => (
              <>
                <InputText
                  placeholder="Email adresi"
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

        <div className="mt-2 w-full">
          {getFormErrorMessage("password")}
          <Controller
            name="password"
            control={control}
            rules={{ required: "Lütfen şifreinizi giriniz." }}
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
                    "appearance-none p-3 w-full outline-none text-base mb-4 border-1":
                      fieldState.invalid,
                  })}
                />
              </>
            )}
          />
        </div>

        <Button
          label="Giriş Yap"
          className="w-full p-3 mt-3"
          style={{ borderRadius: "8px" }}
          loading={isLoading}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
        <a className="cursor-pointer font-medium block text-right mt-3">
          Şifremi Unuttum
        </a>
      </form>
    </div>
  );
}

export default Login;
