// there is a datepicker we can use with TextField using type="date" but this is not the best solution.
// need to write :    npm i @material-ui/pickers  and npm i @date-io/date-fns@1.x date-fns   to get the package for the date input.
import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const convertToDefEventPara = (name, value) => {
  const convertedEvent = {
    target: {
      name,
      value,
    },
  };
  return convertedEvent;
};

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          inputVariant='outlined'
          label={label}
          format='MMM/dd/yyyy'
          name={name}
          value={value}
          //   Kind of confused why it is "(date) =>"
          onChange={(date) => onChange(convertToDefEventPara(name, date))}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePicker;
