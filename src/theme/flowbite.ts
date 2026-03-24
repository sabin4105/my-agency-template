import { createTheme } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

export const flowbiteTheme: CustomFlowbiteTheme = createTheme({
  button: {
    color: {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus:ring-primary-800",
    },
    outlineColor: {
      primary:
        "border border-primary-600 text-primary-700 hover:border-primary-700 hover:bg-primary-700 hover:text-white focus:ring-primary-300 dark:border-primary-400 dark:text-primary-300 dark:hover:border-primary-500 dark:hover:bg-primary-500 dark:hover:text-white dark:focus:ring-primary-800",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          primary:
            "border-primary-200 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 dark:border-primary-900 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400",
        },
      },
    },
  },
  textarea: {
    colors: {
      primary:
        "border-primary-200 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 dark:border-primary-900 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400",
    },
  },
});
