import { useAppDispatch } from "@/store/hooks";
import { Input, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FileLarge from "components/common/Forms/FileLarge";

import { useRouter } from "next/router";
import CreateExerciseButton from "./CreateExerciseButton";
import { categoriesSelectMapper } from "lib/mocks/categories";
import { blendersSelectMapper } from "lib/mocks/blenders";

type Selector = {
  label: any;
  value: any;
};

const CreateExerciseForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [selectedBlenders, setSelectedBlenders] = useState<Selector[]>([]);
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
        <div className="col-span-full lg:col-span-6">
          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
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
            <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
              <FileLarge
                label="Imagen"
                name="file"
                options={{
                  required: {
                    value: true,
                    message: "Añade una imagen",
                  },
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
              <Input
                name="servings"
                type="number"
                label="Raciones"
                options={{
                  required: {
                    value: true,
                    message: "Introduce un número",
                  },
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
              <Input
                name="duration"
                type="number"
                label="Tiempo (mins)"
                options={{
                  required: {
                    value: true,
                    message: "Introduce un número",
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
          </div>
        </div>
        <div className="col-span-full lg:col-span-6">
          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-full sm:col-span-6 lg:col-span-full ">
              <MultiSelect
                label="Categorías"
                options={categoriesSelectMapper}
                value={selectedCategories}
                onChange={setSelectedCategories}
                labelledBy="Select"
              />
            </div>
            <div className="col-span-full sm:col-span-6 lg:col-span-full ">
              <MultiSelect
                label="Robots de cocina"
                options={blendersSelectMapper}
                value={selectedBlenders}
                onChange={setSelectedBlenders}
                labelledBy="Select"
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
