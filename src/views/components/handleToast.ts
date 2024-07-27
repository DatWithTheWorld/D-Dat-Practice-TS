import Toast from './Toast';

interface ToastElement extends HTMLLIElement {
  timeoutId?: ReturnType<typeof setTimeout>;
}

export const removeToast = (toast: ToastElement) => {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

export const createToast = (
  type: 'error' | 'success' | 'warning' = 'error',
  msg: string = 'Error: Fail to implement!'
) => {
  const toastList = document.querySelector('.notifications') as HTMLElement;

  const toast = document.createElement('li') as ToastElement;
  toast.className = `toast ${type}`;
  toast.innerHTML = Toast(type, msg);
  toastList.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
};