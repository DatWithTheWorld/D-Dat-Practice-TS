function Toast(type: 'error' | 'success' | 'warning', msg: string) {
  const icons = {
      error: 'ti-na',
      info: 'ti-info-alt',
      warning: 'ti-alert',
  };

  const icon = icons[type as keyof typeof icons];

  return `
      <div class="column">
          <i class="${icon}"></i>
          <span>${msg}</span>
      </div>
      <i class="ti-close"></i>
  `;
}

export default Toast;