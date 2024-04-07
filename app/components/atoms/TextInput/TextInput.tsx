import { ITextInput } from "@/app/interfaces/app/components/atoms/textInputInterface";

export default function TextInput(props: ITextInput) {
  const { id, label, value, type, onChange, className } = props;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="text-sm mb-2 ml-1 text-white font-bold">
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        autoComplete="off"
        className={`${
          className ? className : ""
        } text-sm text-white px-4 py-2 bg-transparent rounded-3xl border-solid border-2 border-white focus:outline-none focus:border-sweet-buttermilk transition-all duration-300 ease-in-out`}
      />
    </div>
  );
}
