import Albumcom from "../components/albumscomponets/Album";
import Sidebar from "../components/Sidebar";
import Joinplatform from "../components/Joinplatform";
import Video from "../components/Video";
import Musicgenra from "../components/discovercomponents/Musicgenra";
const Album = () => {
  return (
    <div className="flex m-auto h-[3100px]  min-w-[1400px]  overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="ml-auto h-full mr-auto">
        <Albumcom />
        <hr />
        <Video/>
        <Musicgenra/>
        <hr />
        <Joinplatform />
      </div>
    </div>
  );
};

export default Album;
