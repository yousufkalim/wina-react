import { snackBarActions } from "./constants";

export const enqueueSnackbar = (notification) => {
  const key = notification.options && notification.options.key;

  return {
    type: snackBarActions.ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

export const closeSnackbar = (key) => ({
  type: snackBarActions.CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key) => ({
  type: snackBarActions.REMOVE_SNACKBAR,
  key,
});

export const snackBar = (message, variant) => ({
  message,
  options: {
    key: new Date().getTime() + Math.random(),
    variant,
  },
});
