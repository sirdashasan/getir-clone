import maintenanceImage from "../assets/images/maintenance-images/maintenance.png";
import GetirBanner from "../components/GetirBanner";

const GetirYemek = () => {
  return (
    <>
      <GetirBanner />

      <div className="flex flex-col items-center justify-center bg-[#f8f8f8] p-4 mt-[20px]">
        <img
          src={maintenanceImage}
          alt="Bakımda"
          className="max-w-xs md:max-w-md lg:max-w-lg"
        />
        <h1 className="text-lg md:text-xl font-semibold text-[#5d3ebc] mt-4 text-center">
          Şu anda GetirYemek hizmeti bakımda. Yakında tekrar hizmetinizde!
        </h1>
      </div>
    </>
  );
};

export default GetirYemek;
