import ButtonSubmit from "components/common/Button/ButtonSubmit";

const CreateExerciseButton = () => {
  const loading = true;
  return <ButtonSubmit label="Crear ejercicio" isLoading={loading} />;
};

export default CreateExerciseButton;
