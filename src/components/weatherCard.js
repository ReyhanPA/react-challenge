import Image from "next/image";

export default function WeatherCard(props) {
  const { date = "Error!", time = "Error!", main = "Error!", description = "Error!", icon = "10d" } = props;

  return (
    <div className="flex justify-center items-center w-2/5 rounded-lg border-2 border-cyan-800 p-2">
      <div className="flex-col justify-start items-center w-1/2 gap-2">
        <h1 className="text-base text-start font-semibold text-cyan-800">{date}</h1>
        <h1 className="text-sm text-start font-medium text-cyan-800">{time} WIB</h1>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <div>
          <h1 className="text-base text-end font-semibold text-cyan-800">{main}</h1>
          <h1 className="text-sm text-end font-medium text-cyan-800">{description}</h1>
        </div>
        <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" height={50} width={50} />
      </div>
    </div>
  );
}
