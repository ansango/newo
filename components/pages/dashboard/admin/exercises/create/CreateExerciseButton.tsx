import ButtonSubmit from "components/common/Button/ButtonSubmit";

const CreateExerciseButton = () => {
  const loading = false;
  return <ButtonSubmit label="Crear ejercicio" isLoading={loading} />;
};

export default CreateExerciseButton;
