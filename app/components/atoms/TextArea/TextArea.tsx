import { ITextArea } from "@/app/interfaces/app/components/atoms/texAreatnterface";

export default function TextArea(props: ITextArea) {
  const { id, label, cols, rows, className } = props;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="text-sm mb-2 ml-1 text-white font-bold">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={id}
        cols={cols}
        rows={rows}
        className={`${
          className ? className : ""
        } resize-none text-sm text-white px-4 py-2 bg-transparent rounded-3xl border-solid border-2 border-white focus:outline-none focus:border-sweet-buttermilk transition-all duration-300 ease-in-out`}
      />
    </div>
  );
}
