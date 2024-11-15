/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import { css, Theme, useTheme } from "@emotion/react";
import Button from "../Button/Button";
import Toggle from "../Toggle/Toggle";
import { FormLabel } from "../FormLabel/FormLabel";

type FormData = {
  title: string;
  content: string;
  author: string;
};

const fieldWrapperStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const buttonsWrapper = css({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 32,
  "@media (min-width: 768px)": {
    justifyContent: "space-between",
  },
});

const successMessagesStyle = (theme: Theme) =>
  css({
    color: "green",
    marginTop: "16px",
    fontSize: theme.fontSizes.helper,
  });

const FormComponent: React.FC = () => {
  const [isAuthorEditable, setIsAuthorEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const defaultAuthor = "Vorname Nachname"; // NOTE: this would be the user's name

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      content: "",
      author: defaultAuthor,
    },
  });

  const titleValue = watch("title");

  const onSubmit = (data: FormData) => {
    if (!isAuthorEditable) {
      // make sure to enforce the default value
      setValue("author", defaultAuthor);
    }
    localStorage.setItem("formData", JSON.stringify(data));
    setSuccessMessage(true);
  };

  const theme = useTheme();

  return (
    <form
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: 26,
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2
        css={{
          fontSize: theme.fontSizes.h4,
          fontWeight: 500,
          marginBottom: "26px",
          color: theme.colors.primary,
        }}
      >
        Neues Update erstellen
      </h2>
      {/* Title Field */}
      <div css={fieldWrapperStyle}>
        <FormLabel htmlFor="title" label="Titel" />
        <FormInput
          name="title"
          label="Titel"
          register={register("title", { required: "Titel ist erforderlich" })}
          error={errors.title?.message}
          maxLength={100}
          charCount={titleValue?.length}
        />
      </div>
      {/* Content Field */}
      <div css={fieldWrapperStyle}>
        <FormLabel htmlFor="content" label="Deine Neuigkeiten" />
        <FormInput
          name="content"
          label="Deine Neuigkeiten"
          register={register("content")}
          type="textarea"
          placeholder="Bitte schreibe ein paar Worte zu deinem Update."
        />
      </div>
      {/* Author Field */}
      <div css={fieldWrapperStyle}>
        <div css={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div css={{ display: "flex", alignItems: "center", gap: 26 }}>
            <FormLabel htmlFor="author" label="Absender" />
            <Toggle
              isToggled={isAuthorEditable}
              onToggle={() => {
                setIsAuthorEditable((prev) => {
                  if (prev) {
                    setValue("author", defaultAuthor);
                  }
                  return !prev;
                });
              }}
              label={"Absender ändern"}
            />
          </div>
          <p>
            Hier hast du die Option, das Update unter einem anderen Namen zu
            veröffentlichen.
          </p>
          <span
            css={{
              fontSize: theme.fontSizes.helper,
              marginBottom: -8,
              color: theme.colors.helper,
              fontWeight: "bold",
            }}
          >
            Absender
          </span>
        </div>
        <FormInput
          name="author"
          label=""
          register={register("author")}
          placeholder="Vorname Nachname"
          disabled={!isAuthorEditable}
        />
      </div>
      <div css={buttonsWrapper}>
        <Button variant="outline" label={"Abbrechen"} />
        <Button variant="primary" label={"Entwurf speichern"} />
        <Button variant="secondary" label={"Update veröffentlichen"} />
      </div>
      {successMessage && (
        <p css={successMessagesStyle(theme)}>
          Entwurf erfolgreich gespeichert!
        </p>
      )}
    </form>
  );
};

export default FormComponent;
