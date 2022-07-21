import React, { useEffect, useState, FC, SyntheticEvent } from 'react';
import './style.scss';
import { 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormControl, 
  TextField, 
  RadioProps,
} from '@mui/material';
import { Button } from '../Button';
import { UploadInput } from '../UploadInput/UploadInput';
import { getPositions, setUser } from '../../api/UsersService';
import { errorMessages, helperMessages, initialUserRequest, maxNameLength, regExps } from '../../utils/constants';
import { PositionsRequest, User } from '../../utils/interface';
import { setErrorAction } from '../../store/actions';
import { useDispatch } from 'react-redux';

export const Form: FC = () => {
  const dispatch = useDispatch();
  const [positions, setPositions] = useState([]);
  const [request, setRequest] = useState<User>(initialUserRequest);
  const [error, setError] = useState({
    name:  false,
    email: false,
    phone: false,
    photo: false,
  });

  useEffect(() => {
    getPositions()
      .then((res: PositionsRequest) => {
        setPositions(res.positions);
      })
      .catch((error) => {
        dispatch(setErrorAction(error.message))
      });
  }, [dispatch]);


  const onChange = (event: SyntheticEvent<Element, Event>, type: string) => {
    const value = (event.target as HTMLInputElement).value;

    setRequest({
      ...request,
      [type]: value,
    });

    if (type !== 'position') {
      setError({
        ...error,
        [type]: !value.match(regExps[type]),
      });
    };
  };

  const onSetFile = (event: SyntheticEvent<Element, Event>) => {
    const file = (event.target as HTMLInputElement).files[0];

    setRequest({
      ...request,
      photo: file,
    });

    setError({
      ...error,
      photo: (file.size > (1024 ** 2) * 5) || !file.type.match(regExps.photo),
    });
  };


  function CustomRadio(props: RadioProps) {
    return (
      <Radio
        sx={{
          '&.Mui-checked': {
            color: '#00BDD3',
          },
        }}
        {...props}
      />
    );
  };

  const onSubmit = () => {
    setUser(request)
      .then((result) => {
        if (result.success) {
          setRequest(initialUserRequest);
        };

        dispatch(setErrorAction(result.message));
      })
      .catch((err) => {
        dispatch(setErrorAction(err.message));
      })
  };

  const isSubmitDisabled = () => {
    return !Object.values(request).every(item => typeof item === 'object' ? item.type : item !== '') || !Object.values(error).every(item => !item)
  };

  return (
    <div className='form' id='sign-up'>
      <h1 className='form__title'>
        Working with POST request
      </h1>
      <div className='form__container'>
        <FormControl>
          <TextField
            className='form__input'
            helperText={error.name ? errorMessages.name : helperMessages.name}
            error={error.name}
            label="Your name"
            value={request.name}
            onChange={(event) => onChange(event, 'name')}
            inputProps={{ maxLength: maxNameLength }}
          />
        </FormControl>

        <FormControl>
          <TextField
            className='form__input'
            helperText={error.email ? errorMessages.email : helperMessages.email}
            error={error.email}
            label="Email"
            value={request.email}
            onChange={(event) => onChange(event, 'email')}
          />
        </FormControl>

        <FormControl>
          <TextField
            className='form__input'
            helperText={error.phone ? errorMessages.phone : helperMessages.phone}
            error={error.phone}
            label="Phone"
            value={request.phone}
            onChange={(event) => onChange(event, 'phone')}
          />
        </FormControl>

        <FormControl>
          <label id="position-group" className='form__label'>
            Select your position
          </label>
          <RadioGroup
            defaultValue={1}
            aria-labelledby="position-group"
          >
            {positions.map(position => (
              <FormControlLabel 
                key={position.id}
                onChange={(event) => onChange(event, 'position')}
                value={position.id} 
                control={<CustomRadio />} 
                label={position.name}
                className="form__radio"
              />
            ))}
          </RadioGroup>
        </FormControl>
        <UploadInput
          error={error.photo}
          onSetFile={onSetFile}
          fileName={request.photo.name}
          helperText={helperMessages.photo}
          errorText={errorMessages.photo}
        />
        <div className='form__button'>
          <Button 
            label="Sign up"
            disabled={isSubmitDisabled()}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};
