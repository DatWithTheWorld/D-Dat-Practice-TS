import {
  INPUT_FIELD,
  movieEvaluateSl,
  movieTypes,
} from '../../resources/constants/constant';
import formGroupInput from './formGroupInput';

const Form = () => {
  return `
       <form>
           ${INPUT_FIELD.map((value) => {
             return formGroupInput(value);
           }).join('')}
           <div>
                <label>Type</label>
                <select class = "inputAddField-Type" name="movieTypeSl">
                    ${movieTypes
                      .map((value) => {
                        const options = value.options
                          .map(
                            (option) =>
                              `<option value="${option.value}">${option.text}</option>`,
                          )
                          .join('');
                        return `<optgroup label="${value.label}">${options}</optgroup>`;
                      })
                      .join('')}
                </select>
           </div>
           <div>
                <label>Evaluate</label>
                <select class = "inputAddField-Evaluate" name = "movieEvaluateSl">
                ${movieEvaluateSl
                  .map((value) => {
                    const options = value.options
                      .map(
                        (option) =>
                          `<option value="${option.value}">${option.text}</option>`,
                      )
                      .join('');
                    return `<optgroup label="${value.label}">${options}</optgroup>`;
                  })
                  .join('')}
                </select>
           </div>
           <div>
                <label>Description</label>
                <input class = "inputAddField-Description" name = "description">
           </div>
           <button class = "btn btn-primary addmoviebtn" id="AddNewMovie">Add</button>
       </form>
    `;
};

export default Form;
