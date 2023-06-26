/* eslint-disable react/prop-types */

import {   BsLink } from 'react-icons/bs'

function Search({ onChangeFunc, on_keydown, handleSubmit }) {


   
    return (
        <div className="row-span-1 border-2 border-[#e7e7e7] w-[100%] md:w-[70%] p-1 rounded flex items-center bg-white my-3 px-2 gap-2">
            <BsLink color={'blue'} size={30}/>
            <input placeholder="URL" className="bg-transparent w-full p-2 outline-none  border-l border-r" type='url' onChange={(e)=>onChangeFunc(e)} onKeyDown={on_keydown} required={true} />
            <button onClick={handleSubmit} className='text-orange-600'>
                Enter
            </button>
        </div>
    );
}

export default Search;