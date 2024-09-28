import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TextCustom from '../../components/TextCustom/index.jsx';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: 4,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setRepeatPassword] = useState(false);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigateToSignIn = () => {
    navigate('/sign-in');
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowRepeatPassword = () => {
    setRepeatPassword(!showRepeatPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <SignUpContainer direction="column" justifyContent="space-between">
      <Stack
        sx={{
          justifyContent: 'center',
          height: '100dvh',
          p: 2,
        }}
      >
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            }}
          >
            Registrarse
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => handleSubmitForm(data))}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
            noValidate
          >
            <TextCustom
              control={control}
              name="name"
              label="Nombre"
              required
              fullWidth
              type="text"
              errors={errors}
              rules={{
                required: 'Nombre es requerido',
              }}
            />
            <TextCustom
              control={control}
              name="document"
              label="Documento"
              required
              fullWidth
              type="text"
              errors={errors}
              rules={{
                required: 'Documento es requerido',
              }}
            />
            <TextCustom
              control={control}
              name="phone"
              label="Teléfono"
              required
              fullWidth
              type="text"
              errors={errors}
              rules={{
                required: 'Teléfono es requerido',
              }}
            />
            <TextCustom
              control={control}
              name="email"
              label="Correo"
              required
              fullWidth
              type="email"
              errors={errors}
              rules={{
                required: 'Correo es requerido',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Correo inválido',
                },
              }}
            />
            <TextCustom
              control={control}
              name="password"
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              required
              rules={{
                required: 'Contraseña es requerido',
              }}
              errors={errors}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className={'h-60px]'}
            />
            <TextCustom
              control={control}
              name="repeatPassword"
              label="Repetir contraseña"
              type={showRepeatPassword ? 'text' : 'password'}
              required
              rules={{
                required: 'Repetir contraseña es requerido',
                validate: {
                  matchPasswords: (value) => {
                    if (value !== getValues('password'))
                      return 'Las contraseñas no coinciden';
                  },
                },
              }}
              errors={errors}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowRepeatPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className={'h-60px]'}
            />
            <Button type="submit" fullWidth variant="contained">
              Registrarse
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Ya tienes cuenta?{' '}
              <span>
                <Link
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                  onClick={navigateToSignIn}
                >
                  Iniciar sesión
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </Stack>
    </SignUpContainer>
  );
}
