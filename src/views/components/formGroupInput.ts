const formGroupInput = (content: { label: string; className: string; type: string; placeholder: string; name: string; accept?: undefined; } | { label: string; className: string; type: string; name: string; placeholder?: undefined; accept?: undefined; } | { label: string; className: string; type: string; name: string; accept: string; placeholder: string; } | { label: string; className: string; type: string; accept: string; placeholder: string; name?: undefined; }) => {
  let { label, className, type, placeholder, name } = content;
  return `
       <div>
            <label>${label}</label>
            <input class = "${className}" type = "${type}" placeholder = "${placeholder}" name = "${name}">       
       </div>
    `;
};
export default formGroupInput;
