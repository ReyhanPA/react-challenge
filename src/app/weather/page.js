import FormSearch from "@/components/formSearch";

export default function WeatherPage() {
  return (
    <div className="flex-col pt-24 bg-white">
      <div className="flex justify-start px-4">
        <h1 className="text-lg font-semibold text-cyan-800">Weather</h1>
      </div>
      <FormSearch />
      <h1 className="text-2xl font-bold text-center mt-4 text-cyan-800">Not implemented yet</h1>
    </div>
  );
}
