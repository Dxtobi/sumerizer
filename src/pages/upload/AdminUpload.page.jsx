import { useState } from "react";
import Search from "../../components/common/Search";
import Inputs from "../../components/inputs/Inputs";


const arrayCoun = [1,1,1,1,1,1,]

function AdminUpload() {
    const [inputeValue, setValue] = useState('')
    return (
        <section className="text-white px-10 py-10 w-full">
            <div className="flex justify-between items-center w-full">
                <div className="text-4xl">UPLOAD NEW CONTENT</div>
                <div className="w-[60%] justify-end items-end flex">
                    <Search />
                </div>
            </div>
            <div>
                <select className=" rounded-2xl bg-[#E93C24] text-white p-3 my-4">
                    <option>Upload</option>
                </select>
            </div>
            <div className="flex items-center gap-[5rem] ">
                <div className="bg-[#C4C4C4] w-[25%] h-[700px] rounded-lg relative">

                   <div className="flex absolute bottom-1 w-full justify-center">
                        <div className="flex items-center gap-3 w-[90%]">
                            <div className="w-[80%] bg-[#E93C24] rounded-full h-1">
                                <div className="w-[20%] bg-black rounded-full h-1"></div>
                            </div>
                            <div className="text-[#E93C24]">20%</div>
                        </div>

                    </div> 

                </div>
                <div className="h-[500px] w-[1px] bg-[#E93C24]"></div>
                <div className="w-[50%] flex justify-center flex-col gap-3">
                    <div className="flex flex-col gap-3 w-[50%]">
                        <Inputs value={inputeValue} placeholder={'Collection name'} type={'text'} name={'colleectionname'} propsOnChange={setValue} />
                        <Inputs value={inputeValue} placeholder={'Keywords'} type={'text'} name={'keywords'} propsOnChange={setValue} />
                        <Inputs value={inputeValue} placeholder={'Genre'} type={'text'} name={'genre'} propsOnChange={setValue} />
                    </div>

                    <div className="flex gap-3 my-4">
                        {
                            arrayCoun.map((e, i) => (
                                <div key={i} className="w-[70px] mb-2">
                                    <img src='/pic1.png' alt='' className="w-full object-cover" />
                                    <div className="p-3 border border-[#E93C24] rounded-2xl">Title</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="w-full">
                        <select className=" rounded-2xl bg-[#E93C24] text-white p-3 my-4 w-1/2">
                            <option>Placement</option>
                        </select>
                    </div>
                    <button className=" rounded-2xl bg-[#E93C24] text-white p-3 my-4 px-10 w-fit">Upload</button>
                </div>
            </div>
            <div className="flex gap-3 my-4">
                        {
                            arrayCoun.map((e, i) => (
                                <div key={i} className="w-1/4 flex flex-col gap-4">
                                    <img src='/pic1.png' alt='' className="w-full h-[300px] object-contain bg-slate-950 rounded-lg" />
                                    <div className="">
                                        <div className="font-extrabold text-2xl">DIRECTOR’S CUT</div>
                                        <div className="font-extralight">CHRISTSPIRACY</div>
                                        <div className="font-extralight">121 MINUIT</div>

                                    </div>
                                </div>
                            ))
                        }
            </div>
            <div className="flex  w-1/4 justify-center my-10 mx-auto ">
                        <div className="flex items-center gap-3 w-[90%]">
                            <div className="w-[80%] bg-[#E93C24] rounded-full h-1">
                                <div className="w-[20%] bg-white rounded-full h-1"></div>
                            </div>
                        </div>
                    </div>
        </section>
    );
}

export default AdminUpload;