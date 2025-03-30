import videoMp4 from "../../assets/hotelvideo.mp4";
import videoWebm from "../../assets/hotelvideo.webm";

function HotelVideo() {
  return (
    <div className="overlay mx-auto w-[100%] md:w-[80%] max-w-[700px] h-auto">
        <video
          autoPlay={true}
          muted={true}
          controls={true}
          loop={true}
          className="w-full h-auto"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
          <p className="text-red-600 text-center text-uppercase">Tentamos carregar um vídeo mas seu navegador não suporta WEBM ou MP4 atualize para navegadores modernos como o Chrome e o Edge</p>
        </video>
    </div>
  );
}

export default HotelVideo;
