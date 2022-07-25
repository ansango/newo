import { Input, RadioGroup, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import CreateExerciseButton from "./CreateExerciseButton";
import { categories, muscles } from "lib/constants";
import { Icon } from "components/common/Icons";
import ReactPlayer from "react-player";

import Model, { ExerciseData } from "components/common/BodyHighlighter";
import { useCreateExerciseMutation } from "@/store/api/exercises";

type Selector = {
  label: any;
  value: any;
};

const CreateExerciseForm = () => {
  const [createExercise] = useCreateExerciseMutation();
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<Selector[]>([]);

  const [video, setVideo] = useState<string | null>(null);
  const [showMuscles, setShowMuscles] = useState<boolean>(false);

  const methods = useForm({
    defaultValues: {
      video: "",
      name: "",
    },
  });
  const { handleSubmit, watch } = methods;

  const closeVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVideo(null);
  };

  const handleShowMuscles = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMuscles(!showMuscles);
  };

  const checkVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url = watch("video");
    if (url.match(/^(https?:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/)) {
      setVideo(url);
    }
  };
  const data: ExerciseData[] = [
    {
      name: watch("name"),
      muscles: [...selectedMuscles.map((m) => m.value)],
    },
  ];

  const onSubmit = useCallback(
    async (values: any) => {
      createExercise({
        ...values,
        muscles: [...selectedMuscles.map((m) => m.value)],
        categories: [...selectedCategories.map((c) => c.value)],
      });
    },
    [createExercise, selectedMuscles, selectedCategories]
  );

  return (
    <FormProvider {...methods}>
      <form
        className="grid gap-5 grid-cols-12"
        onSubmit={handleSubmit(onSubmit)}
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
                    value: 5,
                    message: "Al menos 35 caracteres",
                  },
                }}
              />
            </div>
            <div className="col-span-full">
              <RadioGroup
                kind="secondary"
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

            <div className="col-span-full">
              <div className="flex gap-5 items-end">
                <MultiSelect
                  label="Músculos"
                  options={muscles}
                  value={selectedMuscles}
                  onChange={setSelectedMuscles}
                  labelledBy="Select"
                  hasSelectAll={false}
                />
                <button
                  className="btn btn-square btn-secondary"
                  onClick={handleShowMuscles}
                >
                  <Icon
                    className="w-5 h-5"
                    icon={!showMuscles ? "EyeIcon" : "XIcon"}
                    kind="outline"
                  />
                </button>
              </div>
            </div>
            <div className="col-span-full">
              {showMuscles && (
                <div className="grid gap-5 grid-cols-2">
                  <div className="max-w-sm">
                    <Model data={data} />
                  </div>
                  <div className="max-w-sm">
                    <Model data={data} type="posterior" />
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-full">
              <div className="flex gap-5 items-end">
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
                <button
                  className="btn btn-square btn-secondary"
                  onClick={checkVideo}
                >
                  <Icon className="w-5 h-5" icon="EyeIcon" kind="outline" />
                </button>
              </div>
              <div className="col-span-full py-16">
                {video && (
                  <>
                    <div className="indicator">
                      <div className="indicator-item ">
                        <button
                          className="btn btn-square btn-secondary btn-sm"
                          onClick={closeVideo}
                        >
                          <Icon
                            className="w-4 h-4"
                            icon="XIcon"
                            kind="outline"
                          />
                        </button>
                      </div>
                      <div className="card border card-compact bg-base-100 shadow-lg">
                        <div className="card-body">
                          <ReactPlayer
                            url={video}
                            controls
                            muted
                            width={360}
                            height={240}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
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
