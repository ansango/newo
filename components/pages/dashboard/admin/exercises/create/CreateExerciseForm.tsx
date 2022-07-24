import { useAppDispatch } from "@/store/hooks";
import { Input, RadioGroup, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useRouter } from "next/router";
import CreateExerciseButton from "./CreateExerciseButton";
import { categories, muscles } from "lib/mocks";
type Selector = {
  label: any;
  value: any;
};

const CreateExerciseForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<Selector[]>([]);
  const dispatch = useAppDispatch();

  const methods = useForm({
    defaultValues: {
      ingredients: [],
      steps: [],
    },
  });
  const { handleSubmit } = methods;

  const { replace } = useRouter();

  // const onSubmit = useCallback(
  //   async (values: any) => {
  //     const image = values.file[0];
  //     const isImage = image ? image.type.startsWith("image") : null;
  //     if (image && isImage) {
  //       const formData = new FormData();
  //       formData.append("image", image);
  //       const recipe = {
  //         name: values.name,
  //         description: values.description,

  //         duration: values.duration,
  //         servings: values.servings,
  //         categories: selectedCategories.map(({ value }) => value),
  //         blenders: selectedBlenders.map(({ value }) => value),
  //         ingredients: values.ingredients.map((ingredient: any) => {
  //           return {
  //             name: ingredient.name,
  //             quantity: parseInt(ingredient.quantity),
  //             measure: ingredient.measure,
  //           };
  //         }),
  //         steps: values.steps,
  //       };

  //       const redirect = (id: string) => replace(`/exercises/${id}`);
  //     }
  //   },
  //   [dispatch, selectedCategories, selectedBlenders, replace]
  // );

  return (
    <FormProvider {...methods}>
      <form
        className="grid gap-5 grid-cols-12"
        onSubmit={handleSubmit(console.log)}
      >
        <div className="col-span-full">
          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-full">
              <Input
                name="name"
                label="Nombre"
                type="text"
                options={{
                  required: {
                    value: true,
                    message: "Introduce un nombre",
                  },
                }}
              />
            </div>
            <div className="col-span-full">
              <TextArea
                name="description"
                label="Descripción"
                options={{
                  required: {
                    value: true,
                    message: "Introduce una descripción",
                  },
                  minLength: {
                    value: 135,
                    message: "Al menos 135 caracteres",
                  },
                }}
              />
            </div>
            <div className="col-span-full">
              <RadioGroup
                name="difficulty"
                label="Dificultad"
                data={[
                  {
                    lab: "Fácil",
                    value: "easy",
                  },
                  {
                    lab: "Intermedio",
                    value: "medium",
                  },
                  {
                    lab: "Difícil",
                    value: "hard",
                  },
                ]}
                options={{
                  required: {
                    value: true,
                    message: "Selecciona una dificultad",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-full">
              <MultiSelect
                label="Categorías"
                options={categories}
                value={selectedCategories}
                onChange={setSelectedCategories}
                labelledBy="Select"
                hasSelectAll={false}
              />
            </div>

            {/* <div className="col-span-full">
              <MultiSelect
                label="Equipamiento"
                options={categories}
                value={selectedCategories}
                onChange={setSelectedCategories}
                labelledBy="Select"
              />
            </div> */}

            <div className="col-span-full">
              <MultiSelect
                label="Músculos"
                options={muscles}
                value={selectedMuscles}
                onChange={setSelectedMuscles}
                labelledBy="Select"
                hasSelectAll={false}
              />
            </div>

            <div className="col-span-full">
              <Input
                name="video"
                label="Video"
                type="text"
                options={{
                  required: {
                    value: true,
                    message: "Introduce una url de video",
                  },
                  pattern: {
                    value:
                      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
                    message: "Introduce una url de video de youtube",
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <div className="flex justify-end w-full">
            <CreateExerciseButton />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateExerciseForm;
