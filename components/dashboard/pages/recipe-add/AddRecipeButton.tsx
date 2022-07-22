// import { selectOnAddMyRecipeStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const AddRecipeButton = () => {
  // const loading = useAppSelector(selectOnAddMyRecipeStatus) === true;
  return <ButtonSubmit label="Crear receta" isLoading={true} />;
};

export default AddRecipeButton;
