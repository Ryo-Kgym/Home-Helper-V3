import toast from "react-hot-toast";

export const notify = (message: string) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex w-full max-w-md rounded-xl border-2 bg-neutral-200 shadow-xl`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-lg font-medium text-gray-900">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ),
    {
      duration: 1000,
    },
  );
};
