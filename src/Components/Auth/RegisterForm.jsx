import React from "react";

function RegisterForm() {
  return (
    <div className="w-full">
      <form className="p-fluid grid formgrid">
        <div className="w-full">
          {getFormErrorMessage("mail")}
          <Controller
            name="mail"
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
                  id={field.mail}
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
          Kişisel verileriniz,
          <span className="font-semibold cursor-pointer">
            Aydınlatma Metni{" "}
          </span>
          kapsamında işlenmektedir. “Üye ol” veya “Sosyal Hesap” butonlarından
          birine basarak
          <span className="font-semibold cursor-pointer">
            {" "}
            Üyelik Sözleşmesi
          </span>
          ’ni,
          <span className="font-semibold cursor-pointer"> Rıza Metni</span>’ni,
          <span className="font-semibold cursor-pointer">
            {" "}
            Çerez Politikası
          </span>
          ’nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
