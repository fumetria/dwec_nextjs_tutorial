export default function Page() {
  return (
    <>
      <div className="grid grid-rows-2">
        <div className="row-span-1 flex">
          {/* <div className="w-48 h-48 bg-slate-950 text-white">slate-950</div> */}
          <div className="w-48 h-48 bg-slate-900 text-white">slate-900</div>
          <div className="w-48 h-48 bg-slate-800 text-white">slate-800</div>
          <div className="w-48 h-48 bg-slate-600 text-white">slate-600</div>
        </div>
        <div className="row-span-2 flex">
          {/* <div className="w-48 h-48 bg-cyan-950 text-white">cyan-950</div>
          <div className="w-48 h-48 bg-cyan-900 text-white">cyan-900</div> */}
          <div className="w-48 h-48 bg-cyan-800 text-white">cyan-800</div>
          <div className="w-48 h-48 bg-cyan-700 text-white">cyan-700</div>
          <div className="w-48 h-48 bg-cyan-500 text-white">cyan-500</div>
          <div className="w-48 h-48 bg-cyan-400 text-white">cyan-400</div>
        </div>
      </div>
    </>
  );
}
