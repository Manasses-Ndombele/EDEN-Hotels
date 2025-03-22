import founderPhoto from "../../assets/Chefes-1.jpeg";

function HistoryArea() {
  return (
    <div id="history-area" className="p-5">
      <h2 className="dm-serif-display-regular uppercase text-2xl color-b font-bold">Nossa história</h2>
      <p className="libre-baskerville-regular color-a italic mt-2 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        assumenda ipsum quo harum maxime necessitatibus esse voluptas doloremque
        ullam fuga unde temporibus, eaque dicta earum ratione voluptatibus
        minima error quam. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum, atque cum? Quasi, atque nisi explicabo cumque nostrum
        temporibus nemo assumenda quidem commodi corrupti, omnis quae
        perferendis, nam neque rerum aliquid.
      </p>
      <img src={founderPhoto} className="h-[25rem] object-cover" alt="Foto do fundador da EDEN Hotels" />
    </div>
  );
}

export default HistoryArea;
