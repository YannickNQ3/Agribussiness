import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Footer = () => {
  const styles = {
    textDecoration: 'none',
    color: "#fff",
    '&:hover': {
      color: '#5bce39',
    }
  };
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'grey.700' }}>

      <Container maxWidth="md" sx={{ py: 3 }}>
        <Stack spacing={2}>

          <Typography>
            Consultas: (+51) 007-803-321-2130
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    FAQ
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Privacidad
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Centro de Ayuda
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Cookies
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Noticias
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Acerca de la Cuenta
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Tutoriales
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Acerca de AGRI
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Seguridad de la Información
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Terminos de Uso
                  </Typography>
                  <Typography sx={styles} variant="caption" component="a" href="#">
                    Politica de Privacidad
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

          <Box>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="ES"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'common.white',
                color: 'common.white',
                '& .MuiSelect-icon': {
                  color: 'common.white'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }}
            >
              <MenuItem value="ES">Español</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer