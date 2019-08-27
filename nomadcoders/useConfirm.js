
const useConfirm = (message, callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback && callback();
    } else {
      rejection && rejection();
    }
  };
  return confirmAction;
};

export default useConfirm;