import Image from "next/image";
import Pagination from "./components/pagination";

export default function Home() {
  return (
    <>
      <div>Hello world</div>
      <Pagination itemCount={100} pageSize={10} currentPage={10} />
    </>
  );
}
