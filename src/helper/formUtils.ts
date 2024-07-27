export function clearForm(form : HTMLFormElement) {
  const inputs = form.querySelectorAll('input');
  for (const item of inputs) {
    item.value = '';
  }
}

export function collectData(form: HTMLFormElement) {
  const data: { [key: string]: any } = {};
  const movieForm = new FormData(form);
  for (const key of movieForm.keys()) {
    const input = form.querySelector(`[name="${key}"]`) as HTMLInputElement;
    switch (input.type) {
      case 'number':
        data[key] = movieForm.get(key) !== null && !isNaN(Number(movieForm.get(key))) ? parseInt(movieForm.get(key) as string, 10) : null;
        break;
      case 'radio':
        data[key] = input.checked;
        break;
      default:
        data[key] = movieForm.get(key);
    }
  }
  return data;
}