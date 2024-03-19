import Header from "../components/Header";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";

const Send = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-20 w-[30%] text-center shadow-md p-5 rounded-lg">
        <Header heading={"Send Money"} />
        <div className="flex flex-col gap-8 items-start p-5">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 bg-green-500 rounded-full flex justify-center items-center">
              <span className="text-white text-2xl font-semibold">A</span>
            </div>
            <div className="text-3xl font-semibold">Freind's name</div>
          </div>
          <Inputbox label={'Amount (in Rs)'} placeholder={'Enter amount'}/>
          <button className="w-full bg-green-500 active:bg-black text-white font-bold py-2 px-4 rounded-md text-xl" onClick={onclick}>
          Initiate Transfer
</button>
        </div>
      </div>
    </div>
  );
};

export default Send;
