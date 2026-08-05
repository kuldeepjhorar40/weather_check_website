import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function WeatherCard({
  temp_min,
  temp_max,
  humidity,
}) {
    let HOT = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7PMYsPysMqcUnBZUPwiC3dx7bgWTI1psYSlAVdMN3w&s=10";
    let COLD = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmxgzpJhNnHS36gO9DgzZDsYPKRMlpMlRg6hRaFLt0g&s=10";
    let RAINY = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgepxw6w6PLUUt20ago6hWTlQ_CYn4wVfSsqFdiFTtwQ&s=10";
  return (
    <Card
      sx={{
        width: 350,
        margin: "30px auto",
        borderRadius: "15px",
        boxShadow: 5,
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={ humidity>80 ?RAINY :temp_max> 25 ? HOT : temp_min< 15 ? COLD: null}
        alt="Weather Image"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          fontWeight="bold"
        >
          🌤 Weather Report
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          🌡 <b>Minimum Temperature:</b> {temp_min} °C
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          🔥 <b>Maximum Temperature:</b> {temp_max} °C
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          💧 <b>Humidity:</b> {humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
}