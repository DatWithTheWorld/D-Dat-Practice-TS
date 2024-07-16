const formGroupInput = (content) => {
  let { label, className, type, placeholder, name } = content;
  return `
       <div>
            <label>${label}</label>
            <input class = "${className}" type = "${type}" placeholder = "${placeholder}" name = "${name}">       
       </div>
    `;
};
export default formGroupInput;
